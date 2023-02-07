import React from "react";
import { connect } from "react-redux";
import "./Basket.css";

function Basket(props) {
  console.log(props.basket);
  return (
    <div className="basketContainer">
      <div className="basketProducts">
        {props.basket.map((item) => (
          <div className="basketItem" key={item.id}>
            <div className="basketImg">
            <img src={item.image} />
          </div>
          <div className="basketName">
            <p>{item.name}</p>
          </div>
          <div className="basketQty">
            <span className="minus"> <i className="fa-light fa-circle-minus"></i> </span>
            <p className="qty">{item.quantity}</p>
            <span className="plus"> <i className="fa-light fa-circle-plus"></i> </span>
          </div>
          <div className="basketPrice">
            <span>{item.price} ₼</span> 
          </div>
          <div className="trash">
          <i className="fa-solid fa-trash-can"></i>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

let t = (s) => s;
export default connect(t)(Basket);
