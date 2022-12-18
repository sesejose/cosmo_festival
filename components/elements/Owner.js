import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

function Owner(props) {
  return (
    <>
      <form>
        <fieldset>
          <legend>
            <label htmlFor="name">
              Full name
              <input type="text" placeholder="Full name" />
            </label>

            <label htmlFor="email">
              Email
              <input type="email" placeholder="Email" />
            </label>
            <label htmlFor="dateofbirth">
              Date of birth
              <input type="date" placeholder="Date of birth (DD/MM/YY)" />
            </label>
            <label htmlFor="id">
              ID
              <input type="text" placeholder="123456AB" />
            </label>
          </legend>
        </fieldset>
      </form>
      {/* <Accordion className="regAccordion">
        <AccordionItem id="one" className="hidden1">
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 1</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="form-group">
              <div className="field-group">
                <div className="field">
                  <label forhtml="name">Full name</label>
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
                  <label forhtml="email">Email</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Insert your email"
                    minLength="2"
                    className="input-text"
                    required
                  />
                  <span className="error-message">Enter a valid value</span>
                </div>
              </div>
              <div className="field-group">
                <div className="field">
                  <label forhtml="age">Age</label>
                  <input
                    type="text"
                    name="age"
                    id="age"
                    placeholder="Insert your age"
                    minLength="2"
                    className="input-text"
                    required
                  />
                  <span className="error-message">Enter a valid value</span>
                </div>
                <div className="field">
                  <label forhtml="id">ID</label>
                  <input
                    type="text"
                    name="id"
                    id="id"
                    placeholder="Insert your ID"
                    minLength="2"
                    className="input-text"
                    required
                  />
                  <span className="error-message">Enter a valid value</span>
                </div>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem id="two" className="hidden1">
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 2</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Here comes form group</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem id="three" className="hidden1">
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 3</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Here comes form group</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem id="four" className="hidden1">
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 4</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Here comes form group</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem id="five" className="hidden1">
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 5</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Here comes form group</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem id="six" className="hidden1">
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 6</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Here comes form group</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem id="seven" className="hidden1">
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 7</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Here comes form group</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem id="eight" className="hidden1">
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 8</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Here comes form group</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem id="nine" className="hidden1">
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 9</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Here comes form group</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion> */}
    </>
  );
}

export default Owner;
