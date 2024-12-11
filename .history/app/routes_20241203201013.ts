import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";

export default [
    index("./home.tsx"),
    route("MainLay", "./about.tsx"),

] satisfies RouteConfig;