import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import ForgotPassword from '../pages/Authentication/ForgotPassword/ForgotPassword';
import EnterCode from '../pages/Authentication/ForgotPassword/EnterCode';
import ResetPassword from "../pages/Authentication/ForgotPassword/ResetPassword";
import Error404 from "../pages/ErrorSection/Error404";
import Flat from "../pages/Flat/Flat";
import Floor from "../pages/Floor/Floor";
import AboutUs from "../pages/AboutUs/AboutUs";
import Services from "../pages/Services/Services";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "flat/:flatId",
        Component: Flat,
      },
      {
        path: "floor/:floorId",
        Component: Floor,
      },
      {
        path: "about-us",
        Component: AboutUs,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "contact",
        Component: Contact,
      },


    ]
  },
  {
    path: "/",
    Component: AuthLayout,
    errorElement: <Error404 />, // <-- Also handle errors in auth layout
    children: [
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
      {
        path: 'forgotPassword',
        Component: ForgotPassword,
      },
      {
        path: 'forgotPassword/enterCode',
        Component: EnterCode,
      },
      {
        path: 'forgotPassword/resetPassword',
        Component: ResetPassword,
      },
    ]
  },
  // Optional: catch all unmatched routes outside layouts
  {
    path: "*",
    Component: Error404,
  },
]);

export default router;
