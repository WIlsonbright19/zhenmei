import React, { useEffect, useState, useRef } from 'react';
import { checkReducedMotion, isTouchDevice } from '../lib/motion';

export const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isInput, setIsInput] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices and if user prefers reduced motion
    if (isTouchDevice() || checkReducedMotion()) {
      return;
    }
    // Only enable if hover is supported
    if (!window.matchMedia('(hover: hover)').matches) {
      return;
    }

    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isVisible = false;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isVisible = true;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        dotRef.current.style.opacity = '1';
      }

      // Check hovered element
      const target = e.target as HTMLElement | null;
      if (target) {
        // If target is inside input, textarea, select, don't show custom cursor
        const interactiveInput = target.closest('input, textarea, select');
        setIsInput(!!interactiveInput);

        // Check for custom cursor label
        const labeledEl = target.closest('[data-cursor]');
        if (labeledEl) {
          setCursorText(labeledEl.getAttribute('data-cursor') || '');
        } else {
          setCursorText('');
        }

        // Check if interactive link or button
        const isClickable = target.closest('a, button, [role="button"], .homura-btn');
        setIsHovering(!!isClickable || !!labeledEl);
      }
    };

    const onMouseLeave = () => {
      isVisible = false;
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    let animationFrameId: number;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
        ringRef.current.style.opacity = isVisible && !isInput ? '1' : '0';
      }
      animationFrameId = requestAnimationFrame(animateRing);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    animationFrameId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isInput]);

  if (!enabled || isInput) return null;

  return (
    <>
      {/* Center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#081010] pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        aria-hidden="true"
      />
      {/* Outer ring with context badge */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color,border-color] duration-200 flex items-center justify-center ${
          cursorText
            ? 'w-16 h-16 bg-[#1f453f]/90 text-[#fefcf8] text-[10px] uppercase tracking-widest font-medium'
            : isHovering
            ? 'w-10 h-10 border border-[#081010]/80 bg-[#081010]/10 backdrop-blur-xs'
            : 'w-8 h-8 border border-[#081010]/40'
        }`}
        aria-hidden="true"
      >
        {cursorText && <span>{cursorText}</span>}
      </div>
    </>
  );
};
