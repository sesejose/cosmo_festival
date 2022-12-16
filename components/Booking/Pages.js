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
