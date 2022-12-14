import { useState, useEffect } from "react";
import Head from "next/head";
import Herosection from "../components/Herosection";
import Lineup from "../components/Lineup";
import styles from "../styles/Home.module.css";
import Tickets from "../components/Tickets";
import Accomodation from "../components/Accomodation";
import Basket from "../components/Basket";

export default function Home(props) {
  const [availableTickets, setTickets] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/available-spots");
      const data = await res.json();
      setTickets(data);
    }
    getData();
  }, []);

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
        <Tickets />
        <Accomodation />
      </div>
      <Basket availableTickets={availableTickets}></Basket>
    </>
  );
}
export async function getServerSideProps() {
  const [scheduleRes, bandsRes] = await Promise.all([
    fetch(`http://localhost:8080/schedule`),

    //fetch("https://rough-snowflake-4981.fly.dev/schedule"), //karina URL:  (just in case)

    fetch(`http://localhost:8080/bands#`),

    //fetch("https://rough-snowflake-4981.fly.dev/bands") //karina URL:  (just in case)
    fetch(`http://localhost:8080/available-spots`),
  ]);

  const [schedule, bands] = await Promise.all([scheduleRes.json(), bandsRes.json()]);

  return { props: { schedule, bands, areas } };
}
// className="container-page"

// className="wrapper-forms"
