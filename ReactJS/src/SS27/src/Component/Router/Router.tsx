import { createBrowserRouter } from "react-router-dom";
import Home from "../BT1/Home";
import About from "../BT1/About";
import Contact from "../BT1/Contact";
import ProductList from "../BT2/ProductList";
import ProductDetail from "../BT2/ProductDetail";
import TaskList from "../BT3/TastList";
import TaskDetail from "../BT3/TaskDetail";
import ProductDetailBT4 from "../BT4/BT4_ProductList";
import Detail from "../BT6/Detail";
import Header from "../BT6/Header";
import Homes from "../BT6/Homes";
import Product from "../BT6/Product";
const router = createBrowserRouter([
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/ProductList",
    element: <ProductList />,
  },
  {
    path: "/product/:id",
    element: <ProductDetail />,
  },
  {
    path: "/BT4/product/:id",
    element: <ProductDetailBT4 />,
  },
  {
    path: "/:",
    element: <TaskList />,
  },
  {
    path: "/:id",
    element: <TaskDetail />,
  },
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "homes",
        element: <Homes />,
      },
      {
        path: "detail",
        element: <Detail />,
      },
      {
        path: "product",
        element: <Product />,
      },
    ],
  },
]);
export default router;
