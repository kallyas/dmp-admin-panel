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
            to={"/dashboard/vendors"}
            className={`nav-link ${path.includes("vendors") ? "" : "collapsed"}  `}
          >
            <i className="bi bi-people"></i> <span>Vendors</span>
          </Link>
        </li>
        {/* add vendors */}
        <li className="nav-item">
          <Link
            to={"/dashboard/add-vendor"}
            className={`nav-link ${path.includes("add-vendor") ? "" : "collapsed"}  `}
          >
            <i className="bi bi-person-plus"></i> <span>Add Vendor</span>
          </Link>
        </li>
        {/* staff */}
        <li className="nav-item">
          <Link
            to={"/dashboard/staff"}
            className={`nav-link ${path.includes("staff") ? "" : "collapsed"}  `}
          >
            <i className="bi bi-person-plus"></i> <span>Staff</span>
          </Link>
        </li>
        {/* add staff */}
        <li className="nav-item">
          <Link
            to={"/dashboard/add-staff"}
            className={`nav-link ${path.includes("add-staff") ? "" : "collapsed"}  `}
          >
            <i className="bi bi-person-plus"></i> <span>Add Staff</span>
          </Link>
        </li>
        {/* Bus Routes */}
        <li className="nav-item">
          <Link
            to={"/dashboard/routes"}
            className={`nav-link ${path.includes("routes") ? "" : "collapsed"}  `}
          >
            <i className="bi bi-truck"></i> <span>Bus Routes</span>
          </Link>
        </li>
        {/* logout */}
        <li className="nav-item">
          <Link
            to={"/dashboard/logout"}
            className={`nav-link ${path.includes("logout") ? "" : "collapsed"}  `}
          >
            <i className="bi bi-box-arrow-right"></i> <span>Logout</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
