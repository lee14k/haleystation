import Topbar from "../components/Topbar";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import Image from "next/image";
const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
import FAQ from "@/components/FAQ";
import Locationcomponent from "@/components/Locationcomponent";
import FeaturesSpace from "@/components/FeaturesSpace";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className=" spacebg text-6xl text-white flex justify-center items-center">
        <div>
          <h1 className="text-8xl text-white fancy-font">About</h1>
        </div>
        <div className={lora.className}></div>
      </div>
      <FeaturesSpace />
      <div className="grid lg:grid-cols-2 text-yellow-950 bridalone py-12 px-4">
        <div className="flex justify-center items-center flex-col gap-10">
          <div className="text-6xl ">
            <h1 className="fancy-font">Our Rates</h1>
          </div>
          <Link href="/Rates">
            <button className="ctabutton pink-box  px-8 py-6 text-3xl">
              {" "}
              Learn More
            </button>
          </Link>
        </div>
        <div className=" flex justify-end items-end">
          <Image src="/new-rates.jpg" width={700} height={500} />
        </div>
      </div>
      <Locationcomponent />
      <FAQ />
      <Footer />
    </div>
  );
};

export default About;
