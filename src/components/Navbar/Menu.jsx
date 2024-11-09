import { CgMenuRight } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/BGMI.webp";

const Menu = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [active, setActive] = useState("Home");
  const location = useLocation();
  const currentPath = location.pathname;

  const clickHandler = (id) => {
    setActive(id);
    setMobileMenu(false);
  };

  const activeClass = "hover:text-yellow-300 font-gSB";

  return (
    <header className="bg-black text-white p-4 w-full mt-[34px]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-4xl font-bold">
          <img src={logo} alt="LOGO" className="w-12 md:w-10" />
        </div>

        <nav className="hidden md:flex space-x-4 text-base font-medium text-center gap-5 items-center">
          <Link
            to="/"
            className={`${currentPath === "/" ? activeClass : ""} hover:text-yellow-200 font-gSB`}
            onClick={() => clickHandler("Home")}
          >
            HOME
          </Link>
          <Link
            to="/Events"
            className={`${currentPath.startsWith("/Events") ? activeClass : ""} hover:text-yellow-300 font-gSB`}
            onClick={() => clickHandler("Events")}
          >
            EVENTS
          </Link>
          <Link
            to="/Teams"
            className={`${currentPath === "/Teams" ? activeClass : ""} hover:text-yellow-300 font-gSB`}
            onClick={() => clickHandler("Teams")}
          >
            TEAMS
          </Link>
          <Link
            to="/Gallery"
            className={`${currentPath === "/Gallery" ? activeClass : ""} hover:text-yellow-300 font-gSB`}
            onClick={() => clickHandler("Gallery")}
          >
            GALLERY
          </Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)} className="text-2xl text-white">
            {mobileMenu ? <IoMdClose /> : <CgMenuRight />}
          </button>
        </div>

        <span
            onClick={() => setMobileMenu(!mobileMenu)} 
            className="hover:text-yellow-500 text-white md:text-xl md:font-normal leading-none ml-5 p-1 cursor-pointer shadow-[inset_0_0_0_0_white] shadow-white duration-300 hover:shadow-white text-2xl font-semibold"
            style={{ fontFamily: "Gilroy" }}
            >
            <Link
                to="/register" 
                onClick={() => clickhandler("Register")}
                className="bg-yellow-400 text-black font-gL py-2 px-4 rounded-md hover:bg-yellow-300"
                style={{ fontFamily: "Gilroy" }}
            >
                REGISTER NOW
            </Link>
        </span>

      </div>

      {mobileMenu && (
        <div className="flex flex-col items-center md:hidden bg-black text-white w-full p-4 gap-4">
          <Link
            to="/"
            className="hover:text-yellow-200 font-gSB text-lg"
            onClick={() => clickHandler("Home")}
          >
            HOME
          </Link>
          <Link
            to="/Events"
            className="hover:text-yellow-300 font-gSB text-lg"
            onClick={() => clickHandler("Events")}
          >
            EVENTS
          </Link>
          <Link
            to="/AboutUs"
            className="hover:text-yellow-300 font-gSB text-lg"
            onClick={() => clickHandler("Teams")}
          >
            TEAMS
          </Link>
          <Link
            to="/Gallery"
            className="hover:text-yellow-300 font-gSB text-lg"
            onClick={() => clickHandler("Gallery")}
          >
            GALLERY
          </Link>
          
        </div>
      )}
    </header>
  );
};

export default Menu;
