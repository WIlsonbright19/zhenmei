import React, { useEffect, useState } from 'react';
import { checkReducedMotion } from '../lib/motion';

export const Preloader: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [animatingOut, setAnimatingOut] = useState(false);

  useEffect(() => {
    // If reduced motion is active or already loaded in this session, skip
    if (checkReducedMotion()) return;
    if (sessionStorage.getItem('zhenmei_preloaded')) return;

    setVisible(true);

    // Timing sequence: 1000ms display, then 600ms slide up, total ~1.6s
    const timerOut = setTimeout(() => {
      setAnimatingOut(true);
    }, 1000);

    const timerComplete = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('zhenmei_preloaded', 'true');
    }, 1600);

    return () => {
      clearTimeout(timerOut);
      clearTimeout(timerComplete);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#081010] text-[#fefcf8] flex flex-col items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        animatingOut ? '-translate-y-full' : 'translate-y-0'
      }`}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-3xl sm:text-4xl font-bold tracking-[0.25em] uppercase text-[#fefcf8] animate-pulse">
          ZHEN MEI
        </span>
        <span className="text-xs uppercase tracking-[0.3em] text-[#bbb9b5]">
          San Francisco
        </span>
      </div>
    </div>
  );
};
