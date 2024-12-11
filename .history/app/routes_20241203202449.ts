import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
  } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/MainLayout", "./pages/MainLayout.tsx"),

    layout("./pages/MainLayout.tsx", [
        route("Accounting", "./pages/Accounting.tsx"),
        route("Accounting", "./pages/Accounting.tsx"),
      ]),

] satisfies RouteConfig;
