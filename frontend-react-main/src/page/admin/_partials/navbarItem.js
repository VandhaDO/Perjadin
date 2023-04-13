import React from "react";

const NavbarItem = props => {
  return (
    <div>
      <li className={`nav-item ${props.active}`}>
        <a className="nav-link" href={props.link}>
          <i className={`fas fa-fw ${props.icon}`}></i>
          <span>{props.text}</span>
        </a>
      </li>
    </div>
  );
};

export default NavbarItem;
