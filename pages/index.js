import { useState, useEffect } from "react";
import Head from "next/head";
import Herosection from "../components/elements/Herosection";
import Lineup from "../components/elements/Lineup";
import TIcketsmain from "../components/elements/TIcketsmain";
import Accomodation from "../components/elements/Accomodation";
import Basket from "../components/Booking/Basket";

export default function Home({ areas, schedule, bands }) {
  // const [availableTickets, setTickets] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch("http://localhost:8080/available-spots");
  //     const data = await res.json();
  //     setTickets(data);
  //   }
  //   getData();
  // }, []);

  return (
    <>
      <Head>
        <title>The Festival | Home</title>
        <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
        <meta name="keywords" content="festival, music, exam, reactjs, nextjs"></meta>
      </Head>
      <div className="container-page">
        <Herosection />
        <Lineup />
        <TIcketsmain />
        <Accomodation />
      </div>
      <Basket areas={areas}></Basket>
    </>
  );
}
export async function getServerSideProps() {
  const [scheduleRes, bandsRes, areasRes] = await Promise.all([
    fetch(`https://bitter-moon-5524.fly.dev/schedule`),

    //fetch("https://rough-snowflake-4981.fly.dev/schedule"), //karina URL:  (just in case)

    fetch(`https://bitter-moon-5524.fly.dev/bands`),

    //fetch("https://rough-snowflake-4981.fly.dev/bands") //karina URL:  (just in case)
    fetch(`https://bitter-moon-5524.fly.dev/available-spots`),
  ]);

  const [schedule, bands, areas] = await Promise.all([scheduleRes.json(), bandsRes.json(), areasRes.json()]);

  return { props: { schedule, bands, areas } };
}
// className="container-page"

// className="wrapper-forms"
