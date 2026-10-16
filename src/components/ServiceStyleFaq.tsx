import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { imageMap } from '../config/images';

export interface ServiceStyleFaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  imageKey: string;
}

export const salonFaqData: ServiceStyleFaqItem[] = [
  {
    id: 'etiquette-arrival',
    category: 'Arriving at the Shop',
    question: 'How early should I arrive for my haircut?',
    answer: 'Arriving about 5 to 10 minutes early is great so we can start on time. To keep the shop quiet and relaxing for everyone, please keep phone calls brief and put your phone on vibrate.',
    imageKey: 'showcaseStyling',
  },
  {
    id: 'parking-transit',
    category: 'Parking & Buses',
    question: 'Where can I park, and which buses stop nearby?',
    answer: 'The Portsmouth Square Garage is only one block away at 733 Kearny Street with easy underground parking. Muni bus lines 1 and 8 also stop just around the corner on Clay and Stockton.',
    imageKey: 'locationExterior',
  },
  {
    id: 'consultation-policy',
    category: 'Talking About Your Cut',
    question: 'Do you talk with me about my haircut before starting?',
    answer: 'Yes! We always chat with you first before we pick up the scissors. We look at your hair type, ask what look you want, and check how you style your hair at home so you get a haircut that works for you.',
    imageKey: 'aboutFeatured',
  },
  {
    id: 'prep-inspiration',
    category: 'Before Your Visit',
    question: 'How should I prepare my hair before coming in?',
    answer: 'Please come in with clean, dry hair in your usual daily style. If you have a photo on your phone of a haircut or hair color you like, bring it with you to show us!',
    imageKey: 'showcaseCut',
  },
  {
    id: 'hair-integrity',
    category: 'Hair Health & Color',
    question: 'Do you check my hair before coloring or bleaching?',
    answer: 'Yes, we always check your hair first to make sure it is strong enough for color or bleach. If your hair feels dry, we can do a deep conditioning wash first to keep it healthy.',
    imageKey: 'showcaseColor',
  },
  {
    id: 'studio-timing-policy',
    category: 'Running Late',
    question: 'What should I do if I am running late?',
    answer: 'Please give us a call or send a quick message as soon as you can. If you are more than 15 minutes late, we might need to do a quicker cut or pick a different time so the next person is not delayed.',
    imageKey: 'heroBackground',
  },
];

interface ServiceStyleFaqProps {
  items?: ServiceStyleFaqItem[];
  subtitle?: string;
  title?: string;
}

export const ServiceStyleFaq: React.FC<ServiceStyleFaqProps> = ({
  items = salonFaqData,
  subtitle = 'Client Guidance',
  title = 'Frequently Asked Questions & Studio Policies',
}) => {
  // Allow toggling items, default first item open
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="w-full flex flex-col gap-12">
      {/* Header matching Services layout structure (grid-cols-[auto_1fr]) */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-24 items-start">
        <div className="text-xs uppercase tracking-widest text-[#3a4140] font-medium pt-2">
          {subtitle}
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-normal text-[#081010] leading-tight max-w-[54rem]">
          {title}
        </h2>
      </div>

      {/* Rows matching Services layout structure (.service-link style) */}
      <div className="flex flex-col border-t border-[#bbb9b5]" role="region" aria-label="Frequently Asked Questions">
        {items.map((item) => {
          const isOpen = openIds.includes(item.id);
          const isHovered = hoveredId === item.id;
          const imgAsset = imageMap[item.imageKey] || imageMap.aboutFeatured;

          return (
            <div
              key={item.id}
              className={`border-b border-[#bbb9b5] transition-all duration-300 ${
                isOpen || isHovered ? 'bg-[#f5f3f0]' : 'bg-transparent'
              }`}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-panel-${item.id}`}
                id={`faq-question-btn-${item.id}`}
                className="w-full flex items-center justify-between py-6 sm:py-8 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#081010] cursor-pointer px-0 hover:px-4 sm:hover:px-6"
              >
                <div className="flex items-center gap-6 sm:gap-8 flex-1 pr-4">
                  {/* Expanding thumbnail on desktop hover or open (matching Homura .service-image) */}
                  <div
                    className={`hidden lg:block overflow-hidden rounded-md transition-all duration-300 shrink-0 ${
                      isOpen || isHovered ? 'w-36 h-24 opacity-100' : 'w-0 h-24 opacity-0'
                    }`}
                  >
                    <img
                      src={imgAsset.src}
                      alt={imgAsset.alt}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 flex-1">
                    <span className="text-xs uppercase tracking-wider text-[#3a4140] font-medium">
                      {item.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-normal text-[#081010] transition-transform duration-200 group-hover:translate-x-1">
                      {item.question}
                    </h3>
                  </div>
                </div>

                {/* Rotating Plus glyph indicator matching Homura interaction */}
                <div
                  className={`w-10 h-10 shrink-0 flex items-center justify-center transition-transform duration-300 text-[#081010] ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                  }`}
                  aria-hidden="true"
                >
                  <Plus size={24} strokeWidth={1.75} />
                </div>
              </button>

              {/* Accessible Smooth Expanding Answer Panel */}
              <div
                id={`faq-answer-panel-${item.id}`}
                role="region"
                aria-labelledby={`faq-question-btn-${item.id}`}
                className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-6 sm:pb-8 pt-0 pl-0 sm:pl-4 lg:pl-[11rem] pr-6">
                    <p className="text-sm sm:text-base leading-relaxed text-[#3a4140] max-w-2xl border-t border-[#bbb9b5]/40 pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
