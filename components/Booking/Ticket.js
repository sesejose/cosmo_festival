import Link from "next/link";
import Regtickets from "./Regticket";
import Viptickets from "./Vipticket";
import { useState } from "react";

export default function Tickets(props) {
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [status5, setStatus5] = useState(false);

  const area1 = props.areas[0].available;
  // console.log(area1);
  const area2 = props.areas[1].available;
  // console.log(area2);
  const area3 = props.areas[2].available;
  // console.log(area3);
  const area4 = props.areas[3].available;
  // console.log(area4);
  const area5 = props.areas[4].available;
  // console.log(area5);
  const ticketsQuantity = props.cartReg.amount + props.cartVip.amount;
  console.log("Tickets", ticketsQuantity);
  console.log("Area1:", area1);
  console.log("Area2:", area2);
  console.log("Area3:", area3);
  console.log("Area4:", area4);
  console.log("Area5:", area5);

  function checkAvailability() {
    if (ticketsQuantity > area1) {
      const svartheim = document.querySelector("#svartheim");
      svartheim.disabled = { status1 };
      setStatus1(true);
    }
    if (ticketsQuantity > area2) {
      const nilfheim = document.querySelector("#nilfheim");
      nilfheim.disabled = { status2 };
      setStatus2(true);
    }
    if (ticketsQuantity > area3) {
      const helheim = document.querySelector("#helheim");
      helheim.disabled = { status3 };
      setStatus3(true);
    }
    if (ticketsQuantity > area4) {
      const muspelheim = document.querySelector("#muspelheim");
      muspelheim.disabled = { status4 };
      setStatus4(true);
    }
    if (ticketsQuantity > area5) {
      const alfheim = document.querySelector("#alfheim");
      alfheim.disabled = { status5 };
      setStatus5(true);
    }
  }
  return (
    <>
      {/* Tickets */}
      <section id="tickets">
        {/* <div className="container-page"> */}
        <div className="wrapper-forms">
          <div className="forms-intro-text">
            <h1 className="turquoise text-center">Tickets</h1>
            <p className="text-center">Note! The limit per purchase is 9 tickets!</p>
          </div>
          <div className="tickets-container">
            <Regtickets key={props.cartReg.id} cartReg={props.cartReg} addRegToCart={props.addRegToCart} />
            <Viptickets key={props.cartVip.id} cartVip={props.cartVip} addVipToCart={props.addVipToCart} />
          </div>
          <div>
            <button className="btn-main" onClick={checkAvailability}>
              NEXT
            </button>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
