import Topbar from "../components/Topbar";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import Image from "next/image";
const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";

const About = () => {
  return (
    <div>
      <Topbar />
      <div className="grid grid-cols-2 text-yellow-950 bridalone py-12 px-4">
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Our Rates</h1>
          </div>
          <div className={lora.className}>
            <p className="tracking-widest">
              Please call us for 2024 rates. If the venue knows their rates,
              let’s type them here. Are there standard packages/add ons?
            </p>
            <h2>Weddings</h2>
            <p className="tracking-widest">
              We used to be a roller rink, and before that, something else.
              Built in 1400 BCE., we’ve preserved the vintage charm of the
              building while elevating the space to suit the unique needs of
              your special day.
            </p>
            <h2>Showers & Parties</h2>
            <p className="tracking-widest">
              Showers, graduation parties, company events are booked on an
              hourly rate with a maximumof 6 hours. Please call for 2024 hourly
              rate.
            </p>
          </div>
          <button className="green-box text-white px-2.5 py-2.5 text-xl">
            Book Today!
          </button>
        </div>
        <div>
          <Image src="/stok1.jpg" width={800} height={600} />
        </div>
      </div>
      <Location />
      <FAQ />
    </div>
  );
};

export default About;
