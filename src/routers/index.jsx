import { createBrowserRouter } from "react-router-dom";

import { About, Awards, Experience, Home, Interest, Skills } from "../pages";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/awards",
    element: <Awards />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/interest",
    element: <Interest />,
  },
]);
