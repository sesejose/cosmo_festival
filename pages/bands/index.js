import Link from "next/link";

export default function Bands({ bands }) {
  // we pass the props bands from the getStaticProps

  return (
    <>
      <h1>GETTING THE DATA</h1>

      {bands.map((band) => (
        <div key={band.name + Date.now()}>
          <Link href={`bands/${band.name}`}>
            <h3>Band: {band.name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  /* This function runs before the component bands is render
    - fetch the data
    - wait for that data
    - once we have the data, it put into the component
    - so the component can render with that data inside it  */

  const res = await fetch("http://localhost:8080/bands#");
  const data = await res.json();

  /* - we return a value for this function 
- that value is got we have a props property we give the property a value
- that value is going to be an object 
- inside the objecint to be an object so we can past all the properties that we need*/
  return {
    props: { bands: data },
  };
}
