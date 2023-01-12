import { createBrowserRouter as Router, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";

function App() {
  const routes = Router([
    {
      path: "/",
      element: <Login />,
    },
  ]);

  return (
    <RouterProvider router={routes}>
      <ToastContainer />
    </RouterProvider>
  );
}

export default App;
