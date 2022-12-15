import Link from "next/link";
// import styles from "../styles/Home.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

export default function Lineup({ bands }) {
  return (
    <>
      <section id="lineup">
        <div className="">
          <Tabs>
            <TabList className="flex-row-space-around container">
              <Tab>Monday</Tab>
              <Tab>Tuesday</Tab>
              <Tab>Wednesday</Tab>
              <Tab>Thursday</Tab>
              <Tab>Friday</Tab>
              <Tab>Saturday</Tab>
              <Tab>Sunday</Tab>
            </TabList>

            <TabPanel>
              <div>
                <h2>{bands}</h2>
              </div>
              <p>Something</p>
            </TabPanel>
            <TabPanel>
              <h2>{bands}</h2>
            </TabPanel>
            <TabPanel>
              <h2>{bands}</h2>
            </TabPanel>
            <TabPanel>
              <h2>{bands}</h2>
            </TabPanel>
            <TabPanel>
              <h2>{bands}</h2>
            </TabPanel>
            <TabPanel>
              <h2>{bands}</h2>
            </TabPanel>
            <TabPanel>
              <h2>{bands}</h2>
            </TabPanel>
          </Tabs>

          {/* <div>{bands}</div> */}
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

  const res = await fetch("https://bitter-moon-5524.fly.dev/bands");
  const data = await res.json();

  /* - we return a value for this function 
- that value is got we have a props property we give the property a value
- that value is going to be an object 
- inside the objecint to be an object so we can past all the properties that we need*/
  return {
    props: { bands: data },
  };
}
