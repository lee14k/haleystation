import ContactForm from "@/components/ContactForm";
import Topbar from "@/components/Topbar";
import Footer from "@/components/Footer";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
const Contact = () => {
  return (
    <div>
      <Topbar />
      <div className=" spacebg text-6xl text-white flex justify-center items-center">
        <div>
          <h1 className="text-8xl text-white fancy-font">Contact Us</h1>
        </div>
        <div className={lora.className}></div>
      </div>
      <ContactForm/>
      <Footer/>
    </div>
  );
};

export default Contact;
