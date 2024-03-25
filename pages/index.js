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
        <Image src="/creamhsmon.png" width={100} height={100} />

        <div className="tracking-widest text-4xl my-2">
          <p className={lora.className}>WELCOME TO</p>
        </div>
        <div className="text-center my-2">
          <div className="big-text mb-6">
            <h1 className="fancy-font">Haley Station</h1>
          </div>
          <div className="text-4xl mb-6">
            <h2 className="fancy-font ">Wedding & Event Venue</h2>
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
        showBorder={false}
        boldFont={false}
      />
      <div className={playfair.className}>
        <ThreePhotoRowTwo
          textOne="Weddings"
          textTwo="Photos"
          textThree="Events"
          backgroundColor="#F4F1ED"
          linkUrlOne="/About"
          linkUrlTwo="/Events"
          linkUrlThree="/Weddings"
        />
      </div>
      <div>
        <div className="grid grid-cols-2 text-yellow-950 bridalone py-12 px-4">
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
              <button className="ctabutton green-box text-white px-8 py-6 text-3xl">
                Contact Us{" "}
              </button>
            </div>
          </div>
          <div className="flex flex-col">
            <Image src="/stok1.jpg" width={800} height={600} />
            <span className="w-full">Photo by John Doe</span>
          </div>
        </div>
      </div>
      <div className="green-box">
        <Image src="/monogram.png" width={100} height={100} />
        <ThreePhotoRowTwo
          textOne="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
          textTwo="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."
          textThree="Jane Doe"
          backgroundColor="#668260"
          optionalHead={"What People Are Saying... "}
          textColor={"white"}
          showBorder={false}
          boldFont={false}
          captionOne="Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable"
          captionTwo="Jane Doe"
          captionThree="John Smith"
          isTextWhite={true}
        />
      </div>
      <ThreePhotoRowTwo
        textOne="Come Visit Us"
        textTwo="Hours"
        textThree="Get Social"
        backgroundColor="#E1D6C9" // Direct color value
        optionalHead={"Haley Station Weddings & Event Venue"}
        listItems={[
          { type: 'text', content: 'Explore Our Venue' },
       
          { type: 'text', content: 'Book Your Event Today' },
       
          // Add more items as needed
        ]}
      />
    </div>
  );
}
