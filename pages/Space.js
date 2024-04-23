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
import { StarIcon } from "@heroicons/react/24/outline";

const Space = () => {
  return (
    <div>
      <Topbar />
      <div className="">
        <div className="spacebg text-6xl flex justify-center items-center">
          <h1 className="text-8xl fancy-font text-white">The Space</h1>
        </div>
        <div className="flex text-yellow-950 ">
          <div className="flex justify-center items-center flex-col ">
            <div className="pink-box  py-12 px-4 ">
              <h2 className="text-6xl fancy-font">Features</h2>
              <ul className="flex">
                <li className="flex">
                  <StarIcon className="h-6 w-6" />A white interior with picture
                  frame wall moldings and tons of natural light
                </li>
                <li className="flex">
                  {" "}
                  <StarIcon className="h-6 w-6" />
                  Large modern black windows with black grids
                </li>
                <li className="flex">
                  {" "}
                  <StarIcon className="h-6 w-6" />
                  Expansive front windows
                </li>
                <li>
                  {" "}
                  <StarIcon className="h-6 w-6" />
                  Dark moody tall tray ceiling
                </li>
                <li>
                  {" "}
                  <StarIcon className="h-6 w-6" />
                  11 foot ceilings with accent moldings
                </li>
                <li>
                  {" "}
                  <StarIcon className="h-6 w-6" />
                  Elegant dimmable chandeliers
                </li>
                <li>
                  {" "}
                  <StarIcon className="h-6 w-6" />
                  Modern black ceiling fans
                </li>
                <li>
                  {" "}
                  <StarIcon className="h-6 w-6" />
                  Custom statement doors, black with brass hardware
                </li>
              </ul>
              <div className="">
                {" "}
                <p className="my-10">
                  For weddings, the main room is intended as a ceremony space
                  that can smoothly transition to the dinner reception and
                  dancing and entertainment space. The guests can enjoy a smooth
                  transition to our back lounge area and through to the adjacent
                  outdoor courtyard space through the back door for cocktail
                  hour and later during the reception.
                </p>
                <p>
                  The outdoor courtyard features thoughtful year-round
                  landscaping, charming festoon string lights, and outdoor space
                  heaters if necessary.
                </p>
                <p>
                  As a year-round venue, clients always have the peace of mind
                  of knowing that inclement weather will not impact their
                  special day as an outdoor location would – there is no need
                  for a rain plan at Haley Station.
                </p>
              </div>
              <div>
                <Image src="/stok1.jpg" width={800} height={600} />
              </div>
            </div>

            <div className="grid lg:grid-cols-2 py-12 bridalone">
              <div>
                {" "}
                <Image src="/stok1.jpg" width={800} height={600} />
              </div>
              <div className="flex flex-col justify-center items-center">
                {" "}
                <h2 className="text-4xl fancy-font">Capacity</h2>
                <p>
                  Haley Station is ideal for intimate weddings of 125 and less;
                  hosting both ceremony & reception - 125 sit comfortably
                  dinner-style and ceremony-style in the main open area - 225
                  max capacity, cocktail-style
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Space;
