/* eslint-disable */
import React from "react";
import { IconBell, IconHome, IconLogout, IconMoon, IconPackage, IconSun } from "@tabler/icons";

const Sidebar = () => {
  return (
    <aside className="navbar navbar-vertical navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand navbar-brand-autodark">
          <a href="/dashboard">
            <img
              src="https://dpm-vendor-ui-nzs4n.ondigitalocean.app/static/media/dpm_logo.0a9f7327.png"
              width="110"
              height="32"
              alt="Tabler"
              className="navbar-brand-image"
            />
          </a>
        </h1>
        <div className="navbar-nav flex-row d-lg-none">
          <a
            href="?theme=dark"
            className="nav-link px-0 hide-theme-dark"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-original-title="Enable dark mode"
          >
            <IconMoon />
          </a>
          <a
            href="?theme=light"
            className="nav-link px-0 hide-theme-light"
            title=""
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-original-title="Enable light mode"
          >
            <IconSun />
          </a>
          <div className="nav-item dropdown d-none d-md-flex me-3">
            <a
              href="#"
              className="nav-link px-0"
              data-bs-toggle="dropdown"
              tabindex="-1"
              aria-label="Show notifications"
            >
              <IconBell />
              <span className="badge bg-red"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-card">
              <div className="card">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad amet
                  consectetur exercitationem fugiat in ipsa ipsum, natus odio quidem quod
                  repudiandae sapiente. Amet debitis et magni maxime necessitatibus ullam.
                </div>
              </div>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link d-flex lh-1 text-reset p-0"
              data-bs-toggle="dropdown"
              aria-label="Open user menu"
            >
              <span
                className="avatar avatar-sm"
                style={{ backgroundImage: "url(./static/avatars/000m.jpg)" }}
              ></span>
              <div className="d-none d-xl-block ps-2">
                <div>Paweł Kuna</div>
                <div className="mt-1 small text-muted">UI Designer</div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <a href="#" className="dropdown-item">
                Settings
              </a>
              <a href="#" className="dropdown-item">
                Logout
              </a>
            </div>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav pt-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="/dashboard">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <IconHome />
                </span>
                <span className="nav-link-title"> Home </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/dashboard/vendors">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <IconPackage />
                </span>
                <span className="nav-link-title"> Vendors </span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/logout">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <IconLogout />
                </span>
                <span className="nav-link-title"> Logout </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
