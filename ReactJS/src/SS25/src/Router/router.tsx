import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/BT1/Home";
import About from "../Component/BT1/About";
import Contact from "../Component/BT1/Contact";
import Login from "../Component/BT3/Login";
import Register from "../Component/BT4/Register";
import NotFound from "../Component/BT5/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
