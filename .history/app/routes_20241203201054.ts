import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";
import Accounting from "";
  

export default [
    index("./home.tsx"),
    route("MainLayout", "./"),

    index("")

] satisfies RouteConfig;