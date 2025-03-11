import { type ImageMetadata } from "astro";

export type Project = {
  title: string;
  href: string;
  description: string;
  tags: string[];
  img: Promise<Record<string, ImageMetadata>>;
};

export const projects: Project[] = [
  {
    title: "Soft Soap",
    description:
      "Re-branding assignment to emphasize on longevity and adapting to current trends while still maintaining the youthful vibrancy that the brand currently has",
    href: "/projects/soft-soap",
    tags: ["Adobe Illustrator", "Figma", "Procreate"],
    img: import("/src/assets/projects/soft-soap/thumbnail.png"),
  },
  {
    title: "Escape",
    description:
      "Incorporating augmented reality into graphic design to help address the rise of mental health challenges in undergraduate students, by creating our own solution.",
    href: "/projects/escape",
    tags: ["Figma", "Research", "Augmented Reality"],
    img: import("/src/assets/projects/escape/thumbnail.png"),
  },
];
