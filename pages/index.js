import BridalSectionOne from "@/components/BridalSectionOne";
import ThreePhotoRowTwo from "@/components/ThreePhotoRowTwo";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import Link from "next/link";
import Topbar from "@/components/Topbar";

const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="">
        <Topbar />
      </div>
      <div className="firsttextheader flex flex-col justify-center items-center text-white">
        <div className="tracking-widest text-4xl my-2">
          <p className={lora.className}>WELCOME TO</p>
        </div>
        <div className="text-center my-2">
          <div className="text-8xl mb-6">
            <h1 className={playfair.className}>Haley Station</h1>
          </div>
          <div className="text-4xl mb-6">
            <h2 className={playfair.className}>Wedding & Event Venue</h2>
          </div>
        </div>
        <div className="tracking-widest text-4xl text-center	">
          <p className={lora.className}>ESCANABA, MI</p>
          <div className={lora.className}>
            <Link href="/About">
              <button className="border-4 border-white bg-white text-black px-16 py-2.5 my-6">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <BridalSectionOne />
      <ThreePhotoRowTwo
        photoOne={"/stok1.jpg"}
        photoTwo={"/stok1.jpg"}
        photoThree={"/stok1.jpg"}
        backgroundColor="#F4F1ED"
        optionalHead={"A Special Venue For Any Special Occasion"}
      />
      <div className={playfair.className}>
        <ThreePhotoRowTwo
          textOne="Weddings"
          textTwo="Photos"
          textThree="Events"
          backgroundColor="#F4F1ED"
        />
      </div>
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
