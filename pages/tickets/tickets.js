import React from "react";
import Basket from "../components/Basket";
import { useEffect, useState } from "react";

function Tickets() {
  const [tickets, setTickets] = useState();
  const [regTickets, setRegTickets] = useState();
  const [vipTickets, setVipTickets] = useState();

  function setQuantities() {
    const quantityReg = displayQuantityTicketsRegular;
    const quantityVip = displayQuantityTicketsVip;
    setRegTickets(quantityReg);
    setVipTickets(quantityVip);
  }

  return (
    <>
      {/* Tickets */}
      <section id="tickets">
        <div className="container-page">
          <div className="wrapper-forms">
            <div className="forms-intro-text">
              <h1 className="turquoise text-center">Tickets</h1>
              <p className="text-center">Lorem ipsum</p>
            </div>
            <div className="tickets-container">
              <div className="ticket-regular">
                <div className="seven-days">
                  <h1>7</h1>
                  <h4>Days</h4>
                </div>
                <div className="flex-column">
                  <div className="flex-row-space-around">
                    <h2>Regular Pass</h2>
                    <h2>DKK 799</h2>
                  </div>
                  <div className="flex-row-space-around">
                    <button className="read-more">Read more</button>
                    <button className="btn-add" onClick={openRegular}>
                      Add to card
                    </button>
                  </div>
                </div>
              </div>
              <div id="choose-quantity-regular" className="open-ticket-regular">
                <div className="flex-row-space-around quantity-container">
                  <form className="flex-row-space-around">
                    <label htmlFor="ticket-regular-quantity"></label>
                    <input id="ticket-regular-quantity" type="number" name="tickets-quantity" min="0" placeholder="0" className="input-number-tickets" onChange={displayQuantityTicketsRegular}></input>
                  </form>
                  <div className="flex-row-space-around">
                    <h3 className="regular-quantity">0X</h3>
                    <h3>799</h3>
                  </div>
                  <div className="flex-row-space-around">
                    <h3>Total:</h3>
                    <h3 className="totalTicketsRegular">0</h3>
                  </div>
                </div>
                <button className="btn-add" onClick={setQuantities}>
                  Add to card
                </button>
              </div>
              <div className="ticket-vip">
                <div className="seven-days">
                  <h1>7</h1>
                  <h4>Days</h4>
                </div>
                <div className="flex-column">
                  <div className="flex-row-space-around">
                    <h2>VIP Pass</h2>
                    <h2>DKK 1299</h2>
                  </div>
                  <div className="flex-row-space-around">
                    <button className="read-more">Read more</button>
                    <button className="btn-add" onClick={openVip}>
                      Add to card
                    </button>
                  </div>
                </div>
              </div>
              <div id="choose-quantity-vip" className="open-ticket-vip">
                <div className="flex-row-space-around quantity-container">
                  <form className="flex-row-space-around">
                    <label htmlFor="ticket-vip-quantity"></label>
                    <input id="ticket-vip-quantity" type="number" name="tickets-quantity" min="0" placeholder="0" className="input-number-tickets" onChange={displayQuantityTicketsVip}></input>
                  </form>
                  <div className="flex-row-space-around">
                    <h3 className="vip-quantity">0X</h3>
                    <h3>1299</h3>
                  </div>
                  <div className="flex-row-space-around">
                    <h3>Total:</h3>
                    <h3 className="totalTicketsVip">0</h3>
                  </div>
                </div>
                <button className="btn-add" onClick={setQuantities}>
                  Add to card
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basket */}
      <Basket regTickets={regTickets} vipTickets={vipTickets}></Basket>
    </>
  );
}

export default Tickets;

function displayQuantityTicketsRegular() {
  const quantity = document.querySelector(".regular-quantity");
  const tickets = document.querySelector("#ticket-regular-quantity");
  quantity.textContent = tickets.value + "x";
  // Calculating the total
  const total = tickets.value * 799;
  document.querySelector(".totalTicketsRegular").textContent = "DKK " + total;
  return tickets.value;
}

function displayQuantityTicketsVip() {
  const quantity = document.querySelector(".vip-quantity");
  const tickets = document.querySelector("#ticket-vip-quantity");
  quantity.textContent = tickets.value + "x";
  // Calculating the total
  const total = tickets.value * 1299;
  document.querySelector(".totalTicketsVip").textContent = "DKK " + total;
  return tickets.value;
}

function openRegular() {
  const regular = document.querySelector(".open-ticket-regular");
  if ((regular.style.display = "none")) {
    regular.style.display = "flex";
  } else {
    regular.style.display = "none";
  }
}

function openVip() {
  const vip = document.querySelector(".open-ticket-vip");
  if ((vip.style.display = "none")) {
    vip.style.display = "flex";
  } else {
    vip.style.display = "none";
  }
}
