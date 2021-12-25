import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AddVendor from './pages/addVendor';
import VendorProfiles from './pages/vendorProfiles';
import Logout from './pages/Logout';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
   <Router>
     <ToastContainer />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/vendors/add" element={<AddVendor />} />
          <Route path="/dashboard/vendors" element={<VendorProfiles />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
   </Router>
  );
}

export default App;
