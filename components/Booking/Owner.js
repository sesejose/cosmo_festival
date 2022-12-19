import React from "react";

function Owner(props) {
  return (
    <>
      <form>
        <fieldset>
          <h2 className="turquoise">Person</h2>
          <div>
            <legend>
              <label htmlFor="name" className="turquoise">
                Full name
                <input
                  type="text"
                  name="name"
                  placeholder="Insert your full name"
                  minlength="2"
                  required
                  className="input-text"
                />
              </label>
              <span className="error-message">Enter a valid value</span>
              <label htmlFor="email" className="turquoise">
                Email
                <input type="email" name="email" placeholder="Email address" required className="input-text" />
              </label>
              <span className="error-message">Enter a valid value</span>

              <label htmlFor="date" className="turquoise">
                Date of birth
                <input type="date" name="date" placeholder="Date of birth (DD/MM/YY)" required className="input-text" />
              </label>
              <span className="error-message">Enter a valid value</span>

              <label htmlFor="id-number" className="turquoise">
                ID number
                <input
                  type="text"
                  name="id-number"
                  id="id-number"
                  placeholder="123456AB"
                  required
                  className="input-text"
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
