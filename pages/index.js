import Head from "next/head";
import Image from "next/image";
import Herosection from "../components/Herosection";
import Lineup from "../components/Lineup";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Tickets from "../components/TIckets";
import Accomodation from "../components/Accomodation";
export default function Home({ bands }) {
  return (
    <>
      <Head>
        <title>The Festival | Home</title>
        <meta name="description" content="This is my KEA thrid semester Frontend Elective exam" />
        <meta name="keywords" content="festival, music, exam, reactjs, nextjs"></meta>
      </Head>

      <Herosection />
      <Lineup />
      <Tickets />
      <Accomodation />
    </>
  );
}
