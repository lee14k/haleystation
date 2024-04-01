import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import Image from "next/image";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { StarIcon } from "@heroicons/react/24/outline";
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
            <p className="tracking-widest text-white text-2xl">
              No matter what you’re celebrating, let Haley Station be the venue
              for your special day. Here are some of the events we’re happy to
              help you host: Weddings and Wedding Receptions - More Info about
              Weddings at Haley Station Bridal and Baby Showers Graduation
              Parties Birthday Parties Company Parties and Trainings Banquets
              and Benefits Have an event not listed here? Get in contact with us
              today to find out how we can host at Haley Station.
            </p>
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
            <p className="tracking-widest text-2xl">
              We would be honored to help make your special day perfect. Our
              venue is perfect for weddings and wedding receptions. We can
              accommodate up to 225 guests, and our venue features a fireplace,
              hardwood flooring, a bar, and more amenities. Our venue is both
              sophisticated and cozy, making it the perfect place to celebrate
              your love
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 text-yellow-950 green-box py-12 px-4">
          <div className="flex justify-center items-center flex-col">
            <div className="text-6xl text-white ">
              <h1 className={playfair.className}>Showers & Sprinkles</h1>
            </div>
            <div className={lora.className}>
              <p className="tracking-widest text-white text-2xl">
                From bridal showers to baby showers and baby sprinkles, we can
                help provide a beautiful venue for your intimate gathering. Our
                space is perfect for hosting your friends and family as you
                celebrate the upcoming arrival of your little one. We can help
                you plan a memorable event that will be cherished for years to
                come. Contact us today to learn more about hosting your baby
                shower at Haley Station.
              </p>
              <button className="bridalone px-2.5 py-2.5">Contact Us </button>
            </div>
          </div>
          <div>
            <Image src="/stok1.jpg" width={800} height={600} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 text-yellow-950 bridalone py-12 px-4">
        <div>
          <Image src="/stok1.jpg" width={800} height={600} />
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Corporate Gatherings</h1>
          </div>
          <div className={lora.className}>
            <p className="tracking-widest text-2xl">
              If you've been looking for a private party or corporate event
              venue in Delta County and surrounding areas of the Upper Peninsula
              of Michigan, you've come to the right place. One Eleven East hosts
              all types of private events, from baby showers to business
              meetings. Our historic event space is a great backdrop for
              whatever you have planned. We often host:
              <ul>
                <li className="flex gap-4">
                  <StarIcon className="h-6 w-6" />
                  Corporate events
                </li>
                <li className="flex gap-4">
                  {" "}
                  <StarIcon className="h-6 w-6" />
                  Christmas and holiday parties
                </li>
                <li className="flex gap-4">
                  {" "}
                  <StarIcon className="h-6 w-6" />
                  Pop-up shops
                </li>
              </ul>
              We would love to hear from you! Call us today to chat about
              details for your upcoming event or to arrange a private tour of
              our venue.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 text-yellow-950 green-box py-12 px-4">
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Photoshoots</h1>
          </div>
          <div className={lora.className}>
            <p className="tracking-widest text-2xl">
              For any event you're organizing, choose Haley Station as the top
              destination in Escanaba. Our recently designed venue features a
              fireplace, hardwood flooring, a bar, and more amenities.
              Accommodating up to 60 guests, your event can be both
              sophisticated and cozy.
            </p>
          </div>
        </div>
        <div>
          <Image src="/stok1.jpg" width={800} height={600} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
