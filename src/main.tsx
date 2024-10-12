import { createRoot } from "react-dom/client";
import { appleRouter } from "./router/apple.router.tsx";
import { RouterProvider } from "react-router-dom";
import { MyLoading } from "./components/content/MyLoading.tsx";

import "./index.css";
import "./assets/fonts/San-Francisco/san_francisco-webfont.woff2";
createRoot(document.getElementById("root")!).render(
  <RouterProvider router={appleRouter} fallbackElement={<MyLoading />} />,
);
