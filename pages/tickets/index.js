import React from "react";
import Basket from "../../components/Booking/Basket";
import { useState, useEffect } from "react";
import Ticket from "../../components/Booking/Ticket";

// 1.  step we need to fetch the data for the areas ( how many available spaces are there in each individual areas)
// 2.  step check which area has enough space, by comparing it it total tickets in basket - what if there is none? => show sold out
// 3.  step
//
export default function TicketsPage(props) {
  const [tickets, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([
    ,//{tickettype:"x",
    //ticketprice:1111, amount:2}
  ]);
  function addToCart(data) {
    console.log("addToCart", data);
    // there are 2 options
    // we already have the ticket
    // we don't have the ticket yet
    // so 1. step is to figure out if we have IF we have the ticket
    // if (cart.find((entry) => entry.id == data.id)) {
    // }
  }
  // const  {Midgard: {mon,tue, wen, thu,fri,sat,sun}} = schedule
  // console.log(areas);
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
      // return data; // This returned "data/array" used in the showData();
      setData(tickets);
      console.log(tickets);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://bitter-moon-5524.fly.dev/available-spots");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    }
    getData();
  }, []);
  return (
    <>
      <Ticket areas={props.areas} tickets={tickets} addToCart={addToCart} />
      <Basket areas={props.areas} />
    </>
  );
}
export async function getStaticProps() {
  /* This function runs before the component bands is render
    - fetch the data
    - wait for that data
    - once we have the data, it put into the component
    - so the component can render with that data inside it  */

  const res = await fetch("https://bitter-moon-5524.fly.dev/available-spots");
  const data = await res.json();

  /* - we return a value for this function 
- that value is got we have a props property we give the property a value
- that value is going to be an object 
- inside the objecint to be an object so we can past all the properties that we need*/
  return {
    props: { areas: data },
  };
}
