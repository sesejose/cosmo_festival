import Image from "next/image";
import styles from "../styles/Home.module.css";
import aboutImg from "/public/about.png";
import aboutImg2 from "/public/about2.png";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutHero}>
        <Image src={aboutImg} alt="photo of the festival" />
        <h1>About Cosmo</h1>
      </div>
      <div className={styles.aboutDesc}>
        {/* <Image src={aboutImg2} alt="photo of the festival" /> this photo only in desktop view */}
        <h2>The biggest event on the electronic music sphere.</h2>
        <p>
          Founded in December of 2022 by three crazy and lost souls Niki, Jose and Karina that had no idea about what
          they were doing but combining their skill in design, music and in life, created the best of all times solution
          for those who, like them, are addicted to explosion of sound, color, and good vibes. Under the pressure, of
          the masterminds Jonas, Klaus, and Peter, to organised the best ever festival with the best user experience,
          the Cosmo´s founders accepted the challenge and founded the best electronic festival of all times.
        </p>
        <button type="button" value="Lineup">
          CHECK OUT OUR LINEUP!
        </button>
      </div>
    </section>
  );
}
