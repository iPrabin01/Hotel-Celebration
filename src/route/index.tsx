import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../pages/home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);
