import { useState, useEffect, useRef } from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

import Hamburger from "../assets/shared/icon-hamburger.svg";
import CloseIcon from "../assets/shared/icon-close.svg";

const Navbar = ({ Logo, path, activeTab, onActive }) => {
  const [toggle, setToggle] = useState(false);
  const mobileNavRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!mobileNavRef.current) {
        return;
      }
      if (!mobileNavRef.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const renderedListsDesktop = path.map(({ title, link }, index) => (
    <div key={title} className="relative">
      <li>
        <Link
          to={link}
          onClick={() => onActive(title)}
          className="text-lg uppercase tracking-[2.36px]"
        >
          <span className="hidden font-bold xl:inline">0{index} </span>
          {title}
        </Link>
      </li>
      <div
        className={`absolute -bottom-8 w-full ${
          title === activeTab ? `border-b-[3px] border-white` : null
        }`}
      />
    </div>
  ));

  const renderedListsMobile = path.map(({ title, link }, index) => (
    <li key={title}>
      <Link
        to={link}
        className="text-lg uppercase tracking-[2.36px]"
        onClick={handleToggle}
      >
        {`0${index} ${title}`}
      </Link>
    </li>
  ));

  return (
    <>
      {/* Desktop Menu */}
      <div className="md:relative xl:mt-14">
        <Container className="flex items-center justify-between py-6">
          <Link to="/">
            <img src={Logo} width="48" alt="Logo" />
          </Link>
          {/* Hamburger Icon */}
          <img
            className="cursor-pointer md:hidden"
            src={Hamburger}
            width="24"
            height="21"
            alt="hamburger-menu-icon"
            onClick={() => setToggle(true)}
          />
          <ul className="hidden md:flex md:justify-between md:gap-10 xl:mr-20">
            {renderedListsDesktop}
          </ul>
        </Container>
        {/* Background on Desktop Menu */}
        <div className="hidden md:absolute md:inset-y-0 md:right-0 md:-z-[5] md:block md:w-2/3 md:max-w-screen-xl md:bg-white md:bg-opacity-5 md:filter md:backdrop-blur-xl md:backdrop-opacity-95 lg:w-[52%]" />
        <hr className="hidden xl:absolute xl:left-[11.5%] xl:top-1/2 xl:block xl:w-[39%] xl:max-w-7xl xl:border xl:border-[#383B4B]" />
      </div>
      {/* Mobile Menu */}
      <div
        ref={mobileNavRef}
        className={
          toggle
            ? `absolute right-0 top-0 flex h-screen bg-dark bg-transparent bg-opacity-10 px-14 backdrop-blur-xl md:hidden`
            : `hidden bg-transparent md:hidden`
        }
      >
        <img
          className=" absolute right-0 top-0 cursor-pointer p-9"
          onClick={() => setToggle(false)}
          src={CloseIcon}
          alt="close-menu-icon"
        />
        <ul className="mt-28 flex-col space-y-8 text-white">
          {renderedListsMobile}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
