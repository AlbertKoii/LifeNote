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
    route("/Accounting", "./pages/Accounting.tsx"),
    route("/Login", "./pages/Login.tsx"),
    route("/Note", "./pages/Note.tsx"),
    route("/", "./pages/Note.tsx"),
    
    
    


] satisfies RouteConfig;
