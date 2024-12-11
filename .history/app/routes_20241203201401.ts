import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";


export default [
    index("./home.tsx"),
    // route("MainLayout", "./"),


    layout("./Accounting.tsx", [
        route("Accounting", "./Pages/Accounting.tsx"),
      ]),
    index("")
    route("Accounting","./Pages/Accounting")

] satisfies RouteConfig;