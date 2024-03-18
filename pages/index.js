import BridalSectionOne from "@/components/BridalSectionOne";
import ThreePhotoRowTwo from "@/components/ThreePhotoRowTwo";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import Image from "next/image";

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
      <div>
        <div className="grid grid-cols-2 text-yellow-950 bridalone py-12 px-4">
          <div className="flex justify-center items-center flex-col">
            <div className="text-6xl ">
              <h1 className={playfair.className}>
                Charm Guests in the Heart of Michigan’s U.P.{" "}
              </h1>
            </div>
            <div className={lora.className}>
              <p className="tracking-widest">
                Located in Escanaba, Michigan, we’re ready to host your special
                event. Other copy here about why the space is special. Maybe
                info about the founders. Local desitnations include beaches
                along Lake Michigan, just an hour drive from Marquette, this
                waterfall, that lighthouse, blah blah. Ready to book? Get in
                touch with us today or view our rates.
              </p>
              <button>Contact Us </button>
            </div>
          </div>
          <div className="flex flex-col">
            <Image src="/stok1.jpg" width={800} height={600} />
            <caption className="w-full">Photo by John Doe</caption>
          </div>
        </div>
      </div>
      <div className="green-box">
        <Image src="/monogram.png" width={100} height={100} />
        <ThreePhotoRowTwo
          textOne="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
          textTwo="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
          textThree="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
          backgroundColor="#668260"
          optionalHead={"What People Are Saying... "}
          textColor={"white"}
          showBorder={false}
          boldFont={false}
        />
      </div>
      <ThreePhotoRowTwo
        textOne="Come Visit Us"
        textTwo="Hours"
        textThree="Get Social"
        backgroundColor="#E1D6C9" // Direct color value
        optionalHead={"Haley Station Weddings & Event Venue"}
      />
    </div>
  );
}
