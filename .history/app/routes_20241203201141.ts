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

    index("./Accounting")
    route("Accounting","./Pages/Accounting")

] satisfies RouteConfig;