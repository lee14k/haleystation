import Image from "next/image";
import { Inter } from "next/font/google";
import BridalSectionOne from "@/components/BridalSectionOne";
import ThreePhotoRowTwo from "@/components/ThreePhotoRowTwo";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="firsttextheader flex flex-col justify-center items-center text-white">
        <div className="tracking-widest text-4xl	">
          <p className={lora.className}>WELCOME TO</p>
        </div>
        <div className="text-8xl text-center">
          <h1 className={playfair.className}>Haley Station</h1>
          <h2 className={playfair.className}>Wedding & Event Venue</h2>
        </div>
        <div className="tracking-widest text-4xl	">
          <p className={lora.className}>ESCANABA, MI</p>
          <div className={lora.className}><button className="border-4 border-white bg-white text-black px-8 py-2.5 my-6">
            Learn More
          </button></div>
          
        </div>
      </div>
      <BridalSectionOne />
      <ThreePhotoRowTwo
        photoOne={"/stok1.jpg"}
        photoTwo={"/stok1.jpg"}
        photoThree={"/stok1.jpg"}
      />
      <ThreePhotoRowTwo
        textOne="weddings"
        textTwo="photos"
        textThree="events"
      />
      <ThreePhotoRowTwo
        textOne="weddings"
        textTwo="photos"
        textThree="events"
        backgroundColor="#668260"
        optionalHead={"What People Are Saying... "}
      />

      <ThreePhotoRowTwo
        textOne="weddings"
        textTwo="photos"
        textThree="events"
        backgroundColor="#E1D6C9" // Direct color value
        optionalHead={"Haley Station Weddings & Event Venue"}
      />
    </div>
  );
}
