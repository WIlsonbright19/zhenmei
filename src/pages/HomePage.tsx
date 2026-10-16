import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { imageMap } from '../config/images';
import { RollingButton } from '../components/RollingButton';
import { TestimonialMarquee } from '../components/TestimonialMarquee';
import { ServiceStyleFaq } from '../components/ServiceStyleFaq';
import { BusinessHours } from '../components/BusinessHours';
import { ContactForm } from '../components/ContactForm';
import { Reveal } from '../components/Reveal';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';

export const HomePage: React.FC = () => {
  const [activeServiceHover, setActiveServiceHover] = useState<string | null>(null);

  return (
    <main className="w-full">
      {/* ======================================================== */}
      {/* SECTION 0: HERO (id="hero", class="section hero")         */}
      {/* ======================================================== */}
      <section
        id="hero"
        className="homura-section-hero relative overflow-hidden bg-cover bg-center scroll-mt-24"
      >
        <span id="home" className="sr-only" />
        {/* Background photo with subtle fade */}
        <div className="absolute inset-0 z-0">
          <img
            src={imageMap.heroBackground.src}
            alt={imageMap.heroBackground.alt}
            className="w-full h-full object-cover object-[70%_center] lg:object-center transition-transform duration-1000 scale-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fefcf8] via-[#fefcf8]/90 lg:via-[#fefcf8]/80 to-transparent" />
        </div>

        <div className="homura-container relative z-10 w-full py-16 lg:py-24">
          <div className="flex flex-col gap-6 max-w-[560px]">
            <Reveal variant="fadeUp" duration={0.8}>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-[#081010] leading-[1.08] text-balance">
                Simple, Great Haircuts in San Francisco
              </h1>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.15} duration={0.8}>
              <p className="text-base sm:text-lg text-[#3a4140] leading-relaxed max-w-[420px]">
                Clean haircuts, fresh color, and friendly hair care in Chinatown, San Francisco. We take time to listen so you leave looking and feeling your best.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.3} duration={0.8}>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <RollingButton
                  variant="primary"
                  href="#contact"
                  ariaLabel="Contact Zhen Mei Hair Salon"
                >
                  Contact Us
                </RollingButton>
                {siteConfig.phone && (
                  <a
                    href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                    className="inline-flex items-center gap-2 px-5 py-3 border border-[#081010] bg-[#081010] text-[#fefcf8] text-base sm:text-lg font-medium hover:bg-[#3a4140] transition-colors shadow-xs"
                    aria-label={`Call Zhen Mei Hair Salon at ${siteConfig.phone}`}
                  >
                    <Phone size={18} />
                    <span>Call Us</span>
                  </a>
                )}
                <RollingButton
                  variant="secondary"
                  href="#properties"
                  ariaLabel="See our recent haircut styles"
                >
                  See Our Cuts
                </RollingButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 1: ABOUT US (id="about", class="section")         */}
      {/* ======================================================== */}
      <section id="about" className="homura-section bg-[#fefcf8] scroll-mt-24">
        <div className="homura-container flex flex-col gap-12 lg:gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-24 items-start">
            <span className="text-xs uppercase tracking-widest text-[#3a4140] font-medium pt-2">
              About Us
            </span>
            <Reveal variant="fadeUp" duration={0.9}>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal text-[#081010] leading-[1.2] max-w-[58rem] text-balance">
                We give you great haircuts, natural hair color, and deep hair wash treatments. We talk with you first so you get a style you love and can easily manage at home.
              </h2>
            </Reveal>
          </div>

          <Reveal variant="clipImage" duration={1}>
            <div className="w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-none border border-[#bbb9b5]/40 relative bg-[#f5f3f0]" data-cursor="Salon">
              <img
                src={imageMap.aboutFeatured.src}
                alt={imageMap.aboutFeatured.alt}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 2: SHOWCASE (id="showcase", class="section accent") */}
      {/* ======================================================== */}
      <section id="showcase" className="homura-section bg-[#f5f3f0] scroll-mt-24">
        {/* Support legacy #properties anchor */}
        <span id="properties" className="sr-only" />
        <div className="homura-container flex flex-col gap-14">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-4">
            <span className="text-xs uppercase tracking-widest text-[#3a4140] font-medium">
              Showcase
            </span>
            <Reveal variant="fadeUp">
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal text-[#081010] leading-tight">
                Recent Haircuts & Color Styles
              </h2>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.1}>
              <p className="text-base text-[#3a4140] max-w-xl leading-relaxed">
                Take a look at some of our fresh cuts and hair color work. Clean lines, easy daily care, and styles made just for you.
              </p>
            </Reveal>
          </div>

          {/* Properties Grid Row 1 (1fr .8fr) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 relative group min-h-[360px] md:min-h-[460px] overflow-hidden bg-[#081010] flex items-end p-6 border border-[#bbb9b5]/40" data-cursor="View">
              <img
                src={imageMap.showcaseCut.src}
                alt={imageMap.showcaseCut.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 p-4 rounded-md backdrop-blur-md bg-black/40 text-[#fefcf8] border border-white/10 flex flex-col gap-1">
                <span className="text-xl sm:text-2xl font-normal text-[#fefcf8]">
                  Classic Bob Cut
                </span>
                <span className="text-xs uppercase tracking-wider text-[#bbb9b5]">
                  Haircut
                </span>
              </div>
            </div>

            <div className="md:col-span-5 relative group min-h-[360px] md:min-h-[460px] overflow-hidden bg-[#081010] flex items-end p-6 border border-[#bbb9b5]/40" data-cursor="View">
              <img
                src={imageMap.showcaseColor.src}
                alt={imageMap.showcaseColor.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 p-4 rounded-md backdrop-blur-md bg-black/40 text-[#fefcf8] border border-white/10 flex flex-col gap-1">
                <span className="text-xl sm:text-2xl font-normal text-[#fefcf8]">
                  Warm Balayage Color
                </span>
                <span className="text-xs uppercase tracking-wider text-[#bbb9b5]">
                  Hair Color
                </span>
              </div>
            </div>
          </div>

          {/* Properties Grid Row 2 (.8fr 1fr) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-5 relative group min-h-[360px] md:min-h-[460px] overflow-hidden bg-[#081010] flex items-end p-6 border border-[#bbb9b5]/40" data-cursor="View">
              <img
                src={imageMap.showcaseStyling.src}
                alt={imageMap.showcaseStyling.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 p-4 rounded-md backdrop-blur-md bg-black/40 text-[#fefcf8] border border-white/10 flex flex-col gap-1">
                <span className="text-xl sm:text-2xl font-normal text-[#fefcf8]">
                  Clean Layered Cut
                </span>
                <span className="text-xs uppercase tracking-wider text-[#bbb9b5]">
                  Haircut
                </span>
              </div>
            </div>

            <div className="md:col-span-7 relative group min-h-[360px] md:min-h-[460px] overflow-hidden bg-[#081010] flex items-end p-6 border border-[#bbb9b5]/40" data-cursor="View">
              <img
                src={imageMap.showcaseCare.src}
                alt={imageMap.showcaseCare.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 p-4 rounded-md backdrop-blur-md bg-black/40 text-[#fefcf8] border border-white/10 flex flex-col gap-1">
                <span className="text-xl sm:text-2xl font-normal text-[#fefcf8]">
                  Deep Conditioning & Wash
                </span>
                <span className="text-xs uppercase tracking-wider text-[#bbb9b5]">
                  Hair Care
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 3: SERVICES (id="services", class="section")     */}
      {/* ======================================================== */}
      <section id="services" className="homura-section bg-[#fefcf8] scroll-mt-24">
        {/* Support legacy #service anchor */}
        <span id="service" className="sr-only" />
        <div className="homura-container flex flex-col gap-12">
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-24 items-start">
            <span className="text-xs uppercase tracking-widest text-[#3a4140] font-medium pt-2">
              Services
            </span>
            <Reveal variant="fadeUp">
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal text-[#081010] leading-tight max-w-[54rem]">
                Simple Hair Services for Men, Women & Kids
              </h2>
            </Reveal>
          </div>

          {/* Service items list matching Homura .service-link */}
          <div className="flex flex-col border-t border-[#bbb9b5]">
            {siteConfig.serviceCategories.map((item) => {
              const imgAsset = imageMap[item.imageKey] || imageMap.serviceCut;
              const isHovered = activeServiceHover === item.id;

              return (
                <a
                  key={item.id}
                  href="#contact"
                  onMouseEnter={() => setActiveServiceHover(item.id)}
                  onMouseLeave={() => setActiveServiceHover(null)}
                  className="group flex items-center justify-between py-6 sm:py-8 border-b border-[#bbb9b5] transition-all duration-300 hover:bg-[#f5f3f0] hover:px-6"
                >
                  <div className="flex items-center gap-6">
                    {/* Expanding image on hover */}
                    <div
                      className={`hidden lg:block overflow-hidden rounded-md transition-all duration-300 ${
                        isHovered ? 'w-36 h-24 opacity-100' : 'w-0 h-24 opacity-0'
                      }`}
                    >
                      <img
                        src={imgAsset.src}
                        alt={imgAsset.alt}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-xl sm:text-2xl font-normal text-[#081010] group-hover:translate-x-1 transition-transform">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[#3a4140] leading-relaxed max-w-xl">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-10 shrink-0 flex items-center justify-center text-[#081010] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    <ArrowUpRight size={24} strokeWidth={1.75} />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 4: TESTIMONIAL / ETHOS (id="testimonial", accent) */}
      {/* ======================================================== */}
      <section id="testimonial" className="homura-section bg-[#f5f3f0] scroll-mt-24">
        <span id="reviews" className="sr-only" />
        <div className="homura-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Header */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <span className="text-xs uppercase tracking-widest text-[#3a4140] font-medium">
                How We Work
              </span>
              <Reveal variant="fadeUp">
                <h2 className="text-3xl sm:text-4xl font-normal text-[#081010] leading-tight">
                  Careful Hair Care in a Friendly Shop
                </h2>
              </Reveal>
              <Reveal variant="fadeUp" delay={0.1}>
                <p className="text-sm sm:text-base text-[#3a4140] leading-relaxed">
                  Here is what you can always expect every time you sit in our styling chair.
                </p>
              </Reveal>
            </div>

            {/* Right Marquee columns */}
            <div className="lg:col-span-8">
              <TestimonialMarquee />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 5: CTA BANNER (class="section cta")                */}
      {/* ======================================================== */}
      <section
        className="relative py-28 sm:py-36 bg-[#081010] text-[#fefcf8] overflow-hidden flex items-center justify-center text-center"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={imageMap.ctaBackground.src}
            alt={imageMap.ctaBackground.alt}
            className="w-full h-full object-cover opacity-35"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-[#081010]/75" />
        </div>

        <div className="homura-container relative z-10 flex flex-col items-center gap-6 max-w-3xl">
          <span className="text-xs uppercase tracking-widest text-[#bbb9b5] font-medium">
            Visit Us
          </span>
          <Reveal variant="fadeUp">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-[#fefcf8] leading-tight tracking-tight text-balance">
              Ready for a Fresh Cut or Color?
            </h2>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.1}>
            <p className="text-base sm:text-lg text-[#bbb9b5] max-w-xl leading-relaxed">
              Come visit Zhen Mei on Clay Street. Friendly stylists and easy walk-in directions.
            </p>
          </Reveal>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#fefcf8] text-[#081010] text-base sm:text-lg font-medium hover:bg-[#f5f3f0] transition-colors"
                aria-label={`Call Zhen Mei Hair Salon at ${siteConfig.phone}`}
              >
                <Phone size={18} />
                <span>Call Us</span>
              </a>
            )}
            <RollingButton
              variant="secondary-white"
              href="#service"
              ariaLabel="See Zhen Mei Hair Salon services"
            >
              See Services
            </RollingButton>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6: FAQS (class="section")                         */}
      {/* ======================================================== */}
      <section id="faq" className="homura-section bg-[#fefcf8] scroll-mt-24">
        <span id="faqs" className="sr-only" />
        <div className="homura-container">
          <ServiceStyleFaq
            subtitle="Questions & Answers"
            title="Common Questions About Visiting Our Salon"
          />
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 6.5: BUSINESS HOURS (id="hours")                  */}
      {/* ======================================================== */}
      <section id="hours" className="homura-section bg-[#fcfaf7] border-y border-[#bbb9b5]/30 scroll-mt-24">
        <span id="business-hours" className="sr-only" />
        <div className="homura-container">
          <BusinessHours />
        </div>
      </section>

      {/* ======================================================== */}
      {/* SECTION 7: CONTACT / VISIT (id="contact", accent)         */}
      {/* ======================================================== */}
      <section id="contact" className="homura-section bg-[#f5f3f0] scroll-mt-24">
        <div className="homura-container flex flex-col gap-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Info & Form */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <span className="text-xs uppercase tracking-widest text-[#3a4140] font-medium">
                  Contact Us
                </span>
                <Reveal variant="fadeUp">
                  <h2 className="text-3xl sm:text-4xl font-normal text-[#081010] leading-tight">
                    Contact Us & Visit Our Shop
                  </h2>
                </Reveal>
                <Reveal variant="fadeUp" delay={0.1}>
                  <p className="text-sm sm:text-base text-[#3a4140] leading-relaxed">
                    Call us for quick questions and appointments, or send us a message below.
                  </p>
                </Reveal>
              </div>

              {/* Verified Contact Details with Phone Call and Map Directions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 bg-[#fefcf8] border border-[#bbb9b5]/50">
                {siteConfig.phone && (
                  <div className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-wider text-[#081010] font-medium">
                      Call Us Directly
                    </span>
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#081010] text-[#fefcf8] text-sm font-medium hover:bg-[#3a4140] transition-colors w-fit shadow-xs"
                      aria-label="Call Zhen Mei Hair Salon"
                    >
                      <Phone size={16} />
                      <span>Call Us</span>
                    </a>
                    <span className="text-xs text-[#3a4140]">Tap to call for appointments or questions</span>
                  </div>
                )}

                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase tracking-wider text-[#081010] font-medium">
                    Salon Location
                  </span>
                  <span className="text-sm text-[#3a4140]">{siteConfig.address}</span>
                  <span className="text-sm text-[#3a4140]">{siteConfig.cityStateZip}</span>
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider text-[#1f453f] hover:underline font-medium inline-flex items-center gap-1 pt-1.5"
                  >
                    <MapPin size={13} />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Contact Form with validation */}
              <ContactForm />
            </div>

            {/* Right: Location Image Card matching Homura .location-wrapper */}
            <div
              className="relative group overflow-hidden border border-[#bbb9b5]/60 bg-[#081010] flex flex-col justify-end p-8 min-h-[460px] lg:min-h-[640px]"
              data-cursor="Contact"
            >
              <img
                src={imageMap.locationExterior.src}
                alt={imageMap.locationExterior.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="relative z-10 p-6 bg-black/60 backdrop-blur-md border border-white/15 text-[#fefcf8] flex flex-col gap-2 max-w-sm">
                <span className="text-xs uppercase tracking-widest text-[#bbb9b5]">
                  Salon Location
                </span>
                <span className="text-xl sm:text-2xl font-normal text-[#fefcf8] leading-snug">
                  {siteConfig.address}
                </span>
                <span className="text-sm text-[#bbb9b5]">
                  {siteConfig.cityStateZip}
                </span>
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  {siteConfig.phone && (
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                      className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#c6f0dc] text-[#081010] text-xs uppercase tracking-wider font-semibold hover:bg-white transition-colors"
                      aria-label={`Call ${siteConfig.phone}`}
                    >
                      <Phone size={14} />
                      <span>Call Us</span>
                    </a>
                  )}
                  <a
                    href={siteConfig.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#bbb9b5] hover:text-white transition-colors"
                  >
                    <span>View Map</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
