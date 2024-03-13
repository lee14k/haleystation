import NavMobile from "./NavMobile";
import NavDesktop  from "./NavDesktop";

const Topbar = () => {
  return (
    <div className=" top-0 left-0 right-0  border-b border-neutral-700">
      <nav className="container flex items-center justify-between py-1 lg:py-5">
        <span className="text-lg">⚡️</span>
        <NavMobile />
      </nav>
    </div>
  );
};

export default Topbar;