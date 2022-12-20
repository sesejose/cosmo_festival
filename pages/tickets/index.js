import React from "react";
import { useState, useEffect } from "react";
import Basket from "../../components/Booking/Basket";
import Ticket from "../../components/Booking/Ticket";
import Acommodation from "../../components/Booking/Acommodation";
import Personal from "../../components/Booking/Personal";
import Payment from "../../components/Booking/Payment";
import Thanks from "../../components/Booking/Thanks";
// import Regtickets from "../../components/Booking/Regticket";

export default function TicketsPage(props) {
  const fixedCampingPrice = 99;

  const [cartReg, setCartReg] = useState([]);
  const [cartVip, setCartVip] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [totalReg, setTotalReg] = useState(0);
  const [totalVip, setTotalVip] = useState(0);
  const [totalPrice, setTotalPrice] = useState();
  const [subtotalPrice, setSubtotalPrice] = useState();
  const [availables, setAvailables] = useState([]);
  const [spot, setSpot] = useState();
  // 2 Parameters come from the callback function in RegTicket component
  function addRegToCart(cartReg, totalReg) {
    setTotalReg(totalReg);
    const amount = totalReg;
    if (cartReg.amount === 0) {
      setCartReg({ ...cartReg, amount: amount });
    }
    // setting subtotal price state
    setSubtotalPrice(totalVip * cartVip.price + totalReg * cartReg.price);
    // Setting total Price State
    setTotalPrice(totalVip * cartVip.price + totalReg * cartReg.price + fixedCampingPrice);
  }

  // 2 Parameters come from the callback function in VipTicket component
  function addVipToCart(cartVip, totalVip) {
    setTotalVip(totalVip);
    const amount = totalVip;
    if (cartVip.amount === 0) {
      setCartVip({ ...cartVip, amount: amount });
    }
    setSubtotalPrice(totalVip * cartVip.price + totalReg * cartReg.price);

    setTotalPrice(totalVip * cartVip.price + totalReg * cartReg.price + fixedCampingPrice);
  }
  // make the steps
  //
  // Fetching tickets from Supabase (Tickets table)
  useEffect(() => {
    async function getData() {
      const url = "https://udfchraccrfladlsvbzh.supabase.co/rest/v1/tickets";
      const headers = {
        "Content-Type": "application/jsonS",
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
        Prefer: "return-representation",
      };
      const options = {
        method: "GET",
        headers: headers,
      };
      const body = {
        body: "false",
      };
      // Await then execute the code.
      const res = await fetch(url, options, body); // Fetchs the data (await)
      const tickets = await res.json(); //When it's done getting it
      // return data; // This returned tickets in an array - square brackets to define each one.
      setCartReg(tickets[0]);
      setCartVip(tickets[1]);
      setTickets(tickets);
    }
    getData();
  }, []);

  // Fetching areas from Available spots
  useEffect(() => {
    async function getData() {
      // const res = await fetch("https://bitter-moon-5524.fly.dev/available-spots");
      const res = await fetch("http://localhost:8080/available-spots");
      const data = await res.json();
      setAvailables(data);
      // console.log(data);
    }
    getData();
  }, []);

  // Acommodation
  // This function returns with a parameter (the area selected)
  function chosenArea(acommodation) {
    setSpot(acommodation);
  }

  return (
    <>
      <section id="pages">
        <div className="container-page">
          <ul>
            <li>
              <Ticket
                areas={props.areas}
                cartReg={cartReg}
                cartVip={cartVip}
                addRegToCart={addRegToCart}
                addVipToCart={addVipToCart}
              />
            </li>
            <li>
              <Acommodation
                areas={props.areas}
                cartReg={cartReg}
                cartVip={cartVip}
                addRegToCart={addRegToCart}
                addVipToCart={addVipToCart}
                chosenArea={props.chosenArea}
              />
            </li>
            <li>
              <Personal cartReg={cartReg} cartVip={cartVip} />
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
            cartReg={cartReg}
            cartVip={cartVip}
            addRegToCart={addRegToCart}
            addVipToCart={addVipToCart}
            ticketsQuantity={props.ticketsQuantity}
            spot={props.spot}
            totalPrice={totalPrice}
            subtotalPrice={subtotalPrice}
            totalReg={totalReg}
            totalVip={totalVip}
          />
        </div>
      </section>
    </>
  );
}

// Fetching areas from Available spots
export async function getStaticProps() {
  /* This function runs before the component bands is render
  - fetch the data
  - wait for that data
  - once we have the data, it put into the component
  - so the component can render with that data inside it  */
  // const res = await fetch("https://bitter-moon-5524.fly.dev/available-spots");
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
