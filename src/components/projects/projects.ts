export type Project = {
    title: string;
    href: string;
    description: string;
    tags: string[];
    imgPath: string;
}
      

export const projects: Project[] = [
    {
        title: "Soft Soap",
        description: "Re-branding assignment to emphasize on longevity and adapting to current trends while still maintaining the youthful vibrancy that the brand currently has",
        href: "/projects/soft-soap",
        tags: ["Adobe Illustrator", "Figma", "Procreate"],
        imgPath: "/src/assets/projects/soft-soap.png",
    },
    {
        title: "Escape",
        description: "Incorporating augmented reality into graphic design to help address the rise of mental health challenges in undergraduate students, by creating our own solution.",
        href: "/projects/escape",
        tags: ["Figma", "Research", "Augmented Reality"],
        imgPath: "/src/assets/projects/escape.png",
    }
]
    
