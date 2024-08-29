import Topbar from "../components/Topbar";
import { Playfair_Display } from "next/font/google";
import { Lora } from "next/font/google";
import Image from "next/image";
const lora = Lora({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PVFill from "@/components/PVFill";

export default function PreferredVendors() {
  return (
    <div>
      <Navbar />
     <PVFill />
      <Footer />
    </div>
  );
}
ac