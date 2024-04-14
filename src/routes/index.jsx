import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProtectedRouteAdmin } from "./ProtectedRoute_Admin";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Logout from "../pages/Logout";
import AdminPage from "../pages/Admin/AdminPage";
import UserPage from "../pages/User/UserPage";
import HomePage from "../pages/HomePage";

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/service",
      element: <div>Service Page</div>,
    },
    {
      path: "/about-us",
      element: <div>About Us</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "",
          element: <div>User Home Page</div>,
        },
       
        {
          path: "/profile",
          element: <div>User Profile</div>,
        },
        {
          path: "/logout",
          element: <Logout/>,
        },
      ],
    },
  ];

  const routesForAdmin=[
    {
      path: "admin",
      element: <ProtectedRouteAdmin/>, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "",
          element: <AdminPage/>,
          children: [
          ],
          
        },
        {
          path: "logout",
          element: <Logout/>,
        },
      ],
    },
  ]

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <HomePage/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ];

  // Bound user page
  const routesForUser = [
    {
      path: "/",
      element: <UserPage/>,
      children: [
        ...(!token ? routesForNotAuthenticatedOnly : []),
        ...routesForPublic,
        ...routesForAuthenticatedOnly,
      ]
    },
  ];
  
  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForUser,
    ...routesForAdmin,
  ]);

  // Provide the router configuration using RouterProvider
  return <>
    <RouterProvider router={router} />
  </> 
};

export default Routes;
