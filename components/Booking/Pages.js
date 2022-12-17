import React from "react";
import Ticket from "../../components/Booking/Ticket";
import Acommodation from "../../components/Booking/Acommodation";
import Personal from "../../components/Booking/Personal";
import Payment from "../../components/Booking/Payment";
import Thanks from "../../components/Booking/Thanks";

function Pages(props) {
  return (
    <>
      <section id="pages">
        <div className="container-page">
          <ul>
            <li>
              <Ticket areas={props.areas} cartReg={props.cartReg} cartVip={props.cartVip} addRegToCart={props.addRegToCart} addVipToCart={props.addVipToCart} />
            </li>
            <li>
              <Acommodation areas={props.areas} cartReg={props.cartReg} cartVip={props.cartVip} addRegToCart={props.addRegToCart} addVipToCart={props.addVipToCart} />
            </li>
            <li>
              <Personal />
            </li>
            <li>
              <Payment />
            </li>
            <li>
              <Thanks />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Pages;
