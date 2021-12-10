import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import AddVendor from './pages/addVendor';
import VendorProfiles from './pages/vendorProfiles';

function App() {
  return (
   <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/vendor-profiles/add" element={<AddVendor />} />
          <Route path="/dashboard/vendor-profiles" element={<VendorProfiles />} />
        </Route>
      </Routes>
   </Router>
  );
}

export default App;
