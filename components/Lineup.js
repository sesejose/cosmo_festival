import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Lineup() {
  return (
    <>
      <section className={styles.lineup}>
        <h2>Lineup</h2>
        <ol>
          <li>
            <button>Monday</button>
          </li>
          <li>
            <button>Tuesday</button>
          </li>
          <li>
            <button>Wednesday</button>
          </li>
          <li>
            <button>Thursday</button>
          </li>
          <li>
            <button>Friday</button>
          </li>
          <li>
            <button>Saturday</button>
          </li>
          <li>
            <button>Sunday</button>
          </li>
        </ol>
      </section>
    </>
  );
}
// {bands.map((band) => (
//     <div key={band.name + Date.now()}>
//       <Link href={`bands/${band.name}`}>
//         <h3>Band: {band.name}</h3>
//       </Link>
//     </div>
//   ))}
// export async function getStaticProps() {
//   /* This function runs before the component bands is render
//       - fetch the data
//       - wait for that data
//       - once we have the data, it put into the component
//       - so the component can render with that data inside it  */

//   const res = await fetch("http://localhost:8080/bands#");
//   const data = await res.json();

//   /* - we return a value for this function
//   - that value is got we have a props property we give the property a value
//   - that value is going to be an object
//   - inside the objecint to be an object so we can past all the properties that we need*/
//   return {
//     props: { bands: data },
//   };
// }
