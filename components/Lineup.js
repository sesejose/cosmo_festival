import Link from "next/link";
// import styles from "../styles/Home.module.css";

export default function Lineup({ bands }) {
  return (
    <>
      <section id="lineup">
        <div className="container">
          <div>
            <h1>Lineup</h1>
            <ol>
              <li>
                <button className="btn-days">Monday</button>
              </li>
              <li>
                <button className="btn-days">Tuesday</button>
              </li>
              <li>
                <button className="btn-days">Wednesday</button>
              </li>
              <li>
                <button className="btn-days">Thursday</button>
              </li>
              <li>
                <button className="btn-days">Friday</button>
              </li>
              <li>
                <button className="btn-days">Saturday</button>
              </li>
              <li>
                <button className="btn-days">Sunday</button>
              </li>
            </ol>
          </div>
          <div>{bands}</div>
        </div>
      </section>

      {/* {bands.map((band) => (
        <div key={band.name + Date.now()}>
          <Link href={`${band.name}`}>
            <h3>Band: {band.name}</h3>
          </Link>
        </div>
      ))} */}
    </>
  );
}

export async function getStaticProps() {
  /* This function runs before the component bands is render
       - fetch the data
       - wait for that data
       - once we have the data, it put into the component
       - so the component can render with that data inside it  */

  const res = await fetch("http://localhost:8080/bands");
  const data = await res.json();
  /* - we return a value for this function
   - that value is got we have a props property we give the property a value
   - that value is going to be an object
   - inside the objecint to be an object so we can past all the properties that we need*/
  return {
    props: { bands: data },
  };
}
