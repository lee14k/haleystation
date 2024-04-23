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
    <div className="bridalone">
      <div>
        <div className=" spacebg text-6xl text-white flex justify-center items-center">
          <div>
            <h1 className="text-8xl text-white fancy-font">Location</h1>
          </div>
          <div className={lora.className}></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 text-yellow-950 bridal-one py-12 ">
        <div>
          <Image src="/hslighthouse.jpg" width={800} height={600} />
        </div>
        <div className="flex justify-center items-center flex-col px-10">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Escanaba, MI</h1>
          </div>
          <div className={lora.className}>
            <p className=" text-2xl">
            Nestled in the picturesque Upper Peninsula of Michigan, Escanaba emerges as a hidden gem for events and gatherings. This quaint city, with its serene Lake Michigan shoreline, offers a backdrop that blends natural beauty with small-town charm. With ample free public parking throughout downtown, Escanaba presents a small-town experience full of charm and natural beauty
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid lg:grid-cols-2 text-yellow-950 pink-box  py-12 px-4">
          <div className="flex justify-center items-center flex-col">
            <div className="text-6xl  ">
              <h1 className={playfair.className}>Nearby hotels
</h1>
            </div>
            <div className={lora.className}>
              <p className="text-2xl px-10">
              The House of Ludington | 223 Ludington St, Escanaba, MI 49829 | A historic hotel located within walking distance of downtown attractions Comfort Suites Escanaba | 3600 Ludington St, Escanaba, MI 49829 | A short drive from downtown, offering guests comfortable accommodations. Visitors often enjoy staying at the Terrace Bay Hotel, located directly on Lake Michigan, about 15 minutes away from downtown. The hotel offers stunning waterfront views, dining, and a unique Upper Peninsula experience.
              </p>
            </div>
          </div>
          <div>
            <Image src="/sunsrise.jpg" width={800} height={600} />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 text-yellow-950 py-12 bridal-one px-4">
        <div>
          <Image src="/hswf.jpg" width={800} height={600} />
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Directions</h1>
          </div>
          <div className={lora.className}>
            <p className="px-10 text-2xl">
            Traveling on US-2/US-41, take the exit toward Ludington Street in downtown Escanaba. Continue on Ludington Street to explore the heart of Escanaba. Event venues and local attractions are conveniently situated along this historic stretch. Travel: Delta County Airport is just a 10-minute drive away, offering easy access for those flying in for your event.
            </p>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default NewLocationComponent;
