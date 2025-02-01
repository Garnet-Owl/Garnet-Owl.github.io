export enum PUBLIC_ROUTES {
  LOGIN = "/login"
}

export enum PROTECTED_ROUTES {
  DASHBOARD = "/dashboard",
}

export const PRIMARY_PUBLIC = PUBLIC_ROUTES.LOGIN;
export const PRIMARY_PROTECTED = PROTECTED_ROUTES.DASHBOARD;