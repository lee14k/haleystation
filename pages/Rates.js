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
              <div className="tracking-widest ml-6 ">
                <h2 className="text-4xl fancy-font text-center lg:text-left ">
                  Wedding Packages
                </h2>
                <h4 className="text-2xl lg:text-left text-center">
                  $1,795 (weekend rental)
                </h4>
                <span className="other-font text-2xl mx-12 lg:mx-0">
                  {" "}
                  Our one-of-a-kind venue was designed to be a flexible and
                  transformable space for guest counts of up to 125 seated, 225
                  cocktail setting.
                </span>

                <ul className="other-font my-4 mx-12 lg:mx-0 text-center lg:text-left ">
                  <li className="text-2xl"> INCLUDES:</li>
                  <li className="text-xl">(12) 60-inch round wood tables</li>
                  <li className="text-xl">(4) 72-inch round wood tables</li>
                  <li className="text-xl">
                    125 white padded chairs (125 black chiavarri chairs are an
                    available upgrade)
                  </li>
                  <li className="text-xl">(2) outdoor patio space heaters</li>
                  <li className="text-xl">(1) In-house specialty lounge set</li>
                  <li className="text-xl">
                    (3) In-house specialty bistro sets{" "}
                  </li>
                  <li className="text-xl">(6) Cocktail tables</li>
                  <li className="text-xl">
                    (2) accent tables for cake/desserts/welcome/sweetheart
                  </li>
                </ul>
              </div>
              <div>
                <Image src="/newhsphoto1-min.jpg" width={800} height={600} />
              </div>
            </div>
          </div>
          <div className="pink-box">
            <div className="grid lg:grid-cols-2 gap-24">
              <div className="my-8">
                <Image src="/newhsphoto3-min.jpg" width={800} height={600} />
              </div>
              <div className="tracking-widest flex justify-center items-center flex-col py-12">
                <h2 className="text-4xl fancy-font">6 Hour Packages</h2>
                <h4 className="text-2xl">
                  $595 | additional hours $100 per hour
                </h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bridal-one ml-6">
            <div className="grid lg:grid-cols-2 gap-24">
              <div className="tracking-widest flex justify-center items-center flex-col py-12 ">
                <h2 className="text-4xl fancy-font">Hourly Rate</h2>
                <h4 className="text-2xl">$100 per hour | minimum of 3 hours</h4>
                <span className="text-xl">
                  Ideal for corporate events and meet-ups, please contact us for
                  details
                </span>
                <Link href="/Contact">
                  <button className="ctabutton pink-box px-8 py-6 text-3xl my-4">
                    Contact Us{" "}
                  </button>
                </Link>
              </div>
              <div className="my-8">
                <Image src="/buffet-min.jpg" width={600} height={200} />
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
