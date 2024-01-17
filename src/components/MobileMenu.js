// MobileMenu.js

import React, { useState } from "react";
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Description as DescriptionIcon,
  Room as RoomIcon,
  ArrowForward as ArrowForwardIcon,
} from "@material-ui/icons";
import "./MobileMenu.css";

const MobileMenu = ({ showMobileMenu }) => {
  // const toggleMenu = () => {
  //   setMenuVisible(!menuVisible);
  // };

  return (
    <div className="mobile-menu-container">
      {/* <div className="menu-icon" onClick={toggleMenu}>
        <MenuIcon />
      </div> */}

      {showMobileMenu && (
        <div className="mobile-menu">
      {/* Logo and Icons in the same line */}
      <div className="logo-icons-container">
        {/* Logo */}
        <div className="logo">Your Logo</div>
        {/* Right side icons */}
        <div className="icons">
          <span className="icon">🔍</span> {/* Search icon */}
          <span className="icon">👤</span> {/* Profile icon */}
          <span className="icon">🛒</span> {/* Cart icon */}
        </div>
      </div>

      {/* Greeting */}
      <div className="header">
        <div className="greeting">
          <span className="small-font">Hi,</span>
          <span className="bold-font"> James</span>
        </div>
      </div>

      {/* Menu List */}
      <ul className="menu-list">
        <li>
          <span className="menu-icon">🏠</span> Home
          <span className="arrow-icon">➡️</span>
        </li>
        <li>
          <span className="menu-icon">🛍️</span> Products
          <span className="arrow-icon">➡️</span>
        </li>
        <li>
          <span className="menu-icon">ℹ️</span> About Us
          <span className="arrow-icon">➡️</span>
        </li>
        <li>
          <span className="menu-icon">📞</span> Contact
          <span className="arrow-icon">➡️</span>
        </li>
      </ul>
    </div>
      )}
    </div>
  );
};

export default MobileMenu;
