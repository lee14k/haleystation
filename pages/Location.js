import Topbar from "../components/Topbar";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import Image from "next/image";
const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import FeaturesSpace from "@/components/FeaturesSpace";
import Link from "next/link";
const Location = () => {
  return (
    <div>
      <Topbar />
      <div className="green-box ">
        <div className="grid grid-cols-2 text-yellow-950  py-12 px-4">
          <div>
            <Image src="/stok1.jpg" width={800} height={600} />
          </div>
          <div className="flex justify-center items-center flex-col">
            <div className="text-6xl text-white">
              <h1>Rates</h1>
            </div>
            <div>
              <h2>Features</h2>
              <p className="tracking-widest text-white">
                - For weddings, the main room is intended as a ceremony space
                that can smoothly transition to the dinner reception and dancing
                and entertainment space. The guests can enjoy a smooth
                transition to our back lounge area and through to the adjacent
                outdoor courtyard space through the back door for cocktail hour
                and later during the reception. - The outdoor courtyard features
                thoughtful year-round landscaping, charming festoon string
                lights, and outdoor space heaters if necessary. - As a
                year-round venue, clients always have the peace of mind of
                knowing that inclement weather will not impact their special day
                as an outdoor location would – there is no need for a rain plan
                at Haley Station. - “Start with a beautiful canvas. When you
                begin the design process with a naturally well-appointed space,
                it will require less fuss (and less funds) to make it gorgeous.”
                Capacity - Haley Station is ideal for intimate weddings of 125
                and less; hosting both ceremony & reception - 125 sit
                comfortably dinner-style and ceremony-style in the main open
                area - 225 max capacity, cocktail-style
              </p>
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
    </div>
  );
};

export default Location;
