export const HOME = "home";
export const PROJECTS = "projects";
export const GALLERY = "gallery";
export const RESUME = "resume";

export type PageStates = {
  [key: string]: PageState;
};

type PageState = {
  background: string;
  title: string;
  navFlow: boolean;
};

export const page_state: PageStates = {
  [HOME]: {
    background: "#BCB4FF",
    title: "Home",
    navFlow: false,
  },
  [PROJECTS]: {
    background: "#EDB4F8",
    title: "Projects",
    navFlow: true,
  },
  [GALLERY]: {
    background: "#FFB985",
    title: "Gallery",
    navFlow: true,
  },
};
