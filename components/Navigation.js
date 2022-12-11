import Anchor from "./Anchor";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import darkthemeLogo from "../public/darktheme-logo.svg";
export default function Nav() {
  return (
    <>
      {/* <Image src={darkthemeLogo} alt="logo" /> */}
      <nav className={styles.nav}>
        <ul>
          <Anchor href={"/"}>Home</Anchor>
          <Anchor href={"/bands"}>Bands</Anchor>
          <Anchor href={"/stages"}>Stages</Anchor>
          <Anchor href={"/acomodation"}>Acomodation</Anchor>
        </ul>
      </nav>
    </>
  );
}
