import ContactForm from "@/components/ContactForm";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { Lora } from "next/font/google";
import Navbar from "@/components/Navbar";

const lora = Lora({ subsets: ["latin"] });
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className=" spacebg text-6xl text-white flex justify-center items-center">
        <div>
          <h1 className="text-8xl text-white fancy-font">Contact Us</h1>
        </div>
        <div className="other-font"></div>
      </div>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default Contact;
