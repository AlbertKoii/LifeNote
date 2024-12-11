import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";

export default [
    index("./home.tsx"),
    route("about", "./about.tsx"),

] satisfies RouteConfig;