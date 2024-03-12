import Image from "next/image";
import { Inter } from "next/font/google";
import BridalSectionOne from "@/components/BridalSectionOne";
import ThreePhotoRowTwo from "@/components/ThreePhotoRowTwo";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <p>Welcome to the</p>
      <h1>Haley Station</h1>
      <h2>Wedding & Event Venue</h2>
      <p>Escanaba, MI</p>
      <button>Learn More</button>
      <BridalSectionOne />
      <ThreePhotoRowTwo
        photoOne={"/stok1.jpg"}
        photoTwo={"/stok1.jpg"}
        photoThree={"/stok1.jpg"}
      />
      <ThreePhotoRowTwo
        textOne="weddings"
        textTwo="photos"
        textThree="events"
      />
      <ThreePhotoRowTwo
        textOne="weddings"
        textTwo="photos"
        textThree="events"
        backgroundColor="#668260" 
        optionalHead={"What People Are Saying... "}
      />
     
      <ThreePhotoRowTwo
        textOne="weddings"
        textTwo="photos"
        textThree="events"
        backgroundColor="#E1D6C9" // Direct color value
        optionalHead={"Haley Station Weddings & Event Venue"}
      />
    </div>
  );
}
