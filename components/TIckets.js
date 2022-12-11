import styles from "../styles/Home.module.css";
export default function Tickets() {
  return (
    <>
      <section className={styles.tickets}>
        <div className={styles.cards}>
          <div className={styles.card1}>
            <p>Regular Pass</p>
          </div>
          <div className={styles.card2}>
            <p>VIP Pass</p>
          </div>
        </div>
        <div className={styles.desc}>
          <h2>Tickets</h2>
          <h3>WHAT YOU NEED TO KNOW</h3>
          <p>
            Cosmo Festival is one of the most popular music festivals in Europe. Every year the event gathers the best
            artists and biggest DJs in electronic music. This in an event that never ends, with music 24/7 and vibes of
            the greatests faces with the best electronic music on our 3 stages.
          </p>
          <p>
            Cosmo Festival is an event for 18 and older. Your name is going to be printed in the ticket so your name
            should coincide with your name on your ID.
          </p>
          <p>
            If your are looking for the bigwig experience, our VIP ticket is for you! Enjoy extra services as VIP, such
            as:
          </p>
          <ul>
            <li>Exlucive VIP entrance & exit points </li>
            <li>Area with unobstructed view close to the stages</li>
            <li>Reserved VIP zones and tables</li>
            <li>Special Bar services</li>
            <li>and much more</li>
          </ul>
          <button name="Book Now">BOOK NOW</button>
        </div>
      </section>
    </>
  );
}
