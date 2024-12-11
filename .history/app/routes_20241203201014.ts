import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";

export default [
    index("./home.tsx"),
    route("MainLayo", "./about.tsx"),

] satisfies RouteConfig;