import { createBrowserRouter } from "react-router-dom";
import {
  Artists,
  Explore,
  Home,
  NotFound,
  SignIn,
  SignUp,
  SingleArtist,
} from "../pages/index.lazy";
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
        path: "/explore",
        element: (
          <Loader timeout={500}>
            <Explore />
          </Loader>
        ),
      },
      {
        path: "/artists",
        element: (
          <Loader timeout={500}>
            <Artists />
          </Loader>
        ),
      },
      {
        path: "/artist/:artistUsername",
        element: (
          <Loader timeout={500}>
            <SingleArtist />
          </Loader>
        ),
      },
      {
        path: "/signUp",
        element: (
          <Loader>
            <SignUp />
          </Loader>
        ),
      },
      {
        path: "/signIn",
        element: (
          <Loader>
            <SignIn />
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
