import React from "react";
import { useRef, useState } from "react";
import Payment from "./Payment";

function Owner(props) {
  const reserveSpot = useRef();
  const ticketsQuantity = props.cartReg.amount + props.cartVip.amount;
  const spotReserved = props.spot;
  console.log(spotReserved);

  // Then update / add it to the cart
  function reserveTicket(payload) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    fetch("http://localhost:8080/reserve-spot", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }

  // timeout 300000
  // console.log(reserveTicket);

  async function submit(e) {
    e.preventDefault();
    reserveTicket({
      area: spotReserved,
      amount: ticketsQuantity,
    });
  }

  return (
    <>
      <form onSubmit={submit} ref={reserveSpot}>
        <fieldset>
          <div>
            <legend>{props.index === 0 ? "Your personal information" : `Guest ${props.index} information`}</legend>
            <label htmlFor={`full_name_ticketholder_${props.index}`} className="turquoise">
              Full name
              <input type="text" name="name" id={`full_name_ticketholder_${props.index}`} placeholder="Insert your full name" minLength="2" required className="input-text" />
            </label>
            <span className="error-message">Enter a valid value</span>
            <label htmlFor={`email_ticketholder_${props.index}`} className="turquoise">
              Email
              <input type="email" name="email" id={`email_ticketholder_${props.index}`} placeholder="Email address" required className="input-text" />
            </label>
            <span className="error-message">Enter a valid value</span>

            <label htmlFor={`dob_ticketholder_${props.index}`} className="turquoise">
              Date of birth
              <input type="date" name="dob" id={`dob_ticketholder_${props.index}`} placeholder="Date of birth (DD/MM/YY)" max="2004-12-01" required className="input-text" />
            </label>
            <span className="error-message">Enter a valid value</span>

            <label htmlFor={`id_ticketholder_${props.index}`} className="turquoise">
              ID number
              <input type="text" name="identification" id={`id_ticketholder_${props.index}`} placeholder="123456AB" required className="input-text" />
            </label>
            <span className="error-message">Enter a valid value</span>
          </div>
        </fieldset>

        <button className="btn-main" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default Owner;
