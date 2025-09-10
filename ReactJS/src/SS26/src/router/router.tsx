import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../Component/BT1/ProductDetail";
import Student from "../Component/BT2/Student";
import Students from "../Component/BT3/Student";
import SearchParams from "../Component/BT4/BT4";
import Login from "../Component/BT5/Login";
import Account from "../Component/BT5/Account";
import Home from "../Component/BT5/Home";
import PrivateRouter from "../Component/BT5/PrivateRouter";

const router = createBrowserRouter([
    {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/student/:gender",
    element: <Student />,
  },
  {
    path: "/student",
    element: <Students />,
  },
  {
    path: "/student",
    element: <SearchParams />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/account",
    element: <PrivateRouter element={<Account />} />,
  },
  {
    path: "/",
    element: <PrivateRouter element={<Home />} />,
  }
]);

export default router;

