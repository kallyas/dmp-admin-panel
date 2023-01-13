/* eslint-disable */
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  // remove the first slash
  const path = pathname.substring(1);
  return (
    <aside className="sidebar">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <Link to={"/dashboard"} className={`nav-link ${path == "dashboard" ? "" : "collapsed"}`}>
            <i className="bi bi-grid"></i> <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${path.includes("vendors") ? "" : "collapsed"}  `}
            to="/dashboard/vendors"
          >
            <i className="bi bi-people"></i> <span>Vendors</span>
          </Link>
        </li>
        {/* add vendors */}
        <li className="nav-item">
          <Link
            className={`nav-link ${path.includes("add-vendor") ? "" : "collapsed"}  `}
            to="/dashboard/add-vendor"
          >
            <i className="bi bi-person-plus"></i> <span>Add Vendor</span>
          </Link>
        </li>
        {/* staff */}
        <li className="nav-item">
          <Link
            className={`nav-link ${path.includes("staff") ? "" : "collapsed"}  `}
            to="/dashboard/staff"
          >
            <i className="bi bi-person-plus"></i> <span>Staff</span>
          </Link>
        </li>
        {/* add staff */}
        <li className="nav-item">
          <Link
            className={`nav-link ${path.includes("add-staff") ? "" : "collapsed"}  `}
            to="/dashboard/add-staff"
          >
            <i className="bi bi-person-plus"></i> <span>Add Staff</span>
          </Link>
        </li>
        {/* Bus Routes */}
        <li className="nav-item">
          <Link
            className={`nav-link ${path.includes("routes") ? "" : "collapsed"}  `}
            to="/dashboard/routes"
          >
            <i className="bi bi-truck"></i> <span>Bus Routes</span>
          </Link>
        </li>
        {/* logout */}
        <li className="nav-item">
          <Link
            className={`nav-link ${path.includes("logout") ? "" : "collapsed"}  `}
            to="/dashboard/logout"
          >
            <i className="bi bi-box-arrow-right"></i> <span>Logout</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
