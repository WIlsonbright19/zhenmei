import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto flex flex-col gap-4">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="bg-[#f5f3f0] transition-colors overflow-hidden border border-transparent hover:border-[#bbb9b5]/40"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              className="w-full flex items-center justify-between p-6 sm:p-8 text-left gap-6 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#081010]"
            >
              <span className="text-lg sm:text-xl font-normal text-[#081010] leading-snug">
                {item.question}
              </span>
              <div
                className={`w-6 h-6 shrink-0 flex items-center justify-center transition-transform duration-300 ${
                  isOpen ? 'rotate-45 text-[#081010]' : 'text-[#3a4140]'
                }`}
              >
                <Plus size={22} strokeWidth={1.75} />
              </div>
            </button>

            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={item.id}
              className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <p className="text-[15px] sm:text-base leading-relaxed text-[#3a4140] border-t border-[#bbb9b5]/30 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
