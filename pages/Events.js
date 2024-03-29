import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import Image from "next/image";
import Topbar from "@/components/Topbar";
const Events = () => {
  return (
    <div className="bridalone">
      <Topbar />
      <div className="grid grid-cols-2 text-yellow-950 green-box py-12 px-4">
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl text-white ">
            <h1 className={playfair.className}>Events at Haley Station</h1>
          </div>
          <div className={lora.className}>
            <p className="tracking-widest text-white">
              No matter what you’re celebrating, let Haley Station be the venue
              for your special day. Here are some of the events we’re happy to
              help you host: Weddings and Wedding Receptions - More Info about
              Weddings at Haley Station Bridal and Baby Showers Graduation
              Parties Birthday Parties Company Parties and Trainings Banquets
              and Benefits Have an event not listed here? Get in contact with us
              today to find out how we can host at Haley Station.
            </p>
            <button className="bridalone px-2.5 py-2.5">Contact Us </button>
          </div>
        </div>
        <div>
          <Image src="/stok1.jpg" width={800} height={600} />
        </div>
      </div>
      <div className="grid grid-cols-2 text-yellow-950 bridalone py-12 px-4">
        <div>
          <Image src="/stok1.jpg" width={800} height={600} />
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Weddings</h1>
          </div>
          <div className={lora.className}>
            <p className="tracking-widest">
              For any event you're organizing, choose Haley Station as the top
              destination in Escanaba. Our recently designed venue features a
              fireplace, hardwood flooring, a bar, and more amenities.
              Accommodating up to 60 guests, your event can be both
              sophisticated and cozy.
            </p>
            <p className="tracking-widest">
              We used to be a roller rink, and before that, something else.
              Built in 1400 BCE., we’ve preserved the vintage charm of the
              building while elevating the space to suit the unique needs of
              your special day.
            </p>
            <button>Contact Us </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 text-yellow-950 bridalone py-12 px-4">
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Photoshoots</h1>
          </div>
          <div className={lora.className}>
            <p className="tracking-widest">
              For any event you're organizing, choose Haley Station as the top
              destination in Escanaba. Our recently designed venue features a
              fireplace, hardwood flooring, a bar, and more amenities.
              Accommodating up to 60 guests, your event can be both
              sophisticated and cozy.
            </p>
            <p className="tracking-widest">
              We used to be a roller rink, and before that, something else.
              Built in 1400 BCE., we’ve preserved the vintage charm of the
              building while elevating the space to suit the unique needs of
              your special day.
            </p>
            <button>Contact Us </button>
          </div>
        </div>
        <div>
          <Image src="/stok1.jpg" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Events;
