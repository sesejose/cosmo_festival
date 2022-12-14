import React from "react";
import Basket from "../../components/Booking/Basket";
import { useState, useEffect } from "react";
import Tickets from "../../components/Booking/Ticket";

// 1.  step we need to fetch the data for the areas ( how many available spaces are there in each individual areas)
// 2.  step check which area has enough space, by comparing it it total tickets in basket - what if there is none? => show sold out
// 3.  step
//
export default function TicketsPage(props) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([
    ,//{tickettype:"x",
    //ticketprice:1111, amount:2}
  ]);
  function addToCart(data) {
    console.log("addToCart", data);
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
      const res = await fetch("http://localhost:8080/available-spots");
      const data = await res.json();
      setProducts(data);
    }
    getData();
  }, []);
  return (
    <>
      <Tickets areas={props.areas} addToCart={addToCart} />
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
