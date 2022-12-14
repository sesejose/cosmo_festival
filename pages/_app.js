import Layout from "../components/Layout";
// import "../styles/globals.css";
import "../styles/style.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [bookingInfo, setBookingInfo] = useState({
    totalTickets: 0,
    regTicket: 0,
    vipTicket: 0,
    acommodation: "",
    // setting up tent
    spot: false,
    // green camping
    green: false,
    timedOut: false,
  });

  function setAccomodation(area) {
    setBookingInfo({ ...bookingInfo, acommodation: area });
  }
  function setallTickets(ticketSum, regSum, vipSum) {
    setBookingInfo({ ...bookingInfo, totalTickets: ticketSum, regTicket: regSum, vipTicket: vipSum });
  }
  function setExtras(tentSetup, greenTent) {
    setBookingInfo({ ...bookingInfo, spot: tentSetup, green: greenTent });
  }
  return (
    <Layout>
      <Component
        {...pageProps}
        bookingInfo={bookingInfo}
        setBookingInfo={setBookingInfo}
        setallTickets={setallTickets}
        setAccomodation={setAccomodation}
        setExtras={setExtras}
      />
    </Layout>
  );
}
// {
//   "id": 3,
//   "created_at": "2022-10-24T09:01:22.863572+00:00",
//   "ticket": "Regular",
//   "acommodation": "Svartheim",
//   "fullname": "The NEXT generation",
//   "email": "hello@mail.com",
//   "age": 22,
//   "cpr": 12345678,
//   "green": true,
//   "spot": true,
//   "tent2": 2,
//   "tent3": 1
//   }
export default MyApp;
