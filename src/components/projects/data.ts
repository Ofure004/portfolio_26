import chow from "../../assets/500chow.png";
import wyi from "../../assets/wyi.png";
import servery from "../../assets/servery.png";
import { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "500chow",
    name: "500chow",
    image: chow,
    year: "2024",
    tagline: "A food delivery platform reimagined for the Nigerian market.",
    liveLink: "https://500chow.com/",
    description:
      "500Chow is a cloud kitchen and food delivery platform focused on making meal ordering fast, affordable, and hassle-free. I initially rebuilt the company’s marketing website in Webflow before later developing a full React-based ordering platform with real-time order fulfilment, payment integration, and authentication.",
    techStack: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "React Paystack",
      "REST APIs",
    ],
    highlights: [
      "End-to-end order fulfilment with authentication and real-time state management",
      "Location-aware delivery workflows powered by Google Maps",
      "Secure online payments integrated via React Paystack",
    ],
  },
  {
    slug: "watts-your-impact",
    name: "Watts Your Impact",
    image: wyi,
    year: "2025",
    tagline:
      "A podcast platform spotlighting changemakers driving real-world impact.",
    liveLink: "https://wattsyourimpact.com/",
    description:
      "'Watts Your Impact?' is a podcast platform that highlights the journeys of changemakers driving impact across industries and communities. I built the site as a fully responsive single-page experience using Next.js and React, with automated episode syncing from YouTube RSS feeds and Spotify metadata integration to streamline content management and discovery. The platform also includes a branded preloader animation (Lottie), paginated episode browsing and multi-platform listening links",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lottie",
      "Spotify API",
      "YouTube RSS/API",
    ],
    highlights: [
      // "Interactive data visualizations powered by D3.js",
      // "Personalized carbon footprint calculations",
      // "An engaging story-driven onboarding experience",
    ],
  },

  {
    slug: "servery-marketplace",
    name: "Servery Marketplace",
    image: servery,
    year: "2026",
    tagline: "A peer-to-peer marketplace for campus dining.",
    liveLink: "https://getservery.com/",
    description:
      "Servery is a corporate meal and catering platform based in Lagos, Nigeria that connects companies with local restaurants for hassle-free office dining. I built the company's marketing website featuring a waitlist signup integrated with Google Sheets, a restaurant catalog, rich scroll-driven animations, and a parallax landing page.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Google Apps Script",
    ],
    highlights: [
      // "Peer-to-peer transaction system with Stripe integration",
      // "Real-time chat between buyers and sellers",
      // "Campus-specific geolocation features",
    ],
  },
  // {
  //   slug: "perspective",
  //   name: "Perspective",
  //   image: wyi,
  //   year: "2026",
  //   tagline: "An experimental art piece exploring motion and design.",
  //   liveLink: "#",
  //   description:
  //     "Perspective is a creative experiment blending motion design, 3D visuals, and interactive storytelling. Every scroll, animation, and element feels slightly unresolved — intentionally — to make you experience the tension of wanting to finish what's left undone.",
  //   techStack: ["HTML", "Tailwind CSS", "GSAP", "Blender"],
  //   highlights: [
  //     "Experimental concept inspired by psychology",
  //     "3D visuals modeled in Blender and animated using GSAP",
  //     "An interactive story built through motion and design",
  //   ],
  // },
];
