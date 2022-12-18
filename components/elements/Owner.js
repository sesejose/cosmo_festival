import React from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

function Owner(props) {
  return (
    <>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 1</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <div className="form-group">
              <div className="field-group">
                <div className="field">
                  <label forhtml="name">Full name</label>
                  <input type="text" name="name" id="name" placeholder="Insert your full name" minLength="2" className="input-text" required />
                  <span className="error-message">Enter a valid value</span>
                </div>
                <div className="field">
                  <label forhtml="email">Email</label>
                  <input type="text" name="email" id="email" placeholder="Insert your email" minLength="2" className="input-text" required />
                  <span className="error-message">Enter a valid value</span>
                </div>
              </div>
              <div className="field-group">
                <div className="field">
                  <label forhtml="age">Age</label>
                  <input type="text" name="age" id="age" placeholder="Insert your age" minLength="2" className="input-text" required />
                  <span className="error-message">Enter a valid value</span>
                </div>
                <div className="field">
                  <label forhtml="id">ID</label>
                  <input type="text" name="id" id="id" placeholder="Insert your ID" minLength="2" className="input-text" required />
                  <span className="error-message">Enter a valid value</span>
                </div>
              </div>
            </div>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 2</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Here comes form group</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 3</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Here comes form group</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 4</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Here comes form group</p>
          </AccordionItemPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Regular Pass owner 5</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Here comes form group</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default Owner;
