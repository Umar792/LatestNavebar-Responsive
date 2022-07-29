import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navebar = () => {
  const [togglemenu, settoglrmenu] = useState(false);

  const toggle = () => {
    settoglrmenu(!togglemenu);
  };
  return (
    <>
      <div className="navebar">
        <div className="logo">
          <h1>
            Umar<font>Coder</font>
          </h1>
        </div>
        <div>
          {togglemenu ? (
            <ImCross className="burger" onClick={toggle} />
          ) : (
            <GiHamburgerMenu className="burger" onClick={toggle} />
          )}
        </div>
        <div className={togglemenu ? "menus" : "mobile-menu menus"}>
          <ul onClick={toggle}>
            <li>
              <NavLink activeClassName="active" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="service">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="contact">
                Contact-Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navebar;
