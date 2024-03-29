import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

const BridalSectionOne = () => {
  return (
    <div className="grid grid-cols-2 text-yellow-950 bridalone py-12 px-4">
      <div className="flex justify-center items-center flex-col mx-24">
        <div className="text-6xl brown-text ">
          <h1 className='fancy-font'>
            Weddings, showers, graduations & more
          </h1>
        </div>
        <div className={lora.className}>
          <p className="tracking-widest text-xl my-4">
            For any event you're organizing, choose Haley Station as the top
            destination in Escanaba. Our recently designed venue features a
            fireplace, hardwood flooring, a bar, and more amenities.
            Accommodating up to 60 guests, your event can be both sophisticated
            and cozy.
          </p>
          <p className="tracking-widest text-xl">
            We used to be a roller rink, and before that, something else. Built
            in 1400 BCE., we’ve preserved the vintage charm of the building
            while elevating the space to suit the unique needs of your special
            day.
          </p>
        </div>
      </div>
      <div>
        <Image src="/stok1.jpg" width={800} height={600} />
      </div>
    </div>
  );
};

export default BridalSectionOne;
