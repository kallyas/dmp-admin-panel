import { createBrowserRouter as Router, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import RequireAuth, { RequireNoAuth } from "./features/auth/RequireAuth";
import Dashboard from "./pages/dashboard";
import VendorProfiles from "./pages/vendorProfiles";
import BusRoutes from "./pages/BusRoutes";
import Staff from "./pages/Staff";
import AddVendor from "./pages/addVendor";
import AddStaff from "./pages/AddStaff";
import EditStaff from "./pages/EditStaff";
import Logout from "./pages/Logout";

function App() {
  const routes = Router([
    {
      path: "/dashboard",
      element: <RequireAuth />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "vendors", element: <VendorProfiles /> },
        { path: "routes", element: <BusRoutes /> },
        { path: "staff", element: <Staff /> },
        { path: "add-vendor", element: <AddVendor /> },
        { path: "add-staff", element: <AddStaff /> },
        { path: "logout", element: <Logout /> },
        { path: "staff/:id", element: <EditStaff /> },
      ],
    },
    {
      path: "/",
      element: <RequireNoAuth />,
      children: [{ path: "", element: <Login /> }],
    },
  ]);
  return (
    <RouterProvider router={routes}>
      <ToastContainer />
    </RouterProvider>
  );
}

export default App;