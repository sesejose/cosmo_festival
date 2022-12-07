import Anchor from "./Anchor";
import styles from '../styles/Home.module.css'



export default function Nav() {
  return (
    <>
    <nav className={styles.nav}>
        <ul>
            <Anchor href={"/"}>Home</Anchor>
            <Anchor href={"/bands"}>Bands</Anchor>
            <Anchor href={"/stages"}>Stages</Anchor>
            <Anchor href={"/acomodation"}>Acomodation</Anchor>
        </ul>
    </nav>
    
    
    </>  )
}

 