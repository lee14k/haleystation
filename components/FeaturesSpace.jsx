import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import Image from "next/image";
import Link from "next/link";

export default function FeaturesSpace() {
  return (
    <div className="green-box ">
      <div className="grid grid-cols-2 text-yellow-950  py-12 px-4">
        <div>
          <Image src="/stok1.jpg" width={800} height={600} />
        </div>
        <div className="flex justify-center items-center flex-col gap-10">
          <div className="text-6xl text-white">
            <h1 className={playfair.className}>The Space</h1>
          </div>
          <div className={lora.className}>
            <p className="tracking-widest text-white">
              Haley Station is one of the few venues in the Delta County area to
              host beautiful indoor ceremonies in our spacious venue, filled
              with natural light from our many beautiful large windows. The
              space also features the main open area, a beautiful built-in bar,
              a romantic brick fireplace for aesthetic use only, and an outdoor
              courtyard with festoon lighting. As a year-round venue, our
              clients have the peace of mind of knowing that inclement weather
              will not impact their special day.
            </p>
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
  );
}
