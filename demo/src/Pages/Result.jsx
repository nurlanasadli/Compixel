import React, { useState } from "react";
import { connect } from "react-redux";
import { Switch } from "antd";
import Footer from "../Companents/Footer";
import FooterTop from "../Companents/FooterTop";
import Compasus from "../images/compasus.jpg";
import { NavigationType, NavLink, useParams } from "react-router-dom";
function Result(props) {
  const addToBasket = (item) => {
    props.dispatch({ type: "ADDTOBASKET", value: item });
  };
  let { category } = useParams();
  let { brand } = useParams();
  if (!brand) {
    brand = "";
  }
  return (
    <div className="resContainer">
      <div className="best__sellers">
        <div className="sellers__all">
          <div className="sellers__lowest">
            <h1>Computer Systems</h1>
            <h3>Build Now Sale</h3>
            <h3>Best Sellers in Laptops</h3>
            <h3>Lowest price in Computer</h3>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="product__filter">
          <div className="filter__title">
            <h4>
              POWER SEARCH <i class="fa-sharp fa-solid fa-caret-right"></i>
            </h4>
          </div>
          <div className="filter__button">
            <div className="combo__button v1">
              <p>
                Remove Combo <br /> Deal Options
              </p>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                className="buttons"
              />
            </div>
            <div className="combo__button">
              <p>In Stock</p>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                className="buttons"
              />
            </div>
            <div className="combo__button v1">
              <p>On Sale</p>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                className="buttons"
              />
            </div>
            <div className="combo__button">
              <p>Sold by Compixel</p>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                className="buttons"
              />
            </div>
            <div className="combo__button blue v1">
              <p>
                <i class="fa-solid fa-truck-moving"></i>{" "}
                <span>SHIPPED BY COMPIXEL</span>{" "}
              </p>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                className="buttons"
              />
            </div>
            <div className="combo__button ">
              <p>
                Direct From <br /> Manufacturer
              </p>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                className="buttons"
              />
            </div>
            <div className="combo__button v1">
              <p>
                Cryptocurrency Payment <br /> Accepted
              </p>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                className="buttons"
              />
            </div>
            <div className="combo__button">
              <p>Lowest price in 30 days</p>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                className="buttons"
              />
            </div>
            <div className="combo__button v1">
              <p>Free Shipping</p>
              <Switch
                checkedChildren="On"
                unCheckedChildren="Off"
                className="buttons"
              />
            </div>
          </div>
        </div>
        <div className="product__both">
          <div className="product__images">
            <img src={Compasus} />
          </div>
          <div className="memory__text">
            <h1>SHOP BY MEMORY</h1>
            <div className="memory__gb">
            <h3>64GB</h3>
            <h3>40GB</h3>
            <h3>32GB</h3>
            <h3>24GB</h3>
            <h3>20GB</h3>
            <h3>12GB</h3>
            <h3>8GB</h3>
            </div>
          </div>
          {props.products
            .filter(
              (a) =>
                a.category.toLowerCase() == category &&
                a.brand.toLowerCase().includes(brand)
            )
            .map((t) => {
              return (
                <div className="product" key={t.id}>
                  <NavLink to={`/description/${t.id}`}>
                    <div className="imgDiv">
                      <img src={t.image} />
                    </div>
                    <div className="nameDiv">
                      <div className="div__brand">
                        <h1>{t.brand}</h1>
                      </div>
                      <div className="price__name">
                        <div className="brand__name">
                          <h1>{t.name}</h1>
                        </div>
                        <h1 className="price">
                          <span>$</span>
                          {t.price}
                        </h1>
                        <div className="baizer__all">
                          <div className="cubic__baizer">Save: 34% </div>
                          <div className="cubic__ex"></div>
                        </div>
                        <p>Free Shiping </p>
                      </div>
                    </div>
                  </NavLink>
                  <div className="Bottom__all">
                    <div className="productBottom">
                      <div className="detailsBtn">
                        <NavLink to={`/description/${t.id}`}>
                          <p>
                            VIEW DETAILS
                            <i class="fa-sharp fa-solid fa-caret-right"></i>
                          </p>
                        </NavLink>
                      </div>
                      <div className="basketBtn">
                        <button
                          onClick={() => addToBasket(t)}
                          className="addToCard"
                        >
                          ADD TO CART
                          <i class="fa-sharp fa-solid fa-caret-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="footer__result">
        <Footer />
        <FooterTop />
      </div>
      </div>
      
    </div>
  );
}
let t = (s) => s;
export default connect(t)(Result);
