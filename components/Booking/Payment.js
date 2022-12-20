import React from "react";
import { useState } from "react";
import { useRef } from "react";
// import Basket from "../../components/Booking/Basket";

export default function Payment() {
  /* Here the POST with the object as example from Insomnia

The form should be the same.

{
  "id": 4,
  "created_at": "2022-10-24T09:01:22.863572+00:00",
  "ticket": "Regular",
  "acommodation": "Svartheim",
  "fullname": "The NEXT generation",
  "email": "hello@mail.com",
  "age": 22,
  "cpr": 12345678,
  "green": true,
  "spot": true,
  "tent2": 2,
  "tent3": 1,
  "timeout": false,
  "tickets_amount": "5"
  }

*/

  // We use props to receive the what comes from Basket --> Cart
  const [paymentCompleted, setPaymentCompleted] = useState();
  // 13. When the page loads the payment is not completed (false) --> But when we have a response from the server we want to set the payment to complete.
  const theForm = useRef(null);
  // The const response await until the insertOrder fetchs the data, why? If it does not need the data to do the things.
  async function submit(e) {
    e.preventDefault();
    const response = await insertOrder({
      id: theForm.current.elements.id.value,
      created_at: theForm.current.elements.date.value,
      ticket: theForm.current.elements.ticket.value,
      acommodation: theForm.current.elements.ticket.value,
      fullname: theForm.current.elements.fullname.value,
      email: theForm.current.elements.email.value,
      green: theForm.current.elements.green.value,
      spot: theForm.current.elements.spot.value,
      tent: theForm.current.elements.tent.value,
    });
    console.log(response);
    // We do something with the response returned from insertOrder().
    if (response && response.length) {
      // If response is not null AND has a length asumme that is an array (How??)
      setPaymentCompleted(true);
      // 14. Now we have a variable that we can use in our UI.
    }
  }

  return (
    <>
      {/* 15. Ternary operator */}
      {paymentCompleted ? (
        <p>THANK YOU!!!</p>
      ) : (
        <section id="payment">
          <form onSubmit={submit} ref={theForm}>
            <div className="wrapper-forms">
              <div className="forms-intro-text">
                <h1 className="turquoise text-center">Pay with Credit Card</h1>
                <p className="text-center">Set you credit card</p>
              </div>
              <div className="credit-card-container">
                <div className="form-group">
                  <div className="field-group">
                    <div className="field">
                      <label htmlFor="card">Credit card</label>
                      <select name="cards" id="cards" placeholder="VISA / DANKORT" className="input-text" required>
                        <option value="volvo">VISA / DANKORT</option>
                        <option value="saab">MASTERCARD</option>
                        <option value="fiat">AMERICAN EXPRESS</option>
                        <option value="audi">OTHER</option>
                      </select>

                      <span className="error-message">Enter a valid value</span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="field-group">
                      <div className="field">
                        <label htmlFor="name">Full name</label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Insert your full name"
                          minLength="2"
                          className="input-text"
                          required
                        />
                        <span className="error-message">Enter a valid value</span>
                      </div>
                      <div className="field">
                        <label htmlFor="card-number">Card number</label>
                        <input
                          type="text"
                          name="card-number"
                          id="card-number"
                          placeholder="Insert card number"
                          minLength="8"
                          maxLength="11"
                          className="input-text"
                          required
                        />
                        <span className="error-message">Enter a valid value</span>
                      </div>
                    </div>
                    <div className="field-group">
                      <div className="field">
                        <label htmlFor="code">Check digits</label>
                        <input
                          type="text"
                          name="code"
                          id="code"
                          placeholder="Insert card check digits"
                          minLength="3"
                          maxLength="3"
                          className="input-text"
                          required
                        />
                        <span className="error-message">Enter a valid value</span>
                      </div>
                      <div className="field">
                        <label htmlFor="date">Expiration date</label>
                        <input
                          type="date"
                          name="date"
                          id="date"
                          placeholder="Insert expiration date"
                          className="input-text"
                          required
                        />
                        <span className="error-message">Enter a valid value</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn-main" onClick={submit}>
                  PAY
                </button>
              </div>
            </div>
          </form>
        </section>
      )}
    </>
  );
}

// 1. First we tell the form on submit call the isertOrder() function
// 2. We define that function in a new file. Db.js in modules.
// 3. insertOrder() fetch the data from the database and indicates the method 'POST'
// 4. Then we need to grab the form and for that we use { useRef }
// 5. In the tag form we add the atribute ref={}
// 6. Then we create a new variable (const theForm) for that at the begining of the CheckoutForm function.
// 7. That variable is === to a function useRef()
// 8. Now the <form> and the const theForm are now conected.
// 9. We have now access to the DOM element with .current theForm.current.elements.name.value
