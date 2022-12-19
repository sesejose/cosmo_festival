import React, { useContext } from "react";
// import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import { useState, useRef } from "react";
import Owner from "./Owner";
// import Basket from "../../components/Booking/Basket";
// import "react-accessible-accordion/dist/fancy-example.css";

export default function Personal(props) {
  function displayRegInfo() {
    let personalInfosReg = [];
    for (let i = 0; i < props.cartReg.amount; i++) {
      personalInfosReg.push(<Owner index={i} key={i} />);
    }
    return personalInfosReg;
  }
  function displayVipInfo() {
    let personalInfosVip = [];
    for (let i = 0; i < props.cartVip.amount; i++) {
      personalInfosVip.push(<Owner index={i} key={i} />);
    }
    return personalInfosVip;
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
              <div className="regular-container">
                <h2 className="turquoise"> Regular pass(es)</h2>
                <div className="personal-form-reg">{displayRegInfo()}</div>
              </div>
              <div>
                <h2 className="turquoise">VIP pass(es)</h2>
                <div className="personal-form-vip">{displayVipInfo()}</div>
              </div>
            </div>
            <hr></hr>

            <button className="btn-main">NEXT</button>
          </div>
        </div>
        {/* </div> */}
      </section>
      {/* <Basket></Basket> */}
    </>
  );
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
