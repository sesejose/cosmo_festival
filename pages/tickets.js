import React from "react";
import Basket from "../components/Basket";
import { useEffect, useState } from "react";

function Tickets(props) {
  const [tickets, setTickets] = useState([]);
  const [data, setData] = useState([]);

  // Sending Tickets to the Supabase --> Then fetch from the basket

  // init();

  // async function init() {
  //   showTickets();
  // }

  // Fetching the data
  useEffect(() => {
    async function getData() {
      const url = "https://udfchraccrfladlsvbzh.supabase.co/rest/v1/cosmo_festival";
      const headers = {
        "Content-Type": "application/json",
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
        Prefer: "return-representation",
      };
      const options = {
        method: "GET",
        headers: headers,
      };
      // Await then execute the code.
      const res = await fetch(url, options); // Fetchs the data (await)
      const data = await res.json(); //When it's done getting it
      // return data; // This returned "data/array" used in the showData();
      setData(data);
      console.log(data);
    }
    getData();
  }, []);

  // function addTickets(tickets) {
  //   console.log(tickets);
  // }

  function consoleData() {
    console.log(data);
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
                <button className="btn-add" onClick={consoleData}>
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
                <button className="btn-add" onClick={consoleData}>
                  Add to card
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Basket */}
      <Basket tickets={tickets}></Basket>
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
}

function displayQuantityTicketsVip() {
  const quantity = document.querySelector(".vip-quantity");
  const tickets = document.querySelector("#ticket-vip-quantity");
  quantity.textContent = tickets.value + "x";
  // Calculating the total
  const total = tickets.value * 1299;
  document.querySelector(".totalTicketsVip").textContent = "DKK " + total;
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

function addTickets() {}
