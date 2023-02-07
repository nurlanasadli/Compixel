import React from "react";
import { NavLink } from "react-router-dom";
import FooterTop from "./FooterTop";
function HeaderTop() {
  return (
    <div className="headerTop">
      <div className="phAndMail">
        <i className="fas fa-phone-alt"></i>
        <a href="tel:+994 77 605 77 75">1133</a>
        <i className="far fa-envelope"></i>
        <a
          href="mailto:abc@example.com?subject = Feedback&body = Message"
          className="mail"
        >
          compixel@devs.com
        </a>
      </div>
      <div className="headTopRight">
        <NavLink to="/about">
          <p>About us</p>
        </NavLink>
        <i className="fas fa-map-marker-alt"></i>
        <NavLink to="/location">
          <p>Location</p>
        </NavLink>
        <i className="far fa-clock"></i>
        <p className="workTime">Available 7/24</p>
      </div>
    </div>
  );
}

export default HeaderTop;
