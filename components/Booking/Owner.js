import React from "react";
import { useRef, useState } from "react";
import Payment from "./Payment";

function Owner(props) {
  return (
    <>
      <form>
        <fieldset>
          <div>
            <legend>{props.index === 0 ? "Your personal information" : `Guest ${props.index} information`}</legend>
            <label htmlFor={`full_name_ticketholder_${props.index}`} className="turquoise">
              Full name
              <input
                type="text"
                name="name"
                id={`full_name_ticketholder_${props.index}`}
                placeholder="Insert your full name"
                minLength="2"
                required
                className="input-text"
              />
            </label>
            <span className="error-message">Enter a valid value</span>
            <label htmlFor={`email_ticketholder_${props.index}`} className="turquoise">
              Email
              <input
                type="email"
                name="email"
                id={`email_ticketholder_${props.index}`}
                placeholder="Email address"
                required
                className="input-text"
              />
            </label>
            <span className="error-message">Enter a valid value</span>

            <label htmlFor={`dob_ticketholder_${props.index}`} className="turquoise">
              Date of birth
              <input
                type="date"
                name="dob"
                id={`dob_ticketholder_${props.index}`}
                placeholder="Date of birth (DD/MM/YY)"
                max="2004-12-01"
                required
                className="input-text"
              />
            </label>
            <span className="error-message">Enter a valid value</span>

            <label htmlFor={`id_ticketholder_${props.index}`} className="turquoise">
              ID number
              <input
                type="text"
                name="identification"
                id={`id_ticketholder_${props.index}`}
                placeholder="123456AB"
                required
                className="input-text"
              />
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
