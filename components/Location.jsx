import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import Image from "next/image";

export default function Location() {
  return (
    <div>
      <div className="grid grid-cols-2 text-yellow-950 bridalone py-12 px-4">
        <div>
          <Image src="/stok1.jpg" width={800} height={600} />
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Location</h1>
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
          <button className="bg-emerald-200">Book Today!</button>
        </div>
      </div>
    </div>
  );
}
