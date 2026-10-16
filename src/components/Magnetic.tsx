import React, { useRef, useState, useEffect } from 'react';
import { isTouchDevice, checkReducedMotion } from '../lib/motion';

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export const Magnetic: React.FC<MagneticProps> = ({
  children,
  strength = 0.25,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!isTouchDevice() && !checkReducedMotion()) {
      setEnabled(true);
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enabled || !containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: enabled ? `translate3d(${position.x}px, ${position.y}px, 0)` : 'none',
        transition: position.x === 0 && position.y === 0 ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'transform 0.1s linear',
        willChange: enabled ? 'transform' : 'auto',
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
};
