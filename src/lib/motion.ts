/**
 * Motion System Tokens & Presets for Zhen Mei Hair Salon
 * Centralized easing curves, durations, and GSAP/Motion animation specifications.
 */

export const motionTokens = {
  duration: {
    fast: 0.3,
    base: 0.7,
    slow: 1.2,
    deliberate: 1.5,
  },
  ease: {
    // Primary architectural reveal ease (snappy entry with ultra-smooth deceleration)
    reveal: [0.16, 1, 0.3, 1] as const,
    revealGsap: 'power3.out',
    // Smooth transition ease for route changes and curtains
    transition: [0.45, 0, 0.55, 1] as const,
    transitionGsap: 'power2.inOut',
    // Spring physics configuration for magnetic pull & button recovery
    spring: {
      type: 'spring' as const,
      stiffness: 350,
      damping: 25,
      mass: 0.8,
    },
    gentleSpring: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 20,
    },
  },
  stagger: {
    fast: 0.05,
    base: 0.09,
    cards: 0.14,
  },
  scrollTrigger: {
    startOffset: 'top 85%',
    toggleActions: 'play none none none',
  },
};

export const checkReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const isTouchDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};
