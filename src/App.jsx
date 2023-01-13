import { Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import RequireAuth, { RequireNoAuth } from "./features/auth/RequireAuth";
import Dashboard from "./pages/dashboard";
import VendorProfiles from "./pages/vendorProfiles";
import BusRoutes from "./pages/BusRoutes";
import Staff from "./pages/staff";
import AddVendor from "./pages/addVendor";
import AddStaff from "./pages/AddStaff";
import Logout from "./pages/Logout";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<RequireNoAuth />}>
            <Route index path="" element={<Login />} />
          </Route>
          <Route path="/dashboard" element={<RequireAuth />}>
            <Route index path="" element={<Dashboard />} />
            <Route path="vendors" element={<VendorProfiles />} />
            <Route path="routes" element={<BusRoutes />} />
            <Route path="staff" element={<Staff />} />
            <Route path="add-vendor" element={<AddVendor />} />
            <Route path="add-staff" element={<AddStaff />} />
            <Route path="logout" element={<Logout />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
