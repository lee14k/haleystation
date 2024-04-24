import Topbar from "../components/Topbar";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import Image from "next/image";
const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
import FAQ from "@/components/FAQ";
import Location from "@/components/Locationcomponent";
import FeaturesSpace from "@/components/FeaturesSpace";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Rates = () => {
  return (
    <div>
      <Navbar />
      <div className=" ">
        <div className="">
          <div className=" spacebg text-6xl flex justify-center items-center">
            <h1 className="text-8xl fancy-font text-white">Rates</h1>
          </div>
          <div className="">
            <div className="grid lg:grid-cols-2 gap-24 mt-6 mb-6">
              <div className="tracking-widest ">
                <h2 className="text-4xl fancy-font">
                  Wedding Packages 
                </h2>
                <h4 className="text-2xl">$1,795 (weekend) | $1,295
          </h4>
                Our one-of-a-kind venue was designed to be a flexible and
                transformable space for guest counts of up to 125 seated, 225
                cocktail setting.
                <ul>
                  <li className="text-xl"> INCLUDES:</li>
                  <li>(12) 60-inch round wood tables</li>
                  <li>(4) 72-inch round wood tables</li>
                  <li>
                    125 white padded chairs (125 black chiavarri chairs are an
                    available upgrade)
                  </li>
                  <li>(2) outdoor patio space heaters</li>
                  <li>(1) In-house specialty lounge set</li>
                  <li>(3) In-house specialty bistro sets </li>
                  <li>(6) Cocktail tables</li>
                  <li>
                    (2) accent tables for cake/desserts/welcome/sweetheart
                  </li>
                </ul>
              </div>
              <div>
                <Image src="/newhsphoto1.jpg" width={800} height={600} />
              </div>
            </div>
          </div>
          <div className="pink-box">
            <div className="grid lg:grid-cols-2 gap-24">
              <div className="my-8">
                <Image src="/newhsphoto3.jpg" width={800} height={600} />
              </div>
              <div className="tracking-widest flex justify-center items-center flex-col">
                <h2 className="text-4xl fancy-font">
                  6 Hour Packages
                  
                </h2>
                <h4 className="text-2xl">$595 | additional hours $100 per hour
          </h4>
          Includes set up and clean up
              
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bridal-one">
            <div className="grid lg:grid-cols-2 gap-24">
              <div className="tracking-widest flex justify-center items-center flex-col ">
                <h2 className="text-4xl fancy-font ">
                  Hourly Rate
                </h2>
                <h4 className="text-2xl">$100 per hour | minimum of 3 hours
          </h4>
                Ideal for corporate events and meet-ups, Please contact us for
                details
              </div>
              <div className="my-8">
                <Image src="/buffet.jpg" width={600} height={200} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Rates;
