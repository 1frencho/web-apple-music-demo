import { createBrowserRouter } from "react-router-dom";
import { Home, NotFound } from "../pages/index.lazy";
import { Loader } from "../components/content";
import { App } from "../index.lazy";

export const appleRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Loader timeout={500}>
            <Home />
          </Loader>
        ),
      },
      {
        path: "*",
        element: (
          <Loader>
            <NotFound />
          </Loader>
        ),
      },
    ],
  },
]);
