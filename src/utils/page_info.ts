export const HOME = "home";
export const PROJECTS = "projects";
export const GALLERY = "gallery";
export const RESUME = "resume";

export type PageState = {
  [key: string]: {
    background: string;
    title: string;
    navFlow?: boolean;
  };
};

export const page_state: PageState = {
  [HOME]: {
    background: "#BCB4FF",
    title: "Home",
    navFlow: false,
  },
  [PROJECTS]: {
    background: "#EDB4F8",
    title: "Projects",
  },
  [GALLERY]: {
    background: "#FFB985",
    title: "Gallery",
  },
};
