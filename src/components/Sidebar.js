import React from "react";
import IconDashboard from "./icons/IconDashboard";
import IconRightArrow from "./icons/IconRightArrow";
import IconToggle from "./icons/IconToggle";
import IconDot from "./icons/IconDot";
import IconUserGroup from "./icons/IconUserGroup";
import NavItem from "./NavItem";

const Sidebar = () => {
  return (
    <aside className="sidebar sidebar-default navs-rounded-all ">
      <div className="sidebar-header d-flex align-items-center justify-content-center">
        <a href="/dashboard" className="navbar-brand">
          DPM Dashboard
        </a>
        <div className="sidebar-toggle d-xl-none" data-toggle="sidebar" data-active="true">
          <i className="icon">
            <IconToggle />
          </i>
        </div>
      </div>
      <div
        className="sidebar-body pt-0 data-scrollbar"
        dataScrollbar="true"
        tabIndex="-1"
        style={{ overflow: "hidden", outline: "none" }}
      >
        <div className="scroll-content">
          <div className="sidebar-list">
            <ul className="navbar-nav iq-main-menu" id="sidebar-menu">
              <li class="nav-item static-item">
                <a class="nav-link static-item disabled" href="#" tabindex="-1">
                  <span class="default-icon">Home</span>
                  <span class="mini-icon">-</span>
                </a>
              </li>
              <li class="nav-item">
                <a
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  href="#home"
                  role="button"
                  aria-expanded="false"
                  aria-controls="home"
                >
                  <i className="icon">
                    <IconDashboard />
                  </i>
                  <span className="item-name">Dashboard</span>
                  <i className="right-icon">
                    <IconRightArrow />
                  </i>
                </a>
                <ul className="sub-nav collapse" id="home" data-bs-parent="#sidebar">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/dashboard">
                      <i className="icon">
                        <IconDot />
                      </i>
                      <i class="sidenav-mini-icon"> U</i>
                      <span className="item-name">Admin</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <hr className="hr-horizontal" />
              </li>
              <li class="nav-item">
                <a
                  className="nav-link collapsed"
                  data-bs-toggle="collapse"
                  href="#sidebar-user"
                  role="button"
                  aria-expanded="false"
                  aria-controls="sidebar-user"
                >
                  <i className="icon">
                    <IconUserGroup />
                  </i>
                  <span className="item-name">Vendors</span>
                  <i className="right-icon">
                    <IconRightArrow />
                  </i>
                </a>
                <ul className="sub-nav collapse" id="sidebar-user" data-bs-parent="#sidebar-menu">
                  <NavItem
                    to="/dashboard/vendor-profiles"
                    Icon={IconDot}
                    name="Vendor Profiles"
                    initial="V"
                  />
                  <NavItem to="/dashboard/vendor-profiles/add" Icon={IconDot} name="Add Vendor" initial="A" />
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
