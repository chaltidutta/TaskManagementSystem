import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppLayout from "./layout/AppLayout"; // Importing the main layout component
import HomePage from "./Pages/HomePage"; // Importing the homepage component
import LoginPage from "./Pages/LoginPage"; // Importing the login page component
import AssignTask from "./Pages/AssignTask";

// Defining the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // AppLayout is the main layout that wraps all child routes
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "login",
        element: <LoginPage />,
        },
        {
            path: "AssignTask",
            element: <AssignTask />,
        },
    ],
  },
]);

// Main App component
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
