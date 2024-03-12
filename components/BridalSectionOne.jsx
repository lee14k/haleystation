import Image from "next/image";
import { Playfair_Display } from "next/font/google";


const BridalSectionOne = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <h1>Weddings, showers, graduations & more</h1>
        <p>
          For any event you're organizing, choose Haley Station as the top
          destination in Escanaba. Our recently designed venue features a
          fireplace, hardwood flooring, a bar, and more amenities. Accommodating
          up to 60 guests, your event can be both sophisticated and cozy.
        </p>
        <p>
          We used to be a roller rink, and before that, something else. Built in
          1400 BCE., we’ve preserved the vintage charm of the building while
          elevating the space to suit the unique needs of your special day.
        </p>
      </div>
      <div>
        <Image
        src="/stok1.jpg"
        width={300}
        height={300}
        />
      </div>
    </div>
  );
};

export default BridalSectionOne;