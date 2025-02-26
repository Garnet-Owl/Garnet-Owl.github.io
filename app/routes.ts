export enum PUBLIC_ROUTES {
  HOME = "/",
  PROJECTS = "/projects",
  ABOUT = "/about",
  PROJECT_DETAILS = "/projects/[project-name]",
}

export enum PROTECTED_ROUTES {
  DASHBOARD = "/dashboard",
}

export const PRIMARY_PUBLIC = PUBLIC_ROUTES.HOME;
export const PRIMARY_PROTECTED = PROTECTED_ROUTES.DASHBOARD;
