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
          <Image src="/eskylh2.jpeg" width={800} height={600} />
        </div>
        <div className="flex justify-center items-center flex-col px-10">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Escanaba, MI</h1>
          </div>
          <div className={lora.className}>
            <p className=" text-2xl">
              Nestled in the picturesque Upper Peninsula of Michigan, Escanaba
              emerges as a hidden gem for events and gatherings. This quaint
              city, with its serene Lake Michigan shoreline, offers a backdrop
              that blends natural beauty with small-town charm. With ample free
              public parking throughout downtown, Escanaba presents a small-town
              experience full of charm and natural beauty
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid lg:grid-cols-2 text-yellow-950 pink-box  py-12 px-4">
          <div className="flex justify-center items-center flex-col">
            <div className="text-6xl  ">
              <h1 className={playfair.className}>Nearby hotels</h1>
            </div>
            <div className={lora.className}>
              <ul className="flex flex-col gap-10 text-2xl">
                <li>
                  The House of Ludington | 223 Ludington St, Escanaba, MI 49829
                  | A historic hotel located within walking distance of downtown
                  attractions
                </li>
                <li>
                  Comfort Suites Escanaba | 3600 Ludington St, Escanaba, MI
                  49829 | A short drive from downtown, offering guests
                  comfortable accommodations.{" "}
                </li>
                <li>
                  Visitors often enjoy staying at the Terrace Bay Hotel, located
                  directly on Lake Michigan, about 15 minutes away from
                  downtown. The hotel offers stunning waterfront views, dining,
                  and a unique Upper Peninsula experience.
                </li>
              </ul>
              <p className="text-2xl px-10"></p>
            </div>
          </div>
          <div>
            <Image src="/oh.jpeg" width={800} height={600} />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 text-yellow-950 py-12 bridal-one px-4">
        <div>
          <Image src="/Sandpoint-Lighthouse-4742-4742.jpg" width={800} height={600} />
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Directions</h1>
          </div>
          <div className={lora.className}>
            <p className="px-10 text-2xl">
            Take the exit for M-35 North towards Gladstone/North Escanaba. Continue on M-35 North. As you enter the city, M-35 will become Lincoln Road. Follow Lincoln Road until you reach 3rd Avenue.  Turn North on 3rd Avenue.  Continue on 3rd Avenue until you reach 1837 3rd Avenue North on your right. Parking for Haley Station is located at 319 Stephenson Avenue, just a block further.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLocationComponent;
