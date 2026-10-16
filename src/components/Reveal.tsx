import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { checkReducedMotion } from '../lib/motion';

gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: React.ReactNode;
  variant?: 'fadeUp' | 'maskText' | 'clipImage' | 'scaleIn';
  delay?: number;
  duration?: number;
  className?: string;
  start?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.8,
  className = '',
  start = 'top 88%',
}) => {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (checkReducedMotion() || !elRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const el = elRef.current;
      if (!el) return;

      if (variant === 'maskText') {
        gsap.fromTo(
          el,
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: 'play none none none',
            },
          }
        );
      } else if (variant === 'clipImage') {
        gsap.fromTo(
          el,
          { clipPath: 'inset(15% 0% 0% 0%)', scale: 1.12, opacity: 0.8 },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            scale: 1,
            opacity: 1,
            duration: duration * 1.2,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: 'play none none none',
            },
          }
        );
      } else if (variant === 'scaleIn') {
        gsap.fromTo(
          el,
          { scale: 0.94, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: 'play none none none',
            },
          }
        );
      } else {
        // default fadeUp
        gsap.fromTo(
          el,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: 'play none none none',
            },
          }
        );
      }
    }, elRef);

    return () => ctx.revert();
  }, [variant, delay, duration, start]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
};
