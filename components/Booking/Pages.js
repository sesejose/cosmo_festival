import React from "react";
import Ticket from "../../components/Booking/Ticket";
import Acommodation from "../../components/Booking/Acommodation";
import Personal from "../../components/Booking/Personal";
import Payment from "../../components/Booking/Payment";

function Pages(props) {
  return (
    <>
      <div className="container-page">
        <ul>
          <li>
            <Ticket areas={props.areas} tickets={props.tickets} addRegToCart={props.addRegToCart} addVipToCart={props.addVipToCart} defineVipTotal={props.defineVipTotal} defineRegTotal={props.defineRegTotal} />
          </li>
          <li>
            <Acommodation />
          </li>
          <li>
            <Personal />
          </li>
          <li>
            <Payment />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Pages;
