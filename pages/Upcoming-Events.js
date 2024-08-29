import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import Image from "next/image";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { StarIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import Link from "next/link";
export default function UpcomingEvents () {
    return (
        <div>
            <Navbar/>
            <div className=" new-space-bg text-6xl text-white flex justify-center items-center">
                <div>
                    <h1 className="text-8xl text-white fancy-font">Upcoming Events</h1>
                </div>
                <div className={lora.className}></div>
            </div>
            <div>
                <h1></h1>
            </div>
            <div className="grid lg:grid-cols-3">
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
            <Footer/>
        </div>
    );
}