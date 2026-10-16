import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config/site';
import { RollingButton } from './RollingButton';
import { Menu, X, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine if scrolled past threshold
      setIsScrolled(currentScrollY > 60);

      // Scroll direction check (hide on scroll down, show on scroll up)
      if (currentScrollY > 150) {
        if (currentScrollY > lastScrollY.current && currentScrollY - lastScrollY.current > 5) {
          // Scrolling down
          setIsVisible(false);
        } else if (lastScrollY.current - currentScrollY > 5) {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // Scrollspy: update active section based on scroll position
      const sections = ['hero', 'about', 'showcase', 'services', 'testimonial', 'faq', 'hours', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll lock when mobile drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Home', targetId: 'hero' },
    { label: 'About', targetId: 'about' },
    { label: 'Showcase', targetId: 'showcase' },
    { label: 'Services', targetId: 'services' },
    { label: 'Hours', targetId: 'hours' },
    { label: 'FAQs', targetId: 'faq' },
    { label: 'Contact', targetId: 'contact' },
  ];

  const scrollToSection = (targetId: string) => {
    setMobileMenuOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80; // Offset for sticky header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
      setActiveSection(targetId);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#fefcf8]/90 backdrop-blur-md border-b border-[#bbb9b5]/80 shadow-xs'
            : 'bg-[#fefcf8] border-b border-[#bbb9b5]/60'
        }`}
      >
        <div className="homura-container flex items-center justify-between h-20">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center text-xl md:text-2xl font-bold tracking-tight text-[#081010] uppercase whitespace-nowrap shrink-0 hover:opacity-85 transition-opacity"
            aria-label="Zhen Mei Hair Salon Home"
          >
            <span>ZHEN MEI</span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav
            role="navigation"
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-8 text-[16px] font-normal text-[#3a4140]"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.targetId;
              return (
                <a
                  key={link.label}
                  href={`#${link.targetId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.targetId);
                  }}
                  className={`py-1 relative whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-[#081010] font-medium after:w-full'
                      : 'hover:text-[#081010] after:w-0'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#081010] hover:after:w-full after:transition-all after:duration-300`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Action Buttons (Desktop) & Hamburger Button (Mobile) */}
          <div className="flex items-center gap-3 shrink-0">
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2.5 border border-[#081010] text-[#081010] text-sm font-medium hover:bg-[#081010] hover:text-[#fefcf8] transition-colors"
                aria-label="Call Zhen Mei Hair Salon"
              >
                <Phone size={15} />
                <span>Call Us</span>
              </a>
            )}

            <div className="hidden sm:block">
              <RollingButton
                variant="primary"
                href="#contact"
                onClick={() => scrollToSection('contact')}
                ariaLabel="Contact Zhen Mei Hair Salon"
              >
                Contact Us
              </RollingButton>
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 bg-[#081010] text-[#fefcf8] hover:bg-[#3a4140] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#081010]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
          className="fixed inset-0 z-50 lg:hidden flex flex-col bg-[#fefcf8] border-b border-[#bbb9b5] transition-all"
        >
          <div className="homura-container flex items-center justify-between h-20 border-b border-[#bbb9b5]/60">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('hero');
              }}
              className="text-xl font-bold tracking-tight text-[#081010] uppercase"
            >
              ZHEN MEI
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 bg-[#081010] text-[#fefcf8] hover:bg-[#3a4140] transition-colors"
              aria-label="Close navigation"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-between p-8 overflow-y-auto">
            <nav className="flex flex-col gap-5 text-2xl font-normal text-[#081010]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={`#${link.targetId}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.targetId);
                  }}
                  className="py-2 hover:translate-x-1 transition-transform border-b border-[#bbb9b5]/20 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs uppercase text-[#bbb9b5] font-mono">0{navLinks.indexOf(link) + 1}</span>
                </a>
              ))}
            </nav>

            <div className="pt-8 border-t border-[#bbb9b5]/40 flex flex-col gap-3">
              <div className="text-sm text-[#3a4140]">
                <p className="font-medium text-[#081010]">{siteConfig.name}</p>
                <p>{siteConfig.fullAddress}</p>
              </div>
              {siteConfig.phone && (
                <a
                  href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#081010] text-[#fefcf8] text-sm uppercase tracking-wider font-medium hover:bg-[#3a4140] transition-colors"
                  aria-label="Call Zhen Mei Hair Salon"
                >
                  <Phone size={16} />
                  <span>Call Us</span>
                </a>
              )}
              <RollingButton
                variant="secondary"
                href="#contact"
                onClick={() => scrollToSection('contact')}
                className="w-full text-center justify-center"
              >
                Contact Us
              </RollingButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
