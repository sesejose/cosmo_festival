import Link from "next/link";
import Regtickets from "./Regticket";
import Viptickets from "./Vipticket";
import Anchor from "../Anchor";

export default function Tickets(props) {
  return (
    <>
      {/* Tickets */}
      <section id="tickets">
        <div className="container-page">
          <div className="wrapper-forms">
            <div className="forms-intro-text">
              <h1 className="turquoise text-center">Tickets</h1>
              <p className="text-center">Note! The limit per purchase is 9 tickets!</p>
            </div>
            <div className="tickets-container">
              <Regtickets ticket={props.tickets[0]} addRegToCart={props.addRegToCart} defineRegTotal={props.defineRegTotal} />
              <Viptickets ticket={props.tickets[1]} addVipToCart={props.addVipToCart} defineVipTotal={props.defineVipTotal} />
            </div>
            <Anchor className="btn-main" href={"tickets/acommodation"}>
              Acomodation
            </Anchor>
          </div>
        </div>
      </section>
    </>
  );
}
