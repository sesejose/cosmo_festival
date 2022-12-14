import Image from "next/image";
import accomodationImg from "/public/accomodation.jpg";

export default function Acomodation() {
  return (
    <section id="accomodation-home">
      <div className="container">
        <div className="cards">
          <Image src={accomodationImg} alt="girl enjoying festival" width={800} height={800} />
        </div>
        <div className="desc">
          <h1 className="turquoise">Acommodations</h1>
          <h2 className="turquoise">CAMPING OPTIONS</h2>
          <p>
            You can enjoy the whole experience, with our 5 camping spaces. You dont need to look else were for
            accomodation. The feed of prebook a camping spot is 99,-.
          </p>
          <button className="btn-turquoise">READ MORE</button>
        </div>
      </div>
    </section>
  );
}
