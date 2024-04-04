import BridalSectionOne from "@/components/BridalSectionOne";
import ThreePhotoRowTwo from "@/components/ThreePhotoRowTwo";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import HomeThreePic from "@/components/HomeThreePic";
const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Home() {
  const homeImages = [
    { link: "/hsone.jpg", header: "Our Space", page: "/Space" },
    { link: "/hsone.jpg", header: "Events", page: "/Events" },
    { link: "/hsone.jpg", header: "Gallery", page: "/Gallery" },
  ];
  return (
    <div>
      <div className="">
        <Topbar />
      </div>

      <div className="firsttextheader flex flex-col justify-center items-center text-white">
        <Image src="/creamhsmon.png" width={200} height={200} />

        <div className="tracking-widest text-4xl mt-6">
          <p className={lora.className}>WELCOME TO</p>
        </div>
        <div className="text-center ">
          <div className="big-text">
            <h1 className="fancy-font">Haley Station</h1>
          </div>
          <div className="text-4xl mb-6">
            <h2 className="fancy-font ">Wedding & Event Venue</h2>
          </div>
        </div>
        <div className="tracking-widest text-4xl text-center mx-16	">
          <p className={lora.className}>ESCANABA, MI</p>
          <div className={lora.className}></div>
        </div>
      </div>
      <BridalSectionOne />
      <div className="bridalone ">
        <div className="flex justify-center items-center pt-12">
          <h1 className="fancy-font text-8xl text-center">
            A Special Venue for Any Special Occasion
          </h1>
        </div>
        <HomeThreePic images={homeImages} />
      </div>

      <div>
        <div className="grid lg:grid-cols-2 text-yellow-950 bridalone py-12 px-4">
          <div className="flex justify-center items-center flex-col mx-12">
            <div className="text-6xl brown-text ">
              <h1 className={playfair.className}>
                Charm Guests in the Heart of Michigan’s U.P.{" "}
              </h1>
            </div>
            <div className={lora.className}>
              <p className="tracking-widest my-2 mr-24 brown-text text-xl">
                Located in Escanaba, Michigan, we’re ready to host your special
                event. Other copy here about why the space is special. Maybe
                info about the founders. Local desitnations include beaches
                along Lake Michigan, just an hour drive from Marquette, this
                waterfall, that lighthouse, blah blah. Ready to book? Get in
                touch with us today or view our rates.
              </p>
              <button className="ctabutton green-box text-white px-8 py-6 text-3xl my-4">
                Contact Us{" "}
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <Image src="/hsthree.jpg" width={800} height={600} />
          </div>
        </div>
      </div>
      <div className="green-box justify-center items-center flex flex-col py-24">
        <ThreePhotoRowTwo
          textOne="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
          textTwo="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
          textThree="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
          backgroundColor="#668260"
          optionalHead={"What People Are Saying"}
          textColor={"white"}
          showBorder={false}
          boldFont={false}
          captionOne="John Doe"
          captionTwo="Jane Doe"
          captionThree="John Smith"
          isTextWhite={true}
        />
      </div>

      <Footer />
    </div>
  );
}
