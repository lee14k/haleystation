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
      <div className="green-box ">
        <div className="">
          <div className=" spacebg text-6xl text-white flex justify-center items-center">
            <h1 className="text-8xl text-white fancy-font">Rates</h1>
          </div>
          <div className="flex justify-center items-center flex-col">
            <div>
              <div className="tracking-widest text-white">
                <h2 className="text-2xl ">
                  Wedding Packages $1,795 (Friday-Saturday) ($1,295 any other
                  day of the week)
                </h2>
                Our one-of-a-kind venue was designed to be a flexible and
                transformable space for guest counts of up to 125 seated, 225
                cocktail setting.
                <ul>
                  <li> INCLUDES:</li>
                  <li>(12) 60-inch round wood tables</li>
                  <li>(4) 72-inch round wood tables</li>
                  <li>(12) 60-inch round wood tables</li>
                  <li>
                    125 white padded chairs (125 black chiavarri chairs are an
                    available upgrade)
                  </li>
                  <li>(2) outdoor patio space heaters</li>
                  <li>(1) In-house specialty lounge set</li>
                  <li>(3) In-house specialty bistro sets </li>
                  <li>(6) Cocktail tables</li>
                  <li>(4) farm benches</li>
                  <li>
                    (2) accent tables for cake/desserts/welcome/sweetheart
                  </li>
                </ul>
                Over $3000 in added value of specialty rental furniture! 15
                hours of venue space use (9am-midnight) Use of outdoor patio
                space Complete set up of Tables Floor Length Round White Table
                Linens Full bar with serviced bartender with purchase of alcohol
                package. Use of in-house décor In-house coordination with
                vendors for setup and timeliness of events
                <h2>Capacity</h2>- Haley Station is ideal for intimate weddings
                of 125 and less; hosting both ceremony & reception - 125 sit
                comfortably dinner-style and ceremony-style in the main open
                area - 225 max capacity, cocktail-style 6 Hour Packages - $595
                (Includes set up and clean up) Additional Hours available
                $100/per hour Ideal for small events, showers, anniversary
                parties, get-togethers, graduation parties, cocktail events,
                etc. INCLUDES round wood tables, white padded chairs, black
                chiavarri chairs are an available upgrade, (2) outdoor patio
                space heaters INCLUDES our beautiful in-house specialty
                furniture; (1) lounge set, (3) bistro sets, (6) cocktail tables
                Hourly Rate $100.00, Minimum of 3 hours
              </div>
              <ul>
                <li>
                  A white interior with picture frame wall moldings and tons of
                  natural light
                </li>
                <li>Large modern black windows with black grids</li>
                <li>Expansive front windows</li>
                <li>Dark moody tall tray ceiling</li>
                <li>11 foot ceilings with accent moldings</li>
                <li>Elegant dimmable chandeliers</li>
                <li>Modern black ceiling fans</li>
                <li>Custom statement doors, black with brass hardware</li>
              </ul>
            </div>
            <Link href="/Space">
              {" "}
              <button className="ctabutton bridalone brown-text px-8 py-6 text-3xl">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Rates;
