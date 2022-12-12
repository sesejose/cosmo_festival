import Head from "next/head";
import Herosection from "../components/Herosection";
import Lineup from "../components/Lineup";
import styles from "../styles/Home.module.css";
import Tickets from "../components/TIckets";
import Accomodation from "../components/Accomodation";
import Basket from "../components/Basket";

export default function Home({ bands }) {
  return (
    <>
      <Head>
        <title>The Festival | Home</title>
        <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
        <meta name="keywords" content="festival, music, exam, reactjs, nextjs"></meta>
      </Head>
      <div className="container-page">
        <Herosection />
        <Lineup bands={bands} />
        <Tickets />
        <Accomodation />
      </div>
      <Basket></Basket>
    </>
  );
}

// className="container-page"

// className="wrapper-forms"
