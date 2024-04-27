import BridalSectionOne from "@/components/BridalSectionOne";
import ThreePhotoRowTwo from "@/components/ThreePhotoRowTwo";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import Link from "next/link";
import Topbar from "@/components/Topbar";
import Image from "next/image";
import Footer from "@/components/Footer";
import HomeThreePic from "@/components/HomeThreePic";
const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
import Navbar from "@/components/Navbar";

export default function Home() {
  const homeImages = [
    { link: "/hsone.jpg", header: "Our Space", page: "/Space" },
    { link: "/newhsphoto3.jpg", header: "Events", page: "/Events" },
    { link: "/newhsphoto4.jpg", header: "Gallery", page: "/Gallery" },
  ];
  return (
    <div>
      <div className="">
        <Navbar />
      </div>

      <div className="firsttextheader flex flex-col justify-center items-center text-white">
        <Image src="/newhs.png" width={200} height={200} />

        <div className="tracking-widest text-4xl mt-6">
          <p className="fancy-font">WELCOME TO</p>
        </div>
        <div className="text-center ">
          <div className="big-text">
            <h1 className="fancy-font">Haley Station</h1>
          </div>
          <div className="text-4xl mb-6">
            <h2 className="fancy-font ">Wedding & Event Venue</h2>
          </div>
        </div>
        <div className="tracking-widest text-4xl text-center mx-16	">
          <p className="fancy-font">ESCANABA, MI</p>
          <div className="fancy-font"></div>
        </div>
      </div>
      <BridalSectionOne />
      <div className="bridalone ">
        <div className="flex justify-center items-center pt-12">
          <h1 className="fancy-font text-8xl text-center">
            A Special Venue for Any Special Occasion
          </h1>
        </div>
        <HomeThreePic images={homeImages} />
      </div>

      <div>
        <div className="grid lg:grid-cols-2 text-yellow-950 bridalone py-12 px-4">
          <div className="flex flex-col">
            <Image src="/archhs.jpeg" width={800} height={600} />
          </div>
          <div className="flex justify-center items-center flex-col text-center lg:mx-12">
            <div className="text-6xl brown-text ">
              <h1 className="fancy-font">
                Charm Guests in the Heart of Michigan’s U.P.{" "}
              </h1>
            </div>
            <div className="fancy-font">
              <p className="tracking-widest my-2  brown-text text-xl other-font">
                Nestled in the heart of Escanaba, Michigan, our venue offers the
                ideal setting for your special event. Whether you're planning a
                wedding, corporate retreat, or a family reunion, we provide a
                space that combines comfort with a touch of elegance. Our venue
                boasts a rich history and a warm, welcoming atmosphere that
                makes every occasion memorable. Forged by a passion for bringing
                people together, our space reflects a commitment to community
                and celebration.
              </p>
              <Link href="/Contact">
                <button className="ctabutton pink-box px-8 py-6 text-3xl my-4">
                  Contact Us{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
