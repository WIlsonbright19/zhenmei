/**
 * Image Registry for Zhen Mei Hair Salon
 * Centralized swappable mapping of all photography assets with verified alt texts.
 */

import heroSalonImg from '@/src/assets/images/zhen_mei_hero_salon_1791985333747.jpg';
import aboutInteriorImg from '@/src/assets/images/zhen_mei_about_interior_1791985333509.jpg';
import haircutStylingImg from '@/src/assets/images/zhen_mei_haircut_styling_1791985335041.jpg';
import colourBalayageImg from '@/src/assets/images/zhen_mei_colour_balayage_1791985335406.jpg';
import claySfExteriorImg from '@/src/assets/images/zhen_mei_clay_sf_exterior_1791985336035.jpg';

export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
}

export const imageMap: Record<string, ImageAsset> = {
  heroBackground: {
    src: heroSalonImg,
    alt: "Modern, sunlit hair studio interior with sleek styling stations and warm oak finishes",
    caption: "Salon interior atmosphere"
  },
  aboutFeatured: {
    src: aboutInteriorImg,
    alt: "Boutique salon wash station and warm timber shelving with organic hair products",
    caption: "Thoughtful, serene hair salon space"
  },
  showcaseCut: {
    src: haircutStylingImg,
    alt: "Precision bob haircut showcasing sharp edges and natural healthy shine",
    caption: "Precision Bob & Texturing"
  },
  showcaseColor: {
    src: colourBalayageImg,
    alt: "Dimensional hair color with soft warm balayage highlights",
    caption: "Dimensional Balayage Glow"
  },
  showcaseStyling: {
    src: heroSalonImg,
    alt: "Tailored hair styling station with minimalist aesthetic",
    caption: "Tailored Scissor Cuts"
  },
  showcaseCare: {
    src: aboutInteriorImg,
    alt: "Tranquil treatment and conditioning area",
    caption: "Scalp & Keratin Revival"
  },
  serviceCut: {
    src: haircutStylingImg,
    alt: "Stylist sculpting clean lines for custom cut",
  },
  serviceColor: {
    src: colourBalayageImg,
    alt: "Custom gloss and dimensional hair color application",
  },
  serviceTreatment: {
    src: aboutInteriorImg,
    alt: "Deep nourishing scalp massage and moisture mask session",
  },
  serviceFinishing: {
    src: heroSalonImg,
    alt: "Silk press and voluminous blowout finishing",
  },
  ctaBackground: {
    src: heroSalonImg,
    alt: "Evening ambient light in salon studio with warm reflections",
  },
  locationExterior: {
    src: claySfExteriorImg,
    alt: "Clay Street in San Francisco Chinatown near the salon address",
    caption: "Clay Street, San Francisco"
  }
};
