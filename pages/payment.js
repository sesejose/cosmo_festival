import React from "react";
import Basket from "../components/Basket";

function payment() {
  return (
    <>
      <section id="payment">
        <div className="container-page">
          <div className="wrapper-forms">
            <div className="forms-intro-text">
              <h1 className="turquoise text-center">Pay with Credit Card</h1>
              <p className="text-center">Set you credit card</p>
            </div>
            <div className="credit-card-container">
              <div className="form-group">
                <div class="field-group">
                  <div className="field">
                    <label forHtml="card">Credit card</label>
                    <input type="text" name="card" id="card" placeholder="VISA / DANKORT" minlength="2" className="input-text" required />
                    <span class="error-message">Enter a valid value</span>
                  </div>
                </div>
                <div className="form-group">
                  <div class="field-group">
                    <div className="field">
                      <label forHtml="name">Full name</label>
                      <input type="text" name="name" id="name" placeholder="Insert your full name" minlength="2" className="input-text" required />
                      <span class="error-message">Enter a valid value</span>
                    </div>
                    <div className="field">
                      <label forHtml="card-number">Card number</label>
                      <input type="text" name="card-number" id="card-number" placeholder="Insert card number" minlength="2" className="input-text" required />
                      <span class="error-message">Enter a valid value</span>
                    </div>
                  </div>
                  <div class="field-group">
                    <div className="field">
                      <label forHtml="code">Check digits</label>
                      <input type="text" name="code" id="code" placeholder="Insert card check digits" minlength="2" className="input-text" required />
                      <span class="error-message">Enter a valid value</span>
                    </div>
                    <div className="field">
                      <label forHtml="date">Expiration date</label>
                      <input type="date" name="date" id="date" placeholder="Insert expiration date" minlength="2" className="input-text" required />
                      <span class="error-message">Enter a valid value</span>
                    </div>
                  </div>
                </div>
              </div>
              <button className="btn-main">PAY</button>
            </div>
          </div>
        </div>
      </section>
      <Basket></Basket>
    </>
  );
}

export default payment;
