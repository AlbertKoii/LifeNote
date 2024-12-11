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


    layout("./auth/layout.tsx", [
        route("login", "./auth/login.tsx"),
        route("register", "./auth/register.tsx"),
      ]),
    index("./Accounting.tsx")
    route("Accounting","./Pages/Accounting")

] satisfies RouteConfig;