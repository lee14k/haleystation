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
const About = () => {
  return (
    <div>
      <Topbar />
      <FeaturesSpace />
      <div className="grid grid-cols-2 text-yellow-950 bridalone py-12 px-4">
        <div className="flex justify-center items-center flex-col gap-10">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Our Rates</h1>
          </div>
          <Link href="/Rates">
            <button className="ctabutton green-box text-white px-8 py-6 text-3xl">
              {" "}
              Learn More
            </button>
          </Link>
        </div>
        <div>
          <Image src="/stok1.jpg" width={800} height={600} />
        </div>
      </div>
      <Locationcomponent />
      <FAQ />
      <Footer />
    </div>
  );
};

export default About;
