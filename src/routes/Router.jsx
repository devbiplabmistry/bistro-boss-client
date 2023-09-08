import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/menu/menu/Menu";
import Shop from "../pages/shop/shop/Shop";
import Contact from "../pages/contact/contact/Contact";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";
import Secret from "../pages/shared/secret/Secret";
import PrivetRouter from "./PrivetRouter";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import Review from "../pages/dashboard/review/Review";
import BookTable from "../pages/dashboard/bookTable/BookTable";
import Booking from "../pages/dashboard/booking/Booking";
import UserHome from "../pages/dashboard/userHome/UserHome";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu></Menu>
      },
      {
        path: "shop/:category",
        element: <Shop></Shop>
      },
      {
        path: "contact",
        element: <Contact></Contact>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "signUp",
        element: <SignUp></SignUp>
      },
      {
        path: "secret",
        element: <PrivetRouter><Secret></Secret></PrivetRouter>
      }

    ],
  },
  {
    path: "dashboard",
    element: <PrivetRouter><Dashboard></Dashboard></PrivetRouter>,
    children: [
      {
        path: "cart",
        element: <Cart></Cart>
      },
      {
        path: "review",
        element: <Review></Review>
      },
      {
        path: "bookTable",
        element: <BookTable></BookTable>
      },
      {
        path: "booking",
        element: <Booking></Booking>
      },
      {
        path: "userHome",
        element: <UserHome></UserHome>
      },
      {
        path: "payment",
        element: <Payment></Payment>
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>
      }
    ]
  }
]);
