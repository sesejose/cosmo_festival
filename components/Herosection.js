import Image from "next/image";
import styles from "../styles/Home.module.css";
import heroImg from "/public/festival-landing.jpg";
export default function Herosection() {
  return (
    <section className={styles.herosection}>
      <Image src={heroImg} alt="festival" width={1512} height={830} />
      <h1>Cosmo</h1>
      <h2>15/12</h2>
      <h3>WILL YOU MISS IT?</h3>
      <button className={styles.booknowBtn} value="Book now">
        BOOK NOW
      </button>
    </section>
  );
}
