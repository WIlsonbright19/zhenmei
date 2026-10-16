/**
 * Site Configuration for Zhen Mei Hair Salon
 * SINGLE SOURCE OF TRUTH for all verified business facts.
 * 
 * Rules:
 * - Do NOT hard-code business data anywhere outside this file.
 * - Leave unverified fields as null.
 * - Fallbacks are handled according to Section 2 of the Build Brief.
 */

export interface BusinessConfig {
  name: string;
  tagline: string;
  address: string;
  cityStateZip: string;
  fullAddress: string;
  mapsUrl: string;
  phone: string | null;
  email: string | null;
  openingHours: Record<string, string> | null;
  bookingUrl: string | null;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    yelp?: string;
  } | null;
  staffNames: string[] | null;
  rating: number | null;
  reviewsCount: number | null;
  yearsInBusiness: number | null;
  
  // Generic non-committal service categories (TODO: Salon owner to confirm specific service menu & prices)
  serviceCategories: Array<{
    id: string;
    title: string;
    description: string;
    imageKey: string;
  }>;
}

export const siteConfig: BusinessConfig = {
  // Verified business facts
  name: "Zhen Mei Hair Salon",
  tagline: "Friendly Haircuts & Hair Care in San Francisco",
  address: "749 Clay St",
  cityStateZip: "San Francisco, CA 94108, USA",
  fullAddress: "749 Clay St, San Francisco, CA 94108, USA",
  mapsUrl: "https://maps.google.com/?cid=8099598669705489718&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",

  // Verified public phone number for 749 Clay St, San Francisco
  phone: "(415) 549-6626",
  email: null,
  openingHours: {
    "Monday": "8:30 AM – 6:30 PM",
    "Tuesday": "8:30 AM – 6:30 PM",
    "Wednesday": "8:30 AM – 6:30 PM",
    "Thursday": "8:30 AM – 6:30 PM",
    "Friday": "8:30 AM – 6:30 PM",
    "Saturday": "8:30 AM – 6:30 PM",
    "Sunday": "8:30 AM – 6:30 PM"
  },
  bookingUrl: null,
  socialLinks: null,
  staffNames: null,
  rating: null,
  reviewsCount: null,
  yearsInBusiness: null,

  // Generic, non-committal service category wording in plain, clear language
  // TODO: Salon owner to confirm actual service catalog, specific techniques, timing, and pricing
  serviceCategories: [
    {
      id: "cuts-styling",
      title: "Haircuts & Styling",
      description: "Clean cuts, trims, and bangs shaped to fit your face and hair type.",
      imageKey: "serviceCut"
    },
    {
      id: "colour-balayage",
      title: "Hair Color & Highlights",
      description: "Full color, root touch-ups, soft highlights, and gray coverage.",
      imageKey: "serviceColor"
    },
    {
      id: "treatments-care",
      title: "Wash & Deep Conditioning",
      description: "Relaxing scalp wash, hair repair masks, and moisture treatments.",
      imageKey: "serviceTreatment"
    },
    {
      id: "finishing-perms",
      title: "Perms & Blowouts",
      description: "Natural waves, smooth blowouts, and easy everyday styling.",
      imageKey: "serviceFinishing"
    }
  ]
};
