import React from "react";
import basket from "../images/basket.png";
import heart from "../images/heart.png";
import user from "../images/user.png";
import logo from "../images/Compixel.png";
import reg from "../images/pencil.png";
import LoginModal from "./LoginModal";
import view from "../images/view.png";
import Us from "../images/Us.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
function  Header() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="header__all">
      <header className="header wrapper">
        <div className="side-menu">
          <i class="fa-light fa-bars"></i>
        </div>
        <NavLink to="/">
          <div className="logoDiv">
            <img src={logo} alt="" />
          </div>
        </NavLink>
        <div className="address-magazine">
          <i class="fa-thin fa-location-dot"></i>
          <div className="address-text">
            <h3>Hello</h3>
            <h2>Select Address</h2>
          </div>
        </div>
        <div className="search">
          {/* <i className="fas fa-bars"></i>
        <p>Kataloq</p> */}
          <div className="formControll">
            <input type="text" placeholder="Search product" />
            <div className="formControl1">
              <i class="fa-light fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        <div className="notification">
          <i class="fa-light fa-bell"></i>
        </div>
        <div className="flag-change">
          <img src={Us} />
        </div>
        <div className="hesab">
          <button
            className="flex align-center"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <img src={user} />
            <div className="sign-regis">
              <h3>Welcome</h3>
              <h4>Sign in / Register</h4>
            </div>
          </button>
        </div>
        <div className="qeydiyyat">
          <NavLink to="/registration">
            <button>
              <div className="return_flex">
                <h3>Return</h3>
                <h4>& Orders</h4>
              </div>
            </button>
          </NavLink>
        </div>
        <div>
          <NavLink to="/basket">
            <div className="sebet">
              <img src={basket} />
            </div>
          </NavLink>
          {/* <img src={heart} /> */}
        </div>
        {openModal && <LoginModal closeModal={setOpenModal} />}
      </header>
      <div className="alt__header">
        <div className="header__native">
          <p>Today's Best Deals</p>
          <p>Best Sellers</p>
          <p className="red">Valentine's Day</p>
          <p>PC Builder</p>
          <p>VR</p>
          <p className="open">Browsing History <i class="fa-regular fa-chevron-down"></i>
          <div className="dropdown1">
            <h3>YOUR BROWSING HISTORY</h3>
            <div className="view__header">
              <h1>No Viewed Items</h1>
              <p>There is no viewed items. Please go and browse.</p>
              <img src={view} />
            </div>
          </div>
          </p>
          <p>Gaming PC Finder</p>
        </div>
        <div className="header__feedback">
          <div className="header__feed">
            <p>
              <span> COMPIXEL</span> BUSINESS
            </p>
          </div>
          <div className="symbol">&#10072;</div>
          <div className="feed__button">
            <button>
              {" "}
              <i class="fa-light fa-message-smile"></i>{" "}
              <p className="feed1"> FEEDBACK</p>
            </button>
          </div>
          <div className="symbol">&#10072;</div>
          <div className="feed__button">
            <button>
              {" "}
              <i class="fa-light fa-circle-question"></i> <p>HELP CENTER</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
