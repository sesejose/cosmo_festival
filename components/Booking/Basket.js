import React from "react";
import { useEffect, useState } from "react";

export default function Basket(props) {
  return (
    <>
      <section id="basket">
        <div className="basket-container">
          <h2 className="turquoise">Summary order</h2>

          <div>
            <h4 className="white">Time to complete the order:</h4>
            <p className="turuoise">0</p>
          </div>
          <div>
            <h4 className="white">Total of tickets:</h4>
            <p className="turquoise">{props.totalReg + props.totalVip}</p>
          </div>

          <div id="ticket-template">
            <div className="posts">
              <div className="post-quantity-remove">
                <h3 className="turquoise type">{props.cartReg.displayname}</h3>
                <h4 className="white price">Ticket price: DKK {props.cartReg.price}</h4>
              </div>
              <div className="post-type-price">
                <h3 className="turquoise type">x{props.cartReg.amount}</h3>
                <button className="btn-remove">Remove</button>
              </div>
            </div>
          </div>

          <div id="ticket-template">
            <div className="posts">
              <div className="post-quantity-remove">
                <h3 className="turquoise type">{props.cartVip.displayname}</h3>
                <h4 className="white price">Ticket price: DKK {props.cartVip.price}</h4>
              </div>
              <div className="post-type-price">
                <h3 className="turquoise type">x{props.cartVip.amount}</h3>
                <button className="btn-remove">Remove</button>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Acommodation</h3>
              <h4 className="white">{props.spot}</h4>
              {/* <h4 className="white">Fuck!</h4> */}
            </div>
          </div>
          <hr></hr>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Booking camping spot</h3>
              <h4 className="white">Yes</h4>
            </div>
          </div>
          <hr></hr>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Tent 2 persons</h3>
              <h4 className="white">Tent 2 pers. price: DKK 299</h4>
            </div>
            <button className="btn-remove">Remove</button>
          </div>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Tent 2 persons</h3>
              <h4 className="white">Tent 3 pers. price: DKK 399</h4>
            </div>
            <button className="btn-remove">Remove</button>
          </div>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Ticket owner 1</h3>
              <h4 className="white">Fullname</h4>
              <h4 className="white">ID</h4>
              <h4 className="white">email@mail.com</h4>
            </div>
          </div>

          <hr></hr>
          <div className="sub-total-container">
            <div className="flex-row-space-around">
              <p className="white">Subtotal</p>
              <p className="white">DKK {props.totalPrice}</p>
            </div>
            <div className="flex-row-space-around">
              <h3 className="white">Total</h3>
              <h3 className="white">DKK {props.totalPrice}</h3>
            </div>
          </div>
          <button className="btn-main">PAY</button>
        </div>
      </section>
    </>
  );
}
