import Topbar from "../components/Topbar";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import Image from "next/image";
const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
import Link from "next/link";
import Footer from "@/components/Footer";
const Location = () => {
  return (
    <div>
      <Topbar />
      <div className="pink-box ">
        <div className=" spacebg text-6xl flex justify-center items-center">
          <h1 className="text-8xl text-white fancy-font">Location</h1>
        </div>
        <div className="grid grid-cols-2 text-yellow-950  py-12 px-4">
          <div className="flex justify-center items-center flex-col gap-10">
            <div className="text-6xl">
              <h1 className="fancy-font">Escanaba, MI</h1>
            </div>
            <div className=" flex flex-col gap-10">
              <p className="tracking-widest text-xl py-6">
                Nestled in the picturesque Upper Peninsula of Michigan, Escanaba
                emerges as a hidden gem for events and gatherings. This quaint
                city, with its serene Lake Michigan shoreline, offers a backdrop
                that blends natural beauty with small-town charm. Downtown
                Escanaba, often referred to as the "Heart of the Upper
                Peninsula," features a collection of well-preserved historic
                buildings and local boutiques that line Ludington Street,
                providing a quaint and inviting atmosphere for visitors and
                locals alike. With ample free public parking throughout
                downtown, Escanaba presents an appealing urban experience devoid
                of the parking frustrations commonly found in larger cities.
                Guests can enjoy the ease of access to event locations without
                the usual city congestion.
                <h2 className="text-6xl fancy-font py-6">Nearby hotels</h2>
                <p className="tracking-widest  text-xl">
                  <ul className="flex flex-col gap-4">
                    <li>
                      {" "}
                      The House of Ludington | 223 Ludington St, Escanaba, MI
                      49829 | A historic hotel located within walking distance
                      of downtown attractions
                    </li>
                    <li>
                      {" "}
                      Comfort Suites Escanaba | 3600 Ludington St, Escanaba, MI
                      49829 | A short drive from downtown, offering guests
                      comfortable accommodations.
                    </li>
                    <li>
                      {" "}
                      Visitors often enjoy staying at the Terrace Bay Hotel,
                      located directly on Lake Michigan, about 15 minutes away
                      from downtown. The hotel offers stunning waterfront views,
                      dining, and a unique Upper Peninsula experience.
                    </li>
                  </ul>
                </p>
              </p>
              <h2 className="text-6xl fancy-font">Directions</h2>
              <p className="tracking-widest  text-xl">
                Traveling on US-2/US-41, take the exit toward Ludington Street
                in downtown Escanaba. Continue on Ludington Street to explore
                the heart of Escanaba. Event venues and local attractions are
                conveniently situated along this historic stretch. Travel: Delta
                County Airport is just a 10-minute drive away, offering easy
                access for those flying in for your event.{" "}
              </p>
              <h2 className="text-6xl fancy-font">Attractions</h2>
              <p className="tracking-widest text-xl">
                {" "}
                Nearby, guests can explore Hiawatha National Forest or take a
                short drive to the charming town of Marquette for additional
                dining, shopping, and outdoor activities. Escanaba's blend of
                natural beauty, historical charm, and modern conveniences makes
                it an ideal location for events that seek a memorable and
                relaxed setting.
              </p>
            </div>
          </div>
          <div className="outside"></div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Location;
