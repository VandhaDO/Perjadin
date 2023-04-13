import React from "react";
import NavbarItem from "./navbarItem";

const NavbarAdmin = () => {
  return (
    <div>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          {/* link logo */}
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            e-<sup>PERJADIN</sup>
          </div>
        </a>
        <NavbarItem
          active="true"
          link="#"
          icon="fa-tachometer-alt"
          text="Dashboard"
        />
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">Interface</div>

        <NavbarItem
          active="false"
          link="#"
          icon="fa-tachometer-alt"
          text="Dashboard"
        />
        
        <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div>
      </ul>
    </div>
  );
};

export default NavbarAdmin;
