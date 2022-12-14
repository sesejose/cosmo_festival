import React from "react";

function Basket(regTickets, vipTickets) {
  const quaReg = regTickets;
  const quaVip = vipTickets;
  showTickets();

  async function showTickets() {
    console.log(quaReg);
    // const data = await getTickets();
    // Await: It makes the code wait until the promise returns a result.
    // console.log(data);
    // data.forEach((element) => {
    //   const template = document.querySelector("#ticket-template").content;
    //   const copy = template.cloneNode(true);
    //   copy.querySelector(".type").textContent = element.type;
    //   copy.querySelector(".price").textContent = element.price;
    //   const button = copy.querySelector("btn-remove");
    //   button.addEventListener("click", () => {
    //     deleteTickets(element.id);
    //   });
    //   document.querySelector(".post-text-container").appendChild(copy);
    // });
  }

  // function deleteTickets() {
  //   console.log(props.id);
  // }

  return (
    <>
      <section id="basket">
        <div className="basket-container">
          <h2 className="turquoise">Summary order</h2>
          <div>
            <h4 className="white">Time to complete the order:</h4>
            <p className="turuoise">0</p>
          </div>
          <div>
            <h4 className="white">Amount of tickets:</h4>
            <p className="turquoise">{{ regTickets } + { vipTickets }}</p>
          </div>

          {/* Template */}
          {/* <template id="ticket-template">
            <div className="post-text-container">
              <h3 className="turquoise type">Regular Pass</h3>
              <h4 className="white price">Ticket price: DKK 799</h4>
            </div>
            <button className="btn-remove">Remove</button>
          </template> */}
          {/* Template ends */}

          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Regular Pass</h3>
              <h4 className="white">Ticket price: DKK 799</h4>
            </div>
            <button className="btn-remove">Remove</button>
          </div>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Regular Pass</h3>
              <h4 className="white">Ticket price: DKK 799</h4>
            </div>
            <button className="btn-remove">Remove</button>
          </div>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Regular Pass</h3>
              <h4 className="white">Ticket price: DKK 799</h4>
            </div>
            <button className="btn-remove">Remove</button>
          </div>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Regular Pass</h3>
              <h4 className="white">Ticket price: DKK 799</h4>
            </div>
            <button className="btn-remove">Remove</button>
          </div>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">VIP Pass</h3>
              <h4 className="white">Ticket price: DKK 799</h4>
            </div>
            <button className="btn-remove">Remove</button>
          </div>
          <hr></hr>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Acommodation</h3>
              <h4 className="white">Nilfheim</h4>
            </div>
          </div>
          <hr></hr>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Booking camping spot</h3>
              <h4 className="white">Yes</h4>
            </div>
          </div>
          <hr></hr>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Tent 2 persons</h3>
              <h4 className="white">Tent 2 pers. price: DKK 299</h4>
            </div>
            <button className="btn-remove">Remove</button>
          </div>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Tent 2 persons</h3>
              <h4 className="white">Tent 3 pers. price: DKK 399</h4>
            </div>
            <button className="btn-remove">Remove</button>
          </div>
          <div className="posts">
            <div className="post-text-container">
              <h3 className="turquoise">Ticket owner 1</h3>
              <h4 className="white">Fullname</h4>
              <h4 className="white">ID</h4>
              <h4 className="white">email@mail.com</h4>
            </div>
          </div>

          <hr></hr>
          <div className="sub-total-container">
            <div className="flex-row-space-around">
              <p className="white">Subtotal</p>
              <p className="white">DKK 4.995</p>
            </div>
            <div className="flex-row-space-around">
              <h3 className="white">Total</h3>
              <h3 className="white">DKK 4.995</h3>
            </div>
          </div>
          <button className="btn-main">PAY</button>
        </div>
      </section>
    </>
  );
}

export default Basket;
