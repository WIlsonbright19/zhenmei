import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      setVisible(scrollY > 350);
      if (totalScroll > 0) {
        setScrollProgress(Math.min(1, Math.max(0, scrollY / totalScroll)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const circumference = 2 * Math.PI * 18; // radius 18
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        className="group relative w-12 h-12 flex items-center justify-center bg-[#081010] text-[#fefcf8] rounded-full shadow-lg hover:bg-[#1f453f] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#081010]"
      >
        {/* SVG Progress Ring */}
        <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
          <circle
            cx="22"
            cy="22"
            r="18"
            className="text-white/20 stroke-current"
            strokeWidth="2.5"
            fill="none"
          />
          <circle
            cx="22"
            cy="22"
            r="18"
            className="text-[#c6f0dc] stroke-current transition-all duration-100"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
};
