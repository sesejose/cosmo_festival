import React from "react";

function Owner(props) {
  function openPersInfo() {
    const infopanel = document.querySelectorAll("legend");
    console.log("btn");
    //   if (infopanel.classList === "hidden") {
    //     infopanel.classList.remove("hidden");
    //   } else if (infopanel.classList != "hidden") {
    //     infopanel.classList.add("hidden");
    //   }
  }
  return (
    <>
      <form>
        <fieldset>
          <h2 onClick={openPersInfo} className="turquoise">
            Person
          </h2>
          <div>
            <legend>
              <label htmlFor={`full_name_ticketholder_${props.index}`} className="turquoise">
                Full name*
                <input
                  type="text"
                  name={`full_name_ticketholder_${props.index}`}
                  id={`full_name_ticketholder_${props.index}`}
                  placeholder="Full name"
                  required
                  autoComplete="true"
                />
              </label>
              <span className="error-message">Enter a valid value</span>
              <label htmlFor={`email_ticketholder_${props.index}`} className="turquoise">
                Email*
                <input
                  type="email"
                  name={`email_ticketholder_${props.index}`}
                  id={`email_ticketholder_${props.index}`}
                  placeholder="Email address"
                  required
                />
              </label>
              <span className="error-message">Enter a valid value</span>

              <label htmlFor={`dob_ticketholder_${props.index}`} className="turquoise">
                Date of birth*
                <input
                  type="date"
                  name={`dob_ticketholder_${props.index}`}
                  id={`dob_ticketholder_${props.index}`}
                  placeholder="Date of birth (DD/MM/YY)"
                  required
                />
              </label>
              <span className="error-message">Enter a valid value</span>

              <label htmlFor={`id_ticketholder_${props.index}`} className="turquoise">
                ID number*
                <input
                  type="text"
                  name={`id_ticketholder_${props.index}`}
                  id={`id_ticketholder_${props.index}`}
                  placeholder="123456AB"
                  required
                />
              </label>
              <span className="error-message">Enter a valid value</span>
            </legend>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default Owner;
