/* eslint-disable */
import React from "react";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const { pathname } = location;
  // remove the first slash
  const path = pathname.substring(1);
  return (
    <aside className="sidebar">
      <ul className="sidebar-nav">
        <li className="nav-item">
          <a className={`nav-link ${path == "dashboard" ? "" : "collapsed"}`} href="/dashboard">
            <i className="bi bi-grid"></i> <span>Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${path.includes('vendors') ? "" : "collapsed"}  `}href="/dashboard/vendors">
            <i className="bi bi-people"></i> <span>Vendors</span>
          </a>
        </li>
        {/* add vendors */}
        <li className="nav-item">
          <a className={`nav-link ${path.includes('add-vendor') ? "" : "collapsed"}  `}href="/dashboard/add-vendor">
            <i className="bi bi-person-plus"></i> <span>Add Vendor</span>
          </a>
        </li>
        {/* staff */}
        <li className="nav-item">
          <a className={`nav-link ${path.includes('staff') ? "" : "collapsed"}  `}href="/dashboard/staff">
            <i className="bi bi-person-plus"></i> <span>Staff</span>
          </a>
        </li>
        {/* add staff */}
        <li className="nav-item">
          <a className={`nav-link ${path.includes('add-staff') ? "" : "collapsed"}  `}href="/dashboard/add-staff">
            <i className="bi bi-person-plus"></i> <span>Add Staff</span>
          </a>
        </li>
        {/* Bus Routes */}
        <li className="nav-item">
          <a className={`nav-link ${path.includes('routes') ? "" : "collapsed"}  `}href="/dashboard/routes">
            <i className="bi bi-truck"></i> <span>Bus Routes</span>
          </a>
        </li>
        {/* logout */}
        <li className="nav-item">
          <a className={`nav-link ${path.includes('logout') ? "" : "collapsed"}  `}href="/dashboard/logout">
            <i className="bi bi-box-arrow-right"></i> <span>Logout</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
