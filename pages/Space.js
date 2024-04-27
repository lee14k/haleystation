import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Space = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="spacebg text-6xl flex justify-center items-center">
          <h1 className="text-8xl fancy-font text-white">The Space</h1>
        </div>
        <div className=" text-yellow-950 ">
          <div className="pink-box">
            <h2 className="text-6xl fancy-font flex justify-center items-center pt-6">
              Features
            </h2>

            <div className="pink-box  grid lg:grid-cols-2 py-12 px-4 ">
              <ul className="text-2xl list-disc	ml-10 other-font">
                <li>A white interior with lots of natural light</li>
                <li>Large modern black windows with black grids</li>
                <li>Expansive front windows</li>
                <li>Dark moody tall tray ceiling</li>
                <li>11 foot ceilings</li>
                <li>Elegant dimmable chandeliers</li>
                <li>Modern black ceiling fans</li>
                <li>Custom statement doors, black with brass hardware</li>
              </ul>

              <div className="">
                <Image src="/hstwo.jpg" width={800} height={600} />
              </div>

              <p></p>
            </div>
            <p className="my-10 text-2xl other-font">
              For weddings, the main room is intended as a ceremony space that
              can smoothly transition to the dinner reception and dancing and
              entertainment space. The guests can enjoy a smooth transition to
              our back lounge area and through to the adjacent outdoor courtyard
              space through the back door for cocktail hour and later during the
              reception. The outdoor courtyard features thoughtful year-round
              landscaping, charming festoon string lights, and outdoor space
              heaters if necessary. As a year-round venue, clients always have
              the peace of mind of knowing that inclement weather will not
              impact their special day as an outdoor location would – there is
              no need for a rain plan at Haley Station.
            </p>
            <div className="grid lg:grid-cols-2 py-12 bridalone px-8">
              <div>
                {" "}
                <Image src="/hstwo.jpg" width={800} height={600} />
              </div>
              <div className="flex flex-col justify-center items-center">
                {" "}
                <h2 className="text-4xl fancy-font">Capacity</h2>
                <p className="text-2xl px-4 other-font">
                  Haley Station is ideal for intimate weddings of 125 and less;
                  hosting both ceremony & reception - 125 sit comfortably
                  dinner-style and ceremony-style in the main open area - 225
                  max capacity, cocktail-style
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Space;
