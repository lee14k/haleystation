import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";

const Topbar = () => {
  return (
    <div className="top-0 left-0 right-0 fixed z-50 ">
      <nav className=" flex  top-0 z-50">
        <NavMobile />
      </nav>
    </div>
  );
};

export default Topbar;
