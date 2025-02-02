export enum Pages {
  HOME = "home",
  PROJECTS = "projects",
  GALLERY = "gallery",
  RESUME = "resume",
}

export const page_info = {
  [Pages.HOME]: {
    background: "#BCB4FF",
    title: "Home",
    href: "/",
  },
  [Pages.PROJECTS]: {
    background: "#EDB4F8",
    title: "Projects",
    href: "/projects",
  },
  [Pages.GALLERY]: {
    background: "#FFB985",
    title: "Gallery",
    href: "/gallery",
  },
  [Pages.RESUME]: {
    title: "Resume",
    href: "/resume",
    target: "_blank",
  },
};
