import React from "react";
import Ticket from "../../components/Booking/Ticket";
import Acommodation from "../../components/Booking/Acommodation";
import Personal from "../../components/Booking/Personal";
import Payment from "../../components/Booking/Payment";
import Thanks from "../../components/Booking/Thanks";
import Basket from "./Basket";
function Pages(props) {
  const fixedCampingPrice = 99;

  return (
    <>
      <section id="pages">
        <div className="container-page">
          <ul>
            <li>
              <Ticket
                areas={props.areas}
                cartReg={props.cartReg}
                cartVip={props.cartVip}
                addRegToCart={props.addRegToCart}
                addVipToCart={props.addVipToCart}
              />
            </li>
            <li>
              <Acommodation
                areas={props.areas}
                cartReg={props.cartReg}
                cartVip={props.cartVip}
                addRegToCart={props.addRegToCart}
                addVipToCart={props.addVipToCart}
                chosenArea={props.chosenArea}
              />
            </li>
            <li>
              <Personal cartReg={props.cartReg} cartVip={props.cartVip} />
            </li>
            <li>
              <Payment />
            </li>
            <li>
              <Thanks />
            </li>
          </ul>

          <Basket
            areas={props.areas}
            cartReg={props.cartReg}
            cartVip={props.cartVip}
            addRegToCart={props.addRegToCart}
            addVipToCart={props.addVipToCart}
            ticketsQuantity={props.ticketsQuantity}
            spot={props.spot}
            totalPrice={props.totalPrice}
            subtotalPrice={props.subtotalPrice}
            totalReg={props.totalReg}
            totalVip={props.totalVip}
          />
        </div>
      </section>
    </>
  );
}

export default Pages;
