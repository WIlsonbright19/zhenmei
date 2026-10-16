import React from 'react';

export interface EthosItem {
  id: string;
  quote: string;
  title: string;
  category: string;
}

export const ethosData: EthosItem[] = [
  {
    id: 'ethos-1',
    quote: "“Every visit starts with a quick chat about the haircut you want, your daily routine, and what feels best for you.”",
    title: "We Listen First",
    category: "Before We Cut",
  },
  {
    id: 'ethos-2',
    quote: "“We use gentle products and careful washing so your hair stays soft, healthy, and easy to take care of at home.”",
    title: "Gentle on Hair",
    category: "Hair Health",
  },
  {
    id: 'ethos-3',
    quote: "“We take our time with our scissors so your hair looks neat, feels light, and grows out nicely between visits.”",
    title: "Careful Cuts",
    category: "Scissor Work",
  },
  {
    id: 'ethos-4',
    quote: "“Our shop on Clay Street is a calm, friendly place in Chinatown where you can sit back, relax, and leave happy.”",
    title: "Warm & Friendly",
    category: "Chinatown Shop",
  },
];

export const TestimonialMarquee: React.FC = () => {
  // First column gets ethos 1 & 2; Second column gets ethos 3 & 4
  const col1 = [ethosData[0], ethosData[1]];
  const col2 = [ethosData[2], ethosData[3]];

  return (
    <div className="w-full flex flex-col md:flex-row gap-4 overflow-hidden relative max-h-[640px]">
      {/* Column 1 */}
      <div className="flex-1 flex flex-col gap-4 relative overflow-hidden">
        <div className="flex flex-col gap-4 animate-marquee-vertical hover:[animation-play-state:paused]">
          {[...col1, ...col1].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="bg-[#fefcf8] p-8 border border-[#bbb9b5]/40 flex flex-col justify-between min-h-[280px] gap-8 shadow-xs"
            >
              <p className="text-lg md:text-xl font-normal text-[#081010] leading-snug">
                {item.quote}
              </p>
              <div className="flex flex-col gap-1 border-t border-[#bbb9b5]/30 pt-4">
                <span className="text-base font-medium text-[#081010]">{item.title}</span>
                <span className="text-xs uppercase tracking-wider text-[#3a4140]">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Column 2 */}
      <div className="flex-1 flex flex-col gap-4 relative overflow-hidden">
        <div className="flex flex-col gap-4 animate-marquee-vertical hover:[animation-play-state:paused] [animation-delay:-12s]">
          {[...col2, ...col2].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="bg-[#fefcf8] p-8 border border-[#bbb9b5]/40 flex flex-col justify-between min-h-[280px] gap-8 shadow-xs"
            >
              <p className="text-lg md:text-xl font-normal text-[#081010] leading-snug">
                {item.quote}
              </p>
              <div className="flex flex-col gap-1 border-t border-[#bbb9b5]/30 pt-4">
                <span className="text-base font-medium text-[#081010]">{item.title}</span>
                <span className="text-xs uppercase tracking-wider text-[#3a4140]">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
