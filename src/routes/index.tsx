import App from "@/App";
import About from "@/pages/AboutPage";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQPage";
import Features from "@/pages/FeaturesPage";
import Home from "@/pages/HomePage";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        index: true,
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: FAQ,
        path: "faq",
      },
       {
        Component: Features,
        path: "features",
      },
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
  //   {
  //     Component: Unauthorized,
  //     path: "/unauthorized",
  //   },

  //   {
  //     Component: withAuth(DashboardLayout, role.superAdmin as TRole),
  //     path: "/admin",
  //     children: [
  //       { index: true, element: <Navigate to="/admin/analytics" /> },
  //       ...generateRoutes(adminSidebarItems),
  //     ],
  //   },
  //   {
  //     Component: DashboardLayout,
  //     path: "/user",
  //     children: [
  //       { index: true, element: <Navigate to="/user/bookings" /> },
  //       ...generateRoutes(userSidebarItems),
  //     ],
  //   },
]);
