import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/menu/menu/Menu";
import Shop from "../pages/shop/shop/Shop";
import Contact from "../pages/contact/contact/Contact";
import SignUp from "../pages/signUp/SignUp";
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/dashboard/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import Review from "../pages/dashboard/review/Review";
import BookTable from "../pages/dashboard/bookTable/BookTable";
import Booking from "../pages/dashboard/booking/Booking";
import UserHome from "../pages/dashboard/userHome/UserHome";
import Payment from "../pages/dashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/paymentHistory/PaymentHistory";
import AllUsers from "../pages/dashboard/admin/allUsers/AllUsers";
import AddItem from "../pages/dashboard/admin/addItem/AddItem";
import Update from "../pages/dashboard/admin/update/Update";
import ManageItems from "../pages/dashboard/admin/manageItem/ManageItems";
import ManageBookings from "../pages/dashboard/admin/manageBooking/ManageBookings";
import AdminHome from "../pages/dashboard/admin/adminHome/AdminHome";
import AdminRoute from "./AdminRoute";



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

    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
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
      },
      {
        path: "allUsers",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: "addItem",
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: "update/:id",
        element: <AdminRoute><Update></Update></AdminRoute>,
      },
      {
        path: "manageItem",
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: "manageBookings",
        element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
      },
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      }
    ]
  }
]);
