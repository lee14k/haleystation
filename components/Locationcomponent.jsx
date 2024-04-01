import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import Image from "next/image";
import Link from "next/link";

export default function Location() {
  return (
    <div className="green-box ">
      <div className="grid lg:grid-cols-2 text-yellow-950  py-12 px-4 gap-6">
        <div>
          <Image src="/stok1.jpg" width={800} height={600} />
        </div>
        <div className="flex justify-center items-center flex-col gap-10">
          <div className="text-6xl text-white">
            <h1 className={playfair.className}>Location</h1>
          </div>
          <div className={lora.className}>
            <p className="tracking-widest text-white text-2xl">
              Nestled in the picturesque Upper Peninsula of Michigan, Escanaba
              emerges as a hidden gem for events and gatherings. This quaint
              city, with its serene Lake Michigan shoreline, offers a backdrop
              that blends natural beauty with small-town charm. Downtown
              Escanaba, often referred to as the "Heart of the Upper Peninsula,"
              features a collection of well-preserved historic buildings and
              local boutiques that line Ludington Street, providing a quaint and
              inviting atmosphere for visitors and locals alike.
            </p>
          </div>
          <Link href="/Location">
            <button className="ctabutton bridalone brown-text px-8 py-6 text-3xl">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
