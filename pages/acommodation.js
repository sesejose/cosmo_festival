import React from "react";
import Basket from "../components/Basket";
import ModalAcommodation from "../components/ModalAcommodation";

function Acommodation() {
  return (
    <>
      <section id="acommodation">
        <div className="container-page">
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
                    <input type="radio" id="svartheim" name="camping-area" value="1" className="radio-input" defaultChecked></input>
                  </div>

                  <div className="camping-area">
                    <label className="camping-areas-label" forhtml="camping-area">
                      <div className="green-1">Nilfheim</div>
                    </label>
                    <input type="radio" id="nilfheim" name="camping-area" value="2" className="radio-input"></input>
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
                    <input type="radio" id="nilfheim" name="camping-area" value="2" className="radio-input"></input>
                  </div>

                  <div className="camping-area">
                    <label className="camping-areas-label" forhtml="camping-area">
                      <div className="green-1">Muspelheim</div>
                    </label>
                    <input type="radio" id="nilfheim" name="camping-area" value="2" className="radio-input"></input>
                  </div>

                  <div className="camping-area">
                    <label className="camping-areas-label" forhtml="camping-area">
                      <div className="green-1">Alfheim</div>
                    </label>
                    <input type="radio" id="nilfheim" name="camping-area" value="2" className="radio-input"></input>
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
        </div>
      </section>
      <Basket></Basket>

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

export default Acommodation;

function displayAcommodation() {
  document.querySelector("#modal-acommodation").classList.remove("hiden");
}
function hideAcommodation() {
  document.querySelector("#modal-acommodation").classList.add("hiden");
}
