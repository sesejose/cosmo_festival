import React, { useContext } from "react";
// import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import { useState } from "react";
import Owner from "../elements/Owner";
// import Basket from "../../components/Booking/Basket";
// import "react-accessible-accordion/dist/fancy-example.css";

function personal(props) {
  // Define an state for the array of tickets

  // Map loop trough the array to see
  // Once we have the ticket spread, get amount
  // Define state to one ticket owner (Regular Pass)
  // Define state to one ticket owner (Regular VIP)
  // Get the quantity of tickets from index
  // Define a new state for those two /(Reg and Vip) and make a copies according to the quantity of tickets of each one

  // const [formReg, setFormReg] = useState

  // function ownerReg(){
  //   setFormReg(

  //   )
  // }
  function displayRegInfo() {
    let personalinfosReg = [];
    for (let e = 0; e < props.cartReg.amount; e++) {
      personalinfosReg.push(<Owner index={e} key={e} />);
    }
    return personalinfosReg;
  }
  function displayVipInfo() {
    let personalinfosVip = [];
    for (let e = 0; e < props.cartVip.amount; e++) {
      personalinfosVip.push(<Owner index={e} key={e} />);
    }
    return personalinfosVip;
  }
  return (
    <>
      <section id="personal">
        {/* <div className="container-page"> */}
        <div className="wrapper-forms">
          <div className="forms-intro-text">
            <h1 className="turquoise text-center">Personal information</h1>
            <p className="text-center">Enter your personal information</p>
            <p className="text-center">
              Note! The information provided is how we can identify you as ticket owner so make sure its correct!
            </p>
          </div>
          <div className="owners-container">
            <div className="personal-form">
              <div>
                <h2 className="turquoise">Regular passes</h2>
                <div className="personal-form-reg">{displayRegInfo()}</div>
              </div>
              <div>
                <h2 className="turquoise">VIP passes</h2>
                <div className="personal-form-vip">{displayVipInfo()}</div>
              </div>
            </div>
            <hr></hr>
            <div className="personal-camping-options">
              <diV className="personal-green-camping">
                <input type="checkbox" name="check-green-camping" placeholder="0"></input>
                <label htmlFor="check-green-camping"></label>
                <div>
                  <h3 className="pink">Green Camping</h3>
                  <p>Help the enviroment by choosing our green camping option.</p>
                </div>
              </diV>

              <div className="personal-rent">
                <input type="checkbox" name="check-rent-tent" id="check-rent-tent" onClick={check}></input>
                <label htmlFor="check-rent-tent"></label>
                <div>
                  <h3 className="pink">Rent a tent and get it all set up by the staff</h3>
                  <p>Text description</p>
                </div>
              </div>

              <div id="tents-container" className="tents-container hidden">
                <form>
                  <label htmlFor="tents-quantity"></label>
                  <h3 className="pink">Tent (2 persons) DKK 299,-</h3>
                  <div className="flex-row-space-around">
                    <input
                      type="number"
                      name="tents-quantity"
                      id="tent2-quantity"
                      min="0"
                      placeholder="0"
                      disabled
                      className="input-number-tents"
                      onChange={displayQuantityTent2}
                    ></input>
                    <h3 className="tent2">x</h3>
                    <h3 className="white">DKK 299,-</h3>
                    <h3 className="white">Total:</h3>
                    <h3 className="totalTent2">0</h3>
                  </div>
                </form>
                <form>
                  <label htmlFor="tents-quantity"></label>
                  <h3 className="pink">Tent (3 persons) DKK 399,-</h3>
                  <div className="flex-row-space-around">
                    <input
                      type="number"
                      name="tents-quantity"
                      id="tent3-quantity"
                      min="0"
                      placeholder="0"
                      disabled
                      className="input-number-tents"
                      onChange={displayQuantityTent3}
                    ></input>
                    <h3 className="tent3">x</h3>
                    <h3 className="white">DKK 399,-</h3>
                    <h3 className="white">Total:</h3>
                    <h3 className="totalTent3">0</h3>
                  </div>
                </form>
              </div>

              <div className="spot-container">
                <input type="checkbox" name="check-spot" defaultChecked required></input>
                <label htmlFor="check-spot"></label>
                <div>
                  <h3 className="pink">Booking camping spot (required)</h3>
                  <p>Fixed booking DKK 99,-</p>
                </div>
              </div>
            </div>
            <button className="btn-main">NEXT</button>
          </div>
        </div>
        {/* </div> */}
      </section>
      {/* <Basket></Basket> */}
    </>
  );
}

export default personal;

function check() {
  const tents = document.getElementById("tents-container");
  if (document.getElementById("check-rent-tent").value != "") {
    document.getElementById("tent2-quantity").disabled = false;
    document.getElementById("tent3-quantity").disabled = false;
    tents.style.display = "flex";
  } else {
    document.getElementById("tent2-quantity").disabled = true;
    document.getElementById("tent3-quantity").disabled = true;
    tents.style.display = "none";
  }
  if (document.getElementById("check-rent-tent").checked === false) {
    tents.style.display = "none";
  }
}

function displayQuantityTent2() {
  const quantity = document.querySelector(".tent2");
  const tents = document.querySelector("#tent2-quantity");
  quantity.textContent = tents.value + "x";
  quantity.classList.add("turquoise");
  // Calculating the total
  const total = tents.value * 299;
  document.querySelector(".totalTent2").textContent = "DKK " + total;
  document.querySelector(".totalTent2").classList.add("turquoise");
}

function displayQuantityTent3() {
  const quantity = document.querySelector(".tent3");
  const tents = document.querySelector("#tent3-quantity");
  quantity.textContent = tents.value + "x";
  quantity.classList.add("turquoise");
  // Calculating the total
  const total = tents.value * 399;
  document.querySelector(".totalTent3").textContent = "DKK " + total;
  document.querySelector(".totalTent3").classList.add("turquoise");
}

// let setUpPrice
// let tentSize = ""

// function step2(props) {
//   // const ticketAmount = amount of requested tickets from previous step
//   const tickets = props.totalTickets;
//   // Optional, pay to have the crew set up X tents for you.
// // 2 person tent (including the tent) 299,-
// // 3 person tent (including the tent) 399,-
// // The number of tents must match the number of people in the group (number of tickets).
// if (tickets <= 2) {
//   setUpPrice = 299
//   tentSize = "2-person tent"
// } else if (tickets === 3) {
//   setUpPrice = 399
//   tentSize = "3-person tent"
// } else if (tickets === 4) {
//   setUpPrice = 598
//   tentSize = "2 x 2-person tents"
// } else if (tickets === 5) {
//   setUpPrice = 798;
//   tentSize = "1 x 2 person tent & 1 x 3 person tent"
// } else {
//   setUpPrice = 299;
//   tentSize = "2-person tent"
// }
