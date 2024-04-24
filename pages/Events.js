import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({ subsets: ["latin"] });
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import Image from "next/image";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { StarIcon } from "@heroicons/react/24/outline";
import Navbar from "@/components/Navbar";
import Link from "next/link";
const Events = () => {
  return (
    <div className="bridalone">
      <Navbar />
      <div>
        <div className=" spacebg text-6xl text-white flex justify-center items-center">
          <div>
            <h1 className="text-8xl text-white fancy-font">Events</h1>
          </div>
          <div className={lora.className}></div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 text-yellow-950 pink-box py-12 ">
        <div className="ml-10">
          <Image src="/newhsphoto3.jpg" width={800} height={600} />
        </div>
        <div className="flex justify-center items-center flex-col px-10">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Weddings</h1>
          </div>
          <div className={lora.className}>
            <p className=" text-2xl">
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
        <div className="grid lg:grid-cols-2 text-yellow-950 bridal-one py-12 px-4">
          <div className="flex justify-center items-center flex-col">
            <div className="text-6xl  ">
              <h1 className={playfair.className}>Showers & Sprinkles</h1>
            </div>
            <div className={lora.className}>
              <p className="text-2xl px-10">
                From bridal showers to baby showers and baby sprinkles, we can
                help provide a beautiful venue for your intimate gathering. Our
                space is perfect for hosting your friends and family as you
                celebrate the upcoming arrival of your little one. We can help
                you plan a memorable event that will be cherished for years to
                come. Contact us today to learn more about hosting your shower at Haley Station
              </p>
            </div>
          </div>
          <div>
            <Image src="/newhsphoto1.jpg" width={800} height={600} />
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 text-yellow-950 pink-box py-12 px-4">
        <div>
          <Image src="/newhsphoto5sq.png" width={800} height={600} />
        </div>
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Corporate Gatherings</h1>
          </div>
          <div className={lora.className}>
            <p className="px-10 text-2xl">
              If you've been looking for a private party or corporate event
              venue in Delta County and surrounding areas of the Upper Peninsula
              of Michigan, you've come to the right place. Haley Station provides a unique, versatile, and timeless space for your next corporate event. Our venue is perfect for:
              <ul className="list-disc ">
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
      <div className="grid lg:grid-cols-2 text-yellow-950 bridal-one py-12 px-10">
        <div className="flex justify-center items-center flex-col">
          <div className="text-6xl ">
            <h1 className={playfair.className}>Photoshoots</h1>
          </div>
          <div className="other-font">
            <p className="text-2xl px-10">
            Our venue is perfect for photoshoots, film & more. With tons of natural light, white walls and tall ceilings, we are perfectly suited for product photography, bridal shoots and more. 
We'd love to hear from you!  Contact us today to learn about how you can book our space. 
            </p>
            <div className="ml-10">
            <Link href="/Contact">
                <button className="ctabutton pink-box px-8 py-6 text-3xl my-4">
                  Contact Us{" "}
                </button>
              </Link>
              </div>
          </div>
        </div>
        <div>
          <Image src="/hsone.jpg" width={800} height={600} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Events;
