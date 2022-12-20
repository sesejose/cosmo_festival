import React from "react";
import { useRef } from "react";

function Owner(props) {
  const theForm = useRef();
  const fullName = useRef(null);
  const email = useRef(null);
  const dob = useRef(null);
  const identification = useRef(null);
  // function validateFormPersonal() {
  //   console.log("submit fromS");
  // }
  async function submit(e) {
    e.preventDefault();
    const response = await insertOrder({
      name: theForm.current.elements.fullName.value,
      email: theForm.current.elements.email.value,
      dob: theForm.current.elements.dob.value,
      dob: theForm.current.elements.identification.value,
    });
    if (response && response.length) {
      setPaymentCompleted(true);
    }
  }
  async function insertOrder() {
    const url = "https://udfchraccrfladlsvbzh.supabase.co";
    const res = await fetch(url + "/rest/v1/cosmo_festival", {
      method: "PUT",
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkZmNocmFjY3JmbGFkbHN2YnpoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA4NzQzODEsImV4cCI6MTk4NjQ1MDM4MX0.0eTW-TRibvc-FFW6XlCaTEfX52g-3SsrjMh3t7XXvIw",
        Prefer: "return=minimal",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    });

    return await res.json();
  }
  return (
    <>
      <form onSubmit={submit} ref={theForm}>
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
                ref={fullName}
              />
            </label>
            <span className="error-message">Enter a valid value</span>
            <label htmlFor={`email_ticketholder_${props.index}`} className="turquoise">
              Email
              <input
                type="email"
                name={`email_ticketholder_${props.index}`}
                id={`email_ticketholder_${props.index}`}
                placeholder="Email address"
                required
                className="input-text"
                ref={email}
              />
            </label>
            <span className="error-message">Enter a valid value</span>

            <label htmlFor={`dob_ticketholder_${props.index}`} className="turquoise">
              Date of birth
              <input
                type="date"
                name={`dob_ticketholder_${props.index}`}
                id={`dob_ticketholder_${props.index}`}
                placeholder="Date of birth (DD/MM/YY)"
                max="2004-12-01"
                required
                className="input-text"
                ref={dob}
              />
            </label>
            <span className="error-message">Enter a valid value</span>

            <label htmlFor={`id_ticketholder_${props.index}`} className="turquoise">
              ID number
              <input
                type="text"
                name={`id_ticketholder_${props.index}`}
                id={`id_ticketholder_${props.index}`}
                placeholder="123456AB"
                required
                className="input-text"
                ref={identification}
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
