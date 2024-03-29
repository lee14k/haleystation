import { BiHomeAlt2 } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { PiChatCircleBold } from "react-icons/pi";
import { IoPricetagsOutline } from "react-icons/io5";

export const routes = [
  {
    key: 0,
    title: "Home",
    href: "/",
    Icon: BiHomeAlt2,
  },
  {
    key: 1,
    title: "About",
    href: "/About",
    Icon: FiSearch,
  },
  {
    key: 2,
    title: "Events",
    href: "/Events",
    Icon: IoPricetagsOutline,
  },
  {
    key: 3,
    title: "Gallery",
    href: "/Gallery",
    Icon: PiChatCircleBold,
  },
  {
    key: 4,
    title: "Contact",
    href: "/Contact",
    Icon: PiChatCircleBold,
  },
 
];
