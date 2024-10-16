import { lazy } from "react";

export const Home = lazy(() => import("./Home/Home"));
export const NotFound = lazy(() => import("./Home/NotFound"));
export const Explore = lazy(() => import("./Home/Explore"));
export const SignUp = lazy(() => import("./Auth/SignUp"));
export const SignIn = lazy(() => import("./Auth/SignIn"));
export const Artists = lazy(() => import("./Home/Artists"));
export const SingleArtist = lazy(() => import("./Home/SingleArtist"));
