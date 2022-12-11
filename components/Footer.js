import styles from "../styles/Home.module.css";
import Image from "next/image";
import darkthemelogo from "/public/darktheme-logo.svg";
import instagramLogo from "/public/instagram-logo.svg";
import facebookLogo from "/public/facebook-logo.svg";
import youtubeLogo from "/public/youtube-logo.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.newsletter}>
        <div className={styles.flogosection}>
          <Image src={darkthemelogo} alt="dark themed logo" />
          <p>The greatest festival of all the times.</p>
        </div>
        <div>
          <h3>Sign up to our newsletter</h3>
          <p>Sign up to our newsletter and stay up to date with the new shows, bands , promotions and more.</p>
          <form name="newsletter" autocomplete="on">
            <input type="email" />
            <button type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className={styles.contact}>
        <h3>Contact</h3>
        <ul>
          <li>Cosmo Festival</li>
          <li>Jagtej 16, 3000, Denmark</li>
          <li>hello@cosmofestival.com</li>
          <li>CVR: 33814860</li>
        </ul>
        <div className={styles.socials}>
          <Image src={instagramLogo} alt="Instagram logo" />
          <Image src={facebookLogo} alt="Facebook logo" />
          <Image src={youtubeLogo} alt="Youtube logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
