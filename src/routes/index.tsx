import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/Home";

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
     
    ],
  },
//   {
//     Component: Login,
//     path: "/login",
//   },
//   {
//     Component: Register,
//     path: "/register",
//   },
//   {
//     Component: Verify,
//     path: "/verify",
//   },
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