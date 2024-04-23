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
const Rates = () => {
  return (
    <div>
      <Topbar />
      <div className="pink-box ">
        <div className="">
          <div className=" spacebg text-6xl flex justify-center items-center">
            <h1 className="text-8xl fancy-font text-white">Rates</h1>
          </div>
          <div className="">
            <div className="grid lg:grid-cols-2 gap-24">
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
          <div className="">
            <div className="grid lg:grid-cols-2 gap-24">
              <div>
                <Image src="/newhsphoto3.jpg" width={800} height={600} />
              </div>
              <div className="tracking-widest ">
                <h2 className="text-4xl fancy-font">
                  6 Hour Packages - $595 (Includes set up and clean up)
                  Additional Hours available $100/per hour
                </h2>
                Our one-of-a-kind venue was designed to be a flexible and
                transformable space for guest counts of up to 125 seated, 225
                cocktail setting.
              
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="grid lg:grid-cols-2 gap-24">
              <div className="tracking-widest  ">
                <h2 className="text-4xl ">
                  Hourly Rate $100.00, Minimum of 3 hours
                </h2>
                Ideal for corporate events and meet-ups, Please contact us for
                details
              </div>
              <div>
                <Image src="/newhsphoto5.jpg" width={600} height={200} />
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
