import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("MainLayout", "./Page/about.tsx"),

] satisfies RouteConfig;
