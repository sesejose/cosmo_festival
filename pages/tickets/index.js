import React from "react";
import { useState, useEffect, useRef } from "react";
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
  // const [spot, setSpot] = useState();
  const [spot, setAcommodation] = useState();
  // Then achange the state according to event
  console.log(totalPrice);

  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [status5, setStatus5] = useState(false);
  const ticketsQuantity = cartReg.amount + cartVip.amount;
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
  // console.log("Tickets", ticketsQuantity);
  // console.log("Area1:", area1);
  // console.log("Area2:", area2);
  // console.log("Area3:", area3);
  // console.log("Area4:", area4);
  // console.log("Area5:", area5);

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
    console.log(ticketsQuantity);
  }
  function defineAcommodation(spot) {
    setAcommodation(spot);
    console.log(spot);
    // chosenArea(acommodation);
  }
  // const [vipTicketsQuantity, setVipTicketsQuantity] = useState();
  // const [regTicketsQuantity, setRegTicketsQuantity] = useState();

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
  // function regTicketsQuantityCount(totalReg) {
  //   setRegTicketsQuantity(totalReg);
  // }
  // function vipTicketsQuantityCount(totalVip) {
  //   setVipTicketsQuantity(totalVip);
  // }
  // make the steps
  //
  // Fetching tickets from Supabase (Tickets table)
  useEffect(() => {
    async function getData() {
      const url = "https://udfchraccrfladlsvbzh.supabase.co/rest/v1/tickets";
      const headers = {
        "Content-Type": "application/jsonS",
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
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
  // useEffect(() => {
  //   async function getData() {
  //     // const res = await fetch("https://bitter-moon-5524.fly.dev/available-spots");
  //     const res = await fetch("http://localhost:8080/available-spots");
  //     const data = await res.json();
  //     setAvailables(data);
  //     // console.log(data);
  //   }
  //   getData();
  // }, []);

  // Acommodation
  // This function returns with a parameter (the area selected)
  // function chosenArea(acommodation) {
  //   setSpot(acommodation);
  // }
  const fixedGreenCampingPrice = 249;
  const priceInclGreen = totalPrice + fixedCampingPrice;
  const [reserveID, setReserveID] = useState({});
  const regPrice = regCart.price;
  const regAmount = regCart.amount;
  return (
    <>
      <section id="pages">
        <div className="container-page">
          <Ticket
            areas={props.areas}
            cartReg={cartReg}
            cartVip={cartVip}
            addRegToCart={addRegToCart}
            addVipToCart={addVipToCart}
            checkAvailability={checkAvailability}
            spot={spot}
            totalPrice={totalPrice}
            fixedGreenCampingPrice={fixedGreenCampingPrice}
            priceInclGreen={priceInclGreen}
            // regTicketsQuantityCount={regTicketsQuantityCount}
            // vipTicketsQuantityCount={vipTicketsQuantityCount}
          />

          <Acommodation
            areas={props.areas}
            cartReg={cartReg}
            cartVip={cartVip}
            addRegToCart={addRegToCart}
            addVipToCart={addVipToCart}
            spot={spot}
            defineAcommodation={defineAcommodation}
            totalPrice={totalPrice}
            subtotalPrice={subtotalPrice}
            totalReg={totalReg}
            totalVip={totalVip}
            setReserveID={setReserveID}
            reserveID={reserveID}
            // regTicketsQuantityCount={regTicketsQuantityCount}
            // vipTicketsQuantityCount={vipTicketsQuantityCount}
          />

          <Personal
            cartReg={cartReg}
            cartVip={cartVip}
            areas={props.areas}
            addRegToCart={addRegToCart}
            addVipToCart={addVipToCart}
            spot={spot}
            totalPrice={totalPrice}
            subtotalPrice={subtotalPrice}
            totalReg={totalReg}
            totalVip={totalVip}
            setReserveID={setReserveID}
            reserveID={reserveID}
            // chosenArea={chosenArea}
            // regTicketsQuantityCount={regTicketsQuantityCount}
            // vipTicketsQuantityCount={vipTicketsQuantityCount}
          />

          <Payment
            checkAvailability={checkAvailability}
            areas={props.areas}
            cartReg={cartReg}
            cartVip={cartVip}
            addRegToCart={addRegToCart}
            addVipToCart={addVipToCart}
            spot={spot}
            defineAcommodation={defineAcommodation}
            totalPrice={totalPrice}
            subtotalPrice={subtotalPrice}
            totalReg={totalReg}
            totalVip={totalVip}
          />
        </div>

        <Basket
          areas={props.areas}
          cartReg={cartReg}
          regPrice={regPrice}
          regAmount={regAmount}
          cartVip={cartVip}
          addRegToCart={addRegToCart}
          addVipToCart={addVipToCart}
          // regTicketsQuantityCount={regTicketsQuantityCount}
          // vipTicketsQuantityCount={vipTicketsQuantityCount}
          spot={spot}
          totalPrice={totalPrice}
          subtotalPrice={subtotalPrice}
          totalReg={totalReg}
          totalVip={totalVip}
          fixedCampingPrice={fixedCampingPrice}
        />
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
  const res = await fetch("https://bitter-moon-5524.fly.dev/available-spots");
  //const res = await fetch("http://localhost:8080/available-spots");
  const data = await res.json();

  /* - we return a value for this function 
- that value is got we have a props property we give the property a value
- that value is going to be an object 
- inside the objecint to be an object so we can past all the properties that we need*/
  return {
    props: { areas: data },
  };
}
