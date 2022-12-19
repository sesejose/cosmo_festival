import { useState, useEffect } from "react";
import Head from "next/head";
import Herosection from "../components/elements/Herosection";
import Lineup from "../components/elements/Lineup";
import TIcketsmain from "../components/elements/TIcketsmain";
import Accomodation from "../components/elements/Accomodation";
import Basket from "../components/Booking/Basket";
import Days from "../components/elements/Days";

export default function Home({ areas, schedule, bands }) {
  //const { Midgard : {mon, tue , wen , thu , fri , sat ,sun}}= schedule;
  const [filter, setFilter] = useState("mon");
  // const [search, setSearch] = useState("");
  // const [genre, setGenre] = useState("");

  return (
    <>
      <Head>
        <title>The Festival | Home</title>
        <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
        <meta name="keywords" content="festival, music, exam, reactjs, nextjs"></meta>
      </Head>
      <div className="container-page">
        <Herosection />
        <Days setFilter={setFilter} />
        <Lineup bands={bands} schedule={schedule} filter={filter} />
        <TIcketsmain />
        <Accomodation />
      </div>
      <Basket areas={areas}></Basket>
    </>
  );
}
export async function getServerSideProps() {
  const [scheduleRes, bandsRes, areasRes] = await Promise.all([
    // fetch(`https://bitter-moon-5524.fly.dev/schedule`),
    fetch("http://localhost:8080/schedule"),

    // fetch(`https://bitter-moon-5524.fly.dev/bands`),
    fetch("http://localhost:8080/bands"),

    // fetch(`https://bitter-moon-5524.fly.dev/available-spots`),
    fetch("http://localhost:8080/bands"),
  ]);

  const [schedule, bands, areas] = await Promise.all([scheduleRes.json(), bandsRes.json(), areasRes.json()]);

  return { props: { schedule, bands, areas } };
}
