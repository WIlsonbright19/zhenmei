import React from 'react';
import { siteConfig } from '../config/site';
import { Reveal } from './Reveal';
import { Clock, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { RollingButton } from './RollingButton';

const DAYS_ORDER = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

export const BusinessHours: React.FC = () => {
  const hours = siteConfig.openingHours || {
    Monday: '8:30 AM – 6:30 PM',
    Tuesday: '8:30 AM – 6:30 PM',
    Wednesday: '8:30 AM – 6:30 PM',
    Thursday: '8:30 AM – 6:30 PM',
    Friday: '8:30 AM – 6:30 PM',
    Saturday: '8:30 AM – 6:30 PM',
    Sunday: '8:30 AM – 6:30 PM'
  };

  // Determine current day of week
  const todayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday ...
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[todayIndex];

  return (
    <div className="flex flex-col gap-12">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#bbb9b5]/40 pb-6">
        <div className="flex flex-col gap-3 max-w-xl">
          <span className="text-xs uppercase tracking-widest text-[#3a4140] font-medium flex items-center gap-2">
            <Clock size={14} className="text-[#1f453f]" />
            Visiting Us
          </span>
          <Reveal variant="fadeUp">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-[#081010] leading-tight">
              Business Hours
            </h2>
          </Reveal>
          <Reveal variant="fadeUp" delay={0.1}>
            <p className="text-base text-[#3a4140] leading-relaxed">
              We are open seven days a week on Clay Street in San Francisco Chinatown. Walk-ins and appointments are always welcome.
            </p>
          </Reveal>
        </div>

        {/* Quick status badge */}
        <div className="flex items-center gap-3 px-4 py-3 bg-[#f5f3f0] border border-[#bbb9b5]/50 self-start sm:self-auto">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-600"></span>
          </span>
          <div className="text-xs">
            <span className="font-semibold text-[#081010] block">Open Every Day</span>
            <span className="text-[#3a4140]">8:30 AM – 6:30 PM</span>
          </div>
        </div>
      </div>

      {/* Grid: Daily schedule table + visit perks card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Daily Schedule List (7 cols) */}
        <div className="lg:col-span-7 bg-[#fefcf8] border border-[#bbb9b5]/60 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
          <div className="flex flex-col gap-1 mb-6">
            <h3 className="text-xl font-normal text-[#081010]">Weekly Schedule</h3>
            <p className="text-xs text-[#3a4140]">
              Regular opening times for hair cutting, styling, coloring, and care.
            </p>
          </div>

          <div className="divide-y divide-[#bbb9b5]/30">
            {DAYS_ORDER.map((day) => {
              const isToday = day === todayName;
              const time = hours[day] || '8:30 AM – 6:30 PM';

              return (
                <div
                  key={day}
                  className={`py-3.5 px-3 flex items-center justify-between transition-colors ${
                    isToday ? 'bg-[#f5f3f0] font-medium' : 'hover:bg-[#fcfaf6]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`text-sm ${isToday ? 'text-[#081010] font-semibold' : 'text-[#3a4140]'}`}>
                      {day}
                    </span>
                    {isToday && (
                      <span className="text-[11px] uppercase tracking-wider bg-[#1f453f] text-[#fefcf8] px-2 py-0.5 font-medium">
                        Today
                      </span>
                    )}
                  </div>
                  <span className={`text-sm tabular-nums ${isToday ? 'text-[#081010] font-semibold' : 'text-[#081010]'}`}>
                    {time}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-[#bbb9b5]/30 flex flex-wrap items-center justify-between gap-4 text-xs text-[#3a4140]">
            <span>Holiday hours may differ. Call ahead to confirm holiday availability.</span>
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="font-medium text-[#1f453f] hover:underline inline-flex items-center gap-1"
                aria-label="Call salon to confirm hours"
              >
                <Phone size={13} />
                <span>Call to confirm</span>
              </a>
            )}
          </div>
        </div>

        {/* Location & Appointment Assistance Box (5 cols) */}
        <div className="lg:col-span-5 bg-[#081010] text-[#fefcf8] p-6 sm:p-8 flex flex-col justify-between border border-[#081010]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-[#bbb9b5]">
                Plan Your Haircut
              </span>
              <h3 className="text-2xl font-normal text-[#fefcf8]">
                Ready to Stop By?
              </h3>
              <p className="text-sm text-[#bbb9b5] leading-relaxed">
                Whether you need a quick trim on your lunch break or want a complete new style, we are here to help.
              </p>
            </div>

            <ul className="flex flex-col gap-3.5 text-sm text-[#fefcf8]/90">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#bbb9b5] shrink-0 mt-0.5" />
                <span>Walk-ins are welcome anytime during business hours.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#bbb9b5] shrink-0 mt-0.5" />
                <span>Call in advance to reserve your preferred stylist or time.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 size={16} className="text-[#bbb9b5] shrink-0 mt-0.5" />
                <span>Convenient street parking and Portsmouth Square Garage nearby.</span>
              </li>
            </ul>

            <div className="p-4 bg-white/5 border border-white/10 flex flex-col gap-1.5 text-xs text-[#bbb9b5]">
              <span className="text-[#fefcf8] font-medium flex items-center gap-1.5">
                <MapPin size={14} />
                {siteConfig.fullAddress}
              </span>
              <span>San Francisco Chinatown • Near Portsmouth Square</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-6 mt-6 border-t border-white/10">
            {siteConfig.phone && (
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#fefcf8] text-[#081010] text-sm font-medium hover:bg-[#bbb9b5] transition-colors"
                aria-label="Call Zhen Mei Hair Salon"
              >
                <Phone size={15} />
                <span>Call Us</span>
              </a>
            )}
            <RollingButton
              variant="secondary-white"
              href="#contact"
              ariaLabel="Contact Zhen Mei Hair Salon"
            >
              Contact Us
            </RollingButton>
          </div>
        </div>
      </div>
    </div>
  );
};
