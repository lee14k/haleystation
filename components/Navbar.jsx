import { useState } from "react";
import Link from "next/link";
import { Disclosure,} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from "next/image"; 
const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "About",
    href: "/",
    current: false,
    children: [
      {name:"About", href:"/About"},
      { name: "Space", href: "/Space" },
      { name: "Rates", href: "/Rates" },
      { name: "Location", href: "/Location" },
      { name: "Preferred Vendors", href: "/PreferredVendors" },
    ],
  },
  { name: "Events", href: "/Events", current: false },
  { name: "Gallery", href: "/Gallery", current: false },
  { name: "Contact", href: "/Contact", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };
  return (
    <Disclosure as="nav" className="pt-12 bg-white fancy-font ">
      
      {({ open }) => (
        <>
       
          <div className="flex justify-center pt-8">
       
            <div className="flex h-12 justify-center items-center">
              <div className="absolute inset-y-0 left-0 flex sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center">
                <div className=" sm:ml-6 sm:block">
                  <div className="flex space-x-12 ">
                  {navigation.map((item) => (
  <div key={item.name}>
    {/* Check if the item has children */}
    {item.children ? (
      // Render as a span or button, not as a link
      <span
        className="cursor-pointer"
        aria-current={item.current ? 'page' : undefined}
        onClick={() => toggleDropdown(item.name)}
      >
        {item.name}
      </span>
    ) : (
      // Render as a link if there are no children
      <Link href={item.href}>
        <div className={classNames(item.current ? "text-gray-900" : "text-gray-500", "hover:text-gray-900")}>
          {item.name}
        </div>
      </Link>
    )}
                        {/* Render dropdown if item has children */}
                        {item.children && activeDropdown === item.name && (
      <div className="absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1">
          {item.children.map((subItem) => (
            <Link key={subItem.name} href={subItem.href}>
              <div className="block px-4 py-2 text-sm hover:bg-gray-100">
                {subItem.name}
              </div>
            </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
