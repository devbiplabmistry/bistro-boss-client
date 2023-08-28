import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/menu/menu/Menu";
import Shop from "../pages/shop/shop/Shop";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/", 
          element: <Home/>,
        },
        {
          path:"menu",
          element:<Menu></Menu>
        },
        {
          path:"shop",
          element:<Shop></Shop>
        }
        
      ],
    },
  ]);
