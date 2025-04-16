import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./i18n";
import App from "./App";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Eligibility from "./pages/Eligibility";
import SuccesStories from "./pages/SuccesStories";

import Fag from "./pages/Fag";
import Contact from "./pages/Contact";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "apply",
        element: <Apply />,
      },
      {
        path: "eligibity",
        element: <Eligibility />,
      },
      {
        path: "successstories",
        element: <SuccesStories />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "fag",
        element: <Fag />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
