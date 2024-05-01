import Loadable from "../Pages/Layout/loadable/Loadable";
import { lazy } from "react";

export const FULLLAYOUT = Loadable(
  lazy(() => import("../Pages/Layout/FullLayout"))
);
export const DASHBOARD = Loadable(
  lazy(() => import("../Pages/Dashboard/Dashboard"))
);
export const BLAKEOUT = Loadable(
  lazy(() => import("../Pages/Layout/blank-layout/BlankLayout"))
);
export const LOGIN = Loadable(lazy(() => import("../Pages/AUTH/Login/Login")));
