import { useRouter } from "next/router";

export default function Band({ bands }) {
  const router = useRouter();
  const { name } = router.query;
  const band = bands.find((band) => band.name === name);

  return (
    <>
      <h1>{band.name}</h1>
      <p>Genre: {band.genre}</p>
      {/*     <Image alt={band.name} src={band.logo} width={200} height={200} />
       */}{" "}
      <h3>Band`s Members</h3>
      <ul>
        {band.members.map((member, index) => {
          return <li key={index}>{member}</li>;
        })}
      </ul>
      <h3>About {band.name}</h3>
      <p>{band.bio}</p>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:8080/bands#");

  const dataBands = await res.json();
  const paths = dataBands.map((band) => {
    return {
      params: {
        name: band.name.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  /* This function runs before the component bands is render
  - fetch the data
  - wait for that data
  - once we have the data, it put into the component
  - so the component can render with that data inside it  */

  const res = await fetch("https://bitter-moon-5524.fly.dev/bands");
  const data = await res.json();

  /* - we return a value for this function 
- that value is going to be an object 
- inside the object we have a props property we give the property a value
- that value is goint to be an object so we can past all the properties that we need*/
  return {
    props: { bands: data },
  };
}
