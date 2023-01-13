import { createBrowserRouter as Router, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import RequireAuth, { RequireNoAuth } from "./features/auth/RequireAuth";

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
          element: <div>Dashboard</div>,
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
