import { createBrowserRouter } from "react-router-dom";
import Navbar from "../Pages/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
  },
]);
