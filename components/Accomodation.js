import styles from "../styles/Home.module.css";
import Image from "next/image";
import accomodationImg from "/public/accomodation.jpg";
export default function Acomodation() {
  return (
    <section className={styles.accomodationSec}>
      <div className={styles.accomodation}>
        <Image src={accomodationImg} alt="girl enjoying festival" />
      </div>
      <div className={styles.accomodationDesc}>
        <h2>Acommodations</h2>
        <h3>CAMPING OPTIONS</h3>
        <p>
          You can enjoy the whole experience, with our 5 camping spaces. You don´t need to look else were for
          accomodation.
        </p>
        <p>The fee of prebook a camping spot is 99,-. </p>
        <button name="Read More" value="Read More">
          READ MORE
        </button>
      </div>
    </section>
  );
}
