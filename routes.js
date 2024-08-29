export const routes = [
  { title: "Home", href: "/" },
  {
    title: "About",
    href: "/About",
    submenu: [
      { title: "About", href: "/About" },
      { title: "Space", href: "/Space" },
      { title: "Location", href: "/Location" },
      { title: "Rates", href: "/Rates" },
      { title: "Preferred Vendors", href: "/PreferredVendors" },
    ],
  },
  { title: "Special Occasions", href: "/Special-Occasions" },
  { name: "Upcoming Events", href: "/Upcoming-Events", current: false },
  { title: "Gallery", href: "/Gallery" },
  { title: "Contact", href: "/Contact" },
];
