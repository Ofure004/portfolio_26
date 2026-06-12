import { StaticImageData } from "next/image";

export interface Project {
  slug: string;
  name: string;
  image: StaticImageData;
  year: string;
  tagline: string;
  liveLink: string;
  description: string;
  techStack: string[];
  highlights: string[];
}
