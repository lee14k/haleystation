import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { FiFacebook } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center py-4 footerwrap">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-6xl fancy-font">Haley Station</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-24">
        <div>
          <h2 className="text-3xl fancy-font"> Visit Us</h2>
          <ul className="flex flex-col">
            <li className="flex">
              <PhoneIcon className="h-6 w-6" /> Outdoor
            </li>
            <li className="flex">
              <MapPinIcon className="h-6 w-6" /> Outdoor
            </li>
            <li className="flex">
              <EnvelopeIcon className="h-6 w-6" /> Outdoor
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
          <li className="flex">
            <FiFacebook className="h-6 w-6" /> Outdoor
          </li>
          <li className="flex"></li>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <p className="text-lg">© 2024 Haley Station</p>
      </div>
    </div>
  );
}
