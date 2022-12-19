import Link from "next/link";
import Regtickets from "./Regticket";
import Viptickets from "./Vipticket";
import { useState } from "react";

export default function Tickets(props) {
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [status5, setStatus5] = useState(false);

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
  const ticketsQuantity = props.cartReg.amount + props.cartVip.amount;
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
  }
  function greenCamping() {
    // function to add the green camping price to total price
  }
  return (
    <>
      {/* Tickets */}
      <section id="tickets">
        {/* <div className="container-page"> */}
        <div className="wrapper-forms">
          <div className="forms-intro-text">
            <h1 className="turquoise text-center">Tickets</h1>
            <p className="text-center">Note! The limit per purchase is 9 tickets!</p>
          </div>
          <div className="tickets-container">
            <Regtickets key={props.cartReg.id} cartReg={props.cartReg} addRegToCart={props.addRegToCart} />
            <Viptickets key={props.cartVip.id} cartVip={props.cartVip} addVipToCart={props.addVipToCart} />
          </div>
          <div>
            <button className="btn-main" onClick={checkAvailability}>
              NEXT
            </button>
          </div>
        </div>
        <div className="personal-camping-options">
          <div className="spot-container">
            <div>
              <h3 className="pink"> Fixed booking fee</h3>
              <p>This fee is only once per purchase, no matter how many spots you are booking!</p>
              <p className="fee-aside">99,- DKK</p>
            </div>
          </div>
          <diV className="personal-green-camping">
            <input type="checkbox" name="check-green-camping" placeholder="0" onClick={greenCamping()}></input>
            <label htmlFor="check-green-camping"></label>
            <div>
              <h3 className="pink">Green Camping</h3>
              <p>If being evironmentally conscious is close to your heart choose our green camping offer.</p>
              <p className="fee-aside">249,- DKK</p>
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
              <h3 className="pink">Tent (2 persons) 299,- DKK</h3>
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
                <h3 className="white">299,- DKK</h3>
                <h3 className="white">Total:</h3>
                <h3 className="totalTent2">0</h3>
              </div>
            </form>
            <form>
              <label htmlFor="tents-quantity"></label>
              <h3 className="pink">Tent (3 persons) 399,- DKK</h3>
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
                <h3 className="white">399,- DKK</h3>
                <h3 className="white">Total:</h3>
                <h3 className="totalTent3">0</h3>
              </div>
            </form>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
}
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
