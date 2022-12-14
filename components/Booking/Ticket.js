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
              <Regtickets addToCart={props.addToCart} />
              <Viptickets addToCart={props.addToCart} />
            </div>
          </div>
        </div>
        <p></p>
      </section>
    </>
  );
}

function totalTicketsSum() {
  const regTicketCount = document.querySelector("#ticket-regular-quantity").value;
  // console.log(regTicketCount);
  const notstring = parseInt(regTicketCount, 10);
  const vipTicketCount = document.querySelector("#ticket-vip-quantity").value;
  // console.log(vipTicketCount);
  const notstring1 = parseInt(vipTicketCount, 10);
  const totalTickets = notstring + notstring1;
  // console.log(notstring1);
  console.log(totalTickets);
}
