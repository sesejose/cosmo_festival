import Image from "next/image";
// import heroImg from "/public/festival-landing.jpg";

export default function Herosection() {
  return (
    <>
      <section>
        {/* <Image src={heroImg} alt="festival" width={1512} height={830} /> */}
        <div className="herosection">
          <div className="dates-and-will-you-container flex-row-space-around">
            <div className="flex-row-space-around dates-animated">
              <div className="huge pink">15/12</div>
            </div>
            <div className="will-you-and-btn-container">
              <h3 className="pink will-you">
                WILL<br></br>YOU<br></br>MISS<br></br>IT?
              </h3>
              <button className="btn-main" value="Book now">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
