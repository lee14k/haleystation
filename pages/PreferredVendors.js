import Topbar from "../components/Topbar";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import Image from "next/image";
const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function PreferredVendors() {
  return (
    <div>
      <Navbar />
      <div className="pink-box ">
        <div className="">
          <div className=" spacebg text-6xl flex justify-center items-center">
            <h1 className="text-8xl fancy-font text-white">
              Preferred Vendors
            </h1>
          </div>
          <div className="">
            <div className="grid lg:grid-cols-2 gap-24">
              <div className="tracking-widest ">
                <h2 className="text-4xl ">Decorating</h2>
                <ul>
                  <li> INCLUDES:</li>
                  <li>(12) 60-inch round wood tables</li>
                  <li>(4) 72-inch round wood tables</li>
                  <li>(12) 60-inch round wood tables</li>
                </ul>

                <h2 className="text-4xl ">Floral</h2>
                <ul>
                  <li> INCLUDES:</li>
                  <li>(12) 60-inch round wood tables</li>
                  <li>(4) 72-inch round wood tables</li>
                  <li>(12) 60-inch round wood tables</li>
                </ul>

                <h2 className="text-4xl ">Event Rental</h2>
                <ul>
                  <li> INCLUDES:</li>
                  <li>(12) 60-inch round wood tables</li>
                  <li>(4) 72-inch round wood tables</li>
                  <li>(12) 60-inch round wood tables</li>
                </ul>

                <h2 className="text-4xl ">Photography</h2>
                <ul>
                  <li> INCLUDES:</li>
                  <li>(12) 60-inch round wood tables</li>
                  <li>(4) 72-inch round wood tables</li>
                  <li>(12) 60-inch round wood tables</li>
                </ul>

                <h2 className="text-4xl ">Beauty</h2>
                <ul>
                  <li> INCLUDES:</li>
                  <li>(12) 60-inch round wood tables</li>
                  <li>(4) 72-inch round wood tables</li>
                  <li>(12) 60-inch round wood tables</li>
                </ul>

                <h2 className="text-4xl ">DJ</h2>
                <ul>
                  <li> INCLUDES:</li>
                  <li>(12) 60-inch round wood tables</li>
                  <li>(4) 72-inch round wood tables</li>
                  <li>(12) 60-inch round wood tables</li>
                </ul>

                <h2 className="text-4xl ">Men's Attire</h2>
                <ul>
                  <li> INCLUDES:</li>
                  <li>(12) 60-inch round wood tables</li>
                  <li>(4) 72-inch round wood tables</li>
                  <li>(12) 60-inch round wood tables</li>
                </ul>

                <h2 className="text-4xl ">Catering</h2>
                <ul>
                  <li> INCLUDES:</li>
                  <li>(12) 60-inch round wood tables</li>
                  <li>(4) 72-inch round wood tables</li>
                  <li>(12) 60-inch round wood tables</li>
                </ul>
              </div>
              <div>
                <Image src="/stok1.jpg" width={800} height={600} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
