import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

const BridalSectionOne = () => {
  return (
    <div className="grid lg:grid-cols-2 text-yellow-950 bridalone py-12 px-4">
      <div className="flex justify-center items-center flex-col text-center mx-10 lg:mx-24">
        <div className="text-6xl brown-text ">
          <h1 className="fancy-font">Weddings, showers, graduations & more</h1>
        </div>
        <div className="other-font">
          <p className="tracking-widest text-xl my-4">
            For any event you're organizing, choose Haley Station as the top
            destination in Escanaba. Our recently designed venue features a
            fireplace, hardwood flooring, a bar, and more amenities.
            Accommodating up to 225 guests, your event can be both sophisticated
            and cozy.
          </p>
    
        </div>
      </div>
      <div>
        <Image src="/hstwo.jpg" width={900} height={900} />
      </div>
    </div>
  );
};

export default BridalSectionOne;
