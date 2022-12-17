import React, { useState } from "react";
// import Basket from "../../components/Booking/Basket";
import ModalAcommodation from "../../components/elements/ModalAcommodation";
import { useEffect } from "react";

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

export default function Acommodation(props) {
  const [status1, setStatus1] = useState(false);
  const [status2, setStatus2] = useState(false);
  const [status3, setStatus3] = useState(false);
  const [status4, setStatus4] = useState(false);
  const [status5, setStatus5] = useState(false);
  // And then onChange I run this code:
  // setIsChecked(!isDisbaled);
  // So as I understand it on the first change it should already update the state to true but instead it stays false on the first check and only on the second one it switches to true and then to false etc.

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
  console.log("Tickets", ticketsQuantity);
  console.log("Area1:", area1);
  console.log("Area2:", area2);
  console.log("Area3:", area3);
  console.log("Area4:", area4);
  console.log("Area5:", area5);

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

  // function disablebutton(e) {
  //   const totalTickets = 100;
  //   if (totalTickets > area1) {
  //     return setDisabled(true);

  //     //   // document.querySelector("#svartheim").disabled = true;
  //     //   // console.log("area1 disabled");
  //   }
  // }
  return (
    <>
      <section id="acommodation">
        {/* <div className="container-page"> */}
        <div className="wrapper-forms">
          <div className="forms-intro-text">
            <h1 className="turquoise text-center">Acommodation</h1>
            <p className="text-center">Select the area in the camping where you wanna set your tent/s.</p>
            <button className="btn-acommodation" onClick={displayAcommodation}>
              Learn more here
            </button>
          </div>
          <div className="map-container">
            <div className="camping-areas-row">
              <h3 className="purple">Stages area</h3>
            </div>
            <div className="map-stages-container">
              <div className="map-stage">
                <h4 className="purple">MIDGARD</h4>
              </div>
              <div className="map-stage">
                <h4 className="purple">VANAHEIM</h4>
              </div>
              <div className="map-stage">
                <h4 className="purple">JOTUNHEIM</h4>
              </div>
            </div>

            <div className="camping-areas-container">
              <div className="camping-areas-row">
                <div className="camping-area">
                  <label className="camping-areas-label" forhtml="camping-area">
                    <div className="green-1">Svartheim</div>
                  </label>
                  <input type="radio" id="svartheim" name="camping-area" value="1" className="radio-input" defaultChecked onChange={checkAvailability}></input>
                </div>

                <div className="camping-area">
                  <label className="camping-areas-label" forhtml="camping-area">
                    <div className="green-1">Nilfheim</div>
                  </label>
                  <input type="radio" id="nilfheim" name="camping-area" value="2" className="radio-input" onChange={checkAvailability}></input>
                </div>
              </div>

              <div className="camping-areas-row">
                <h3 className="green-1">Camping area</h3>
              </div>

              <div className="camping-areas-row">
                <div className="camping-area">
                  <label className="camping-areas-label" forhtml="camping-area">
                    <div className="green-1">Helheim</div>
                  </label>
                  <input type="radio" id="helheim" name="camping-area" value="2" className="radio-input" onChange={checkAvailability}></input>
                </div>

                <div className="camping-area">
                  <label className="camping-areas-label" forhtml="camping-area">
                    <div className="green-1">Muspelheim</div>
                  </label>
                  <input type="radio" id="muspelheim" name="camping-area" value="2" className="radio-input" onChange={checkAvailability}></input>
                </div>

                <div className="camping-area">
                  <label className="camping-areas-label" forhtml="camping-area">
                    <div className="green-1">Alfheim</div>
                  </label>
                  <input type="radio" id="alfheim" name="camping-area" value="2" className="radio-input" onChange={checkAvailability}></input>
                </div>
              </div>
            </div>

            <div className="map-green-camping">
              <div className="yellow">
                <p>Green camping</p>
              </div>
              {/* <label className="camping-areas-label" forhtml="green-camping"> */}
              {/* </label> */}
              {/* <input type="radio" id="green-camping" name="green-camping" value="1" className="radio-input" checked></input> */}
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
      {/* <Basket getTotal={getTotal}></Basket> */}

      {/* <!-- Modal acommodation  --> */}

      <div id="modal-acommodation" className="hiden">
        <div className="modal-acommodation">
          <div className="close-modal" onClick={hideAcommodation}>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>

          <div className="modal-container">
            <ModalAcommodation></ModalAcommodation>
          </div>
        </div>
      </div>
    </>
  );
}

///////////////////////////////////////

function displayAcommodation() {
  document.querySelector("#modal-acommodation").classList.remove("hiden");
}
function hideAcommodation() {
  document.querySelector("#modal-acommodation").classList.add("hiden");
}
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
