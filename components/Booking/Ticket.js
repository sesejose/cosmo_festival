import Regtickets from "./Regticket";
import Viptickets from "./Vipticket";

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
              <Regtickets ticket={props.tickets} addToCart={props.addToCart} />
              <Viptickets ticket={props.tickets} addToCart={props.addToCart} />
            </div>
          </div>
        </div>
        <p></p>
      </section>
    </>
  );
}
