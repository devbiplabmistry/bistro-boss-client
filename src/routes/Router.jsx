import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/menu/menu/Menu";
import Shop from "../pages/shop/shop/Shop";
import Contact from "../pages/contact/contact/Contact";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";


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
        },
        {
          path:"shop/:category",
          element:<Shop></Shop>
        },
        {
          path:"contact",
          element:<Contact></Contact>
        },
        {
          path:"login",
          element:<Login></Login>
        },
        {
          path:"signUp",
          element:<SignUp></SignUp>
        }
        
      ],
    },
  ]);
