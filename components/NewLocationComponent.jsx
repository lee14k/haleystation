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

const NewLocationComponent = () => {
  return (
    <div>
      <Navbar />
      <div className="pink-box ">
        <div className="">
          <div className=" spacebg text-6xl flex justify-center items-center">
            <h1 className="text-8xl fancy-font text-white">Location</h1>
          </div>
          <div className="">
            <div className="grid lg:grid-cols-2 gap-24">
              <div className="tracking-widest ">
                <h2 className="text-4xl fancy-font">
                Escanaba, MI
                </h2>
          Nestled in the picturesque Upper Peninsula of Michigan, Escanaba emerges as a hidden gem for events and gatherings. This quaint city, with its serene Lake Michigan shoreline, offers a backdrop that blends natural beauty with small-town charm. With ample free public parking throughout downtown, Escanaba presents a small-town experience full of charm and natural beauty
                
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
                Nearby hotels
                </h2>
                The House of Ludington | 223 Ludington St, Escanaba, MI 49829 | A historic hotel located within walking distance of downtown attractions
Comfort Suites Escanaba | 3600 Ludington St, Escanaba, MI 49829 | A short drive from downtown, offering guests comfortable accommodations.
Visitors often enjoy staying at the Terrace Bay Hotel, located directly on Lake Michigan, about 15 minutes away from downtown. The hotel offers stunning waterfront views, dining, and a unique Upper Peninsula experience.
              
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center ">
            <div className="grid lg:grid-cols-2 gap-24">
              <div className="tracking-widest  ">
                <h2 className="text-4xl ">
                Directions
                </h2>
                Traveling on US-2/US-41, take the exit toward Ludington Street in downtown Escanaba. Continue on Ludington Street to explore the heart of Escanaba. Event venues and local attractions are conveniently situated along this historic stretch. Travel: Delta County Airport is just a 10-minute drive away, offering easy access for those flying in for your event.
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

export default NewLocationComponent;
