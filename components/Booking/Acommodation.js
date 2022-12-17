import React, { useState } from "react";
// import Basket from "../../components/Booking/Basket";
import ModalAcommodation from "../../components/elements/ModalAcommodation";
import { useEffect } from "react";

export default function Acommodation(props) {
  // First define the state
  const [acommodation, setAcommodation] = useState();
  // Then achange the state according to event
  function defineAcommodation(event) {
    setAcommodation(event.target.value);
    console.log(acommodation);
    props.chosenArea(acommodation);
  }
  // Then update / add it to the cart

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
                  <input type="radio" id="svartheim" name="camping-area" value="Area: Svartheim" className="radio-input" defaultChecked onClick={defineAcommodation}></input>
                </div>

                <div className="camping-area">
                  <label className="camping-areas-label" forhtml="camping-area">
                    <div className="green-1">Nilfheim</div>
                  </label>
                  <input type="radio" id="nilfheim" name="camping-area" value="Area: Nilfheim" className="radio-input" onClick={defineAcommodation}></input>
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
                  <input type="radio" id="helheim" name="camping-area" value="Area: Helheim" className="radio-input" onClick={defineAcommodation}></input>
                </div>

                <div className="camping-area">
                  <label className="camping-areas-label" forhtml="camping-area">
                    <div className="green-1">Muspelheim</div>
                  </label>
                  <input type="radio" id="muspelheim" name="camping-area" value="Area: Muspelheim" className="radio-input" onClick={defineAcommodation}></input>
                </div>

                <div className="camping-area">
                  <label className="camping-areas-label" forhtml="camping-area">
                    <div className="green-1">Alfheim</div>
                  </label>
                  <input type="radio" id="alfheim" name="camping-area" value="Area: Alfheim" className="radio-input" onClick={defineAcommodation}></input>
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
          <div>
            <button className="btn-main">NEXT</button>
          </div>
        </div>
        {/* </div> */}
      </section>

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
