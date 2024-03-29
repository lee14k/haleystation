import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { FiFacebook } from "react-icons/fi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center py-4 footerwrap py-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl fancy-font">Haley Station</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-24">
        <div>
          <h2 className="text-3xl fancy-font"> Visit Us</h2>
          <ul className="flex flex-col gap-2">
            <li className="flex gap-2">
              <PhoneIcon className="h-6 w-6" /> (906) 261-9159
            </li>
            <li className="flex gap-2">
              <MapPinIcon className="h-6 w-6" /> 319 Stephenson Ave, Escanaba,
              MI 49829
            </li>
            <li className="flex gap-2">
              <EnvelopeIcon className="h-6 w-6" /> Haleystationevents@gmail.com
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-3xl fancy-font">Hours</h2>
          <ul>
            <li>By Appointment Only</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl fancy-font">Get Social</h2>
          <ul className="flex">
            <li className="flex">
              <BiLogoFacebookCircle className="h-10 w-10" />
            </li>
            <li className="flex">
              {" "}
              <BiLogoInstagram className="h-10 w-10" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center"></div>
    </div>
  );
}
