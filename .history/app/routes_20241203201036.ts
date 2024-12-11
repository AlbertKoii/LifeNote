import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";
import Accounting from "./Pages/Accounting";
  

export default [
    index("./home.tsx"),
    route("MainLayout", "./"),

] satisfies RouteConfig;