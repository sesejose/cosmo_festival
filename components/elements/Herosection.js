import Image from "next/image";
import Link from "next/link";
// import heroImg from "/public/festival-landing.jpg";

export default function Herosection() {
  return (
    <>
      <section>
        {/* <Image src={heroImg} alt="festival" width={1512} height={830} /> */}
        <div className="herosection">
          <div className="dates-and-will-you-container flex-row-space-around1">
            <div className="flex-row-space-around1 dates-animated">
              <div className="huge pink">15/12</div>
            </div>
            <div className="will-you-and-btn-container">
              <h3 className="pink will-you">
                WILL<br></br>YOU<br></br>MISS<br></br>IT?
              </h3>
              <Link className="btn-main" value="Book now" href="/tickets">
                BOOK NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
