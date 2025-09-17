import { createBrowserRouter, Navigate } from "react-router-dom";
import Manager_post from "../Component/Manager_post";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/list-post" replace />
  },
  {
    path: "/list-post",
    element: <Manager_post />
  }
]);

export default routers;