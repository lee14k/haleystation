export const routes = [
  { title: "Home", href: "/" },
  {
    title: "About",
    href: "/about",
    submenu: [
      { title: "About", href: "/about"},
      { title: "Space", href: "/Space" },
      { title: "Location", href: "/Rates" },
      { title: "Rates", href: "/Location" },
      { title: "Preferred Vendors", href: "/PreferredVendors" },
    ],
  },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];