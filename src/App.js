import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
   <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
   </Router>
  );
}

export default App;
