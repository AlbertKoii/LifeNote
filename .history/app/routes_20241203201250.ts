import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";


export default [
    index("./home.tsx"),
    route("MainLayout", "./"),


    layout("./Accounting.tsx", [
        route("Accounting", ".Pages./Accounting.tsx"),
        route("register", "./auth/register.tsx"),
      ]),
    index("")
    route("Accounting","./Pages/Accounting")

] satisfies RouteConfig;