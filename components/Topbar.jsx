import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
const Topbar = () => {
  return (
    <div className="top-0 left-0 right-0 fixed z-50 ">
      <nav className=" flex  top-0 z-50 ">
        <div className={lora.className}>
          <NavMobile />
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
