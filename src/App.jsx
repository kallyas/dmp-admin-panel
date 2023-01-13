import { createBrowserRouter as Router, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import RequireAuth, { RequireNoAuth } from "./features/auth/RequireAuth";
import Dashboard from "./pages/dashboard";

function App() {
  const routes = Router([
    {
      path: "/",
      element: <RequireNoAuth />,
      children: [
        {
          path: "",
          element: <Login />,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <RequireAuth />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={routes}>
      <ToastContainer />
    </RouterProvider>
  );
}

export default App;
