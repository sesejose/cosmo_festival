import React from "react";
import Basket from "../../components/Basket";
import { useState, useEffect } from "react";

// 1.  step we need to fetch the data for the areas ( how many available spaces are there in each individual areas)
// 2.  step check which area has enough space, by comparing it it total tickets in basket - what if there is none? => show sold out
// 3.  step
//
export default function TicketsPage({ areas, bookingInfo }) {
  console.log(bookingInfo);
  // const  {Midgard: {mon,tue, wen, thu,fri,sat,sun}} = schedule
  console.log(areas);
  // const {
  //   0: { area, spots, available },
  // } = areas;
  // console.log(areas[0]);
  // const area1 = areas[0].available;
  // console.log(area1);
  // const area2 = areas[1].available;
  // console.log(area2);
  // const area3 = areas[2].available;
  // console.log(area3);
  // const area4 = areas[3].available;
  // console.log(area4);
  // const area5 = areas[4].available;
  // console.log(area5);
  totalTicketsSum();

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
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div id="choose-quantity-regular" className="open-ticket-regular">
                <div className="flex-row-space-around quantity-container">
                  <form className="flex-row-space-around">
                    {/* have to send the available tickets here */}
                    <label htmlFor="ticket-regular-quantity"></label>
                    <input
                      id="ticket-regular-quantity"
                      type="number"
                      name="tickets-quantity"
                      min="0"
                      max="9"
                      placeholder="0"
                      className="input-number-tickets"
                      onChange={displayQuantityTicketsRegular}
                    ></input>
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
                <button className="btn-add">Add to cart</button>
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
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div id="choose-quantity-vip" className="open-ticket-vip">
                <div className="flex-row-space-around quantity-container">
                  <form className="flex-row-space-around">
                    <label htmlFor="ticket-vip-quantity"></label>
                    <input
                      id="ticket-vip-quantity"
                      type="number"
                      name="tickets-quantity"
                      min="0"
                      max="9"
                      placeholder="0"
                      className="input-number-tickets"
                      onChange={displayQuantityTicketsVip}
                    ></input>
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
                <button className="btn-add">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
        <p></p>
      </section>
      {/* Basket */}
      <Basket totalTicketsSum={totalTicketsSum}></Basket>
    </>
  );
}

function displayQuantityTicketsRegular() {
  const quantity = document.querySelector(".regular-quantity");
  const tickets = document.querySelector("#ticket-regular-quantity");
  quantity.textContent = tickets.value + "x";
  console.log(tickets.value);
  // Calculating the total
  const total = tickets.value * 799;
  document.querySelector(".totalTicketsRegular").textContent = "DKK " + total;
}

function displayQuantityTicketsVip() {
  const quantity = document.querySelector(".vip-quantity");
  const tickets = document.querySelector("#ticket-vip-quantity");
  quantity.textContent = tickets.value + "x";
  console.log(tickets.value);
  // Calculating the total
  const total = tickets.value * 1299;
  document.querySelector(".totalTicketsVip").textContent = "DKK " + total;
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
export async function getStaticProps() {
  /* This function runs before the component bands is render
    - fetch the data
    - wait for that data
    - once we have the data, it put into the component
    - so the component can render with that data inside it  */

  const res = await fetch("http://localhost:8080/available-spots");
  const data = await res.json();

  /* - we return a value for this function 
- that value is got we have a props property we give the property a value
- that value is going to be an object 
- inside the objecint to be an object so we can past all the properties that we need*/
  return {
    props: { areas: data },
  };
}
