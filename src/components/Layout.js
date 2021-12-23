import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="page-wrapper">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
