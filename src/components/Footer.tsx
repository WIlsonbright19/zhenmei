import React from 'react';
import { siteConfig } from '../config/site';
import { RollingButton } from './RollingButton';
import { Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#081010] text-[#fefcf8] pt-20 pb-12 overflow-hidden">
      <div className="homura-container flex flex-col gap-20">
        {/* Top Callout Strip (footer-inner-three) */}
        <div className="flex flex-col items-center text-center max-w-xl mx-auto gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-[#fefcf8] tracking-tight">
            Ready for a Fresh Cut or Color?
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <RollingButton
              variant="white"
              href="#contact"
              ariaLabel="Contact Zhen Mei Hair Salon"
            >
              Contact Us
            </RollingButton>
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 border border-white text-white text-base font-medium hover:bg-white hover:text-black transition-colors"
                aria-label="Call Zhen Mei Hair Salon"
              >
                <Phone size={16} />
                <span>Call Us</span>
              </a>
            )}
            <RollingButton
              variant="secondary-white"
              href="#services"
              ariaLabel="Explore Zhen Mei Salon Services"
            >
              See Services
            </RollingButton>
          </div>
        </div>

        {/* Middle Columns (footer-inner-one) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 border-t border-[#bbb9b5]/20">
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('hero');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                  window.history.pushState(null, '', '#hero');
                }
              }}
              className="text-2xl font-bold tracking-tight text-[#fefcf8] uppercase cursor-pointer hover:opacity-85 transition-opacity"
            >
              ZHEN MEI
            </a>
            <p className="text-[15px] leading-relaxed text-[#bbb9b5] max-w-md">
              A friendly hair salon on Clay Street in Chinatown, San Francisco. We take time to listen, give you a clean haircut, and help you look your best.
            </p>
          </div>

          {/* Nav Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium text-[#fefcf8]">Quick Links</h3>
              <ul className="flex flex-col gap-2.5 text-sm text-[#bbb9b5]">
                <li><a href="#hero" className="hover:text-[#fefcf8] transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-[#fefcf8] transition-colors">About Us</a></li>
                <li><a href="#showcase" className="hover:text-[#fefcf8] transition-colors">Showcase</a></li>
                <li><a href="#services" className="hover:text-[#fefcf8] transition-colors">Services</a></li>
                <li><a href="#hours" className="hover:text-[#fefcf8] transition-colors">Hours</a></li>
                <li><a href="#faq" className="hover:text-[#fefcf8] transition-colors">FAQs</a></li>
                <li><a href="#contact" className="hover:text-[#fefcf8] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium text-[#fefcf8]">Services</h3>
              <ul className="flex flex-col gap-2.5 text-sm text-[#bbb9b5]">
                {siteConfig.serviceCategories.map((s) => (
                  <li key={s.id}>
                    <a href="#services" className="hover:text-[#fefcf8] transition-colors">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visit / Contact */}
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-medium text-[#fefcf8]">Contact & Location</h3>
              <div className="flex flex-col gap-2.5 text-sm text-[#bbb9b5]">
                {siteConfig.phone && (
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-white/60 text-white text-xs uppercase tracking-wider font-medium hover:bg-white hover:text-black transition-colors w-fit mb-1"
                    aria-label="Call Zhen Mei Hair Salon"
                  >
                    <Phone size={14} />
                    <span>Call Us</span>
                  </a>
                )}
                <p className="text-[#fefcf8]">{siteConfig.address}</p>
                <p>{siteConfig.cityStateZip}</p>
                <div className="pt-1">
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider text-[#c6f0dc] hover:underline"
                  >
                    Open in Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar (footer-inner-two) */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#bbb9b5]/20 text-xs text-[#bbb9b5]">
          <div>
            © 2026 Zhen Mei Hair Salon. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
