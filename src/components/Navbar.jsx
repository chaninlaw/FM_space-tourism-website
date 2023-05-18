import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../assets/shared/icon-hamburger.svg';
import Close from '../assets/shared/icon-close.svg';

const Navbar = ({ Logo, path }) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const renderedListsDesktop = path.map(({ title, link }) => (
    <li key={title}>
      <Link to={link} className="text-lg uppercase tracking-[2.36px]">
        {title}
      </Link>
    </li>
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
      <div className="container absolute inset-x-0 mx-auto flex w-10/12 items-center justify-between bg-transparent py-6 text-white">
        {/* Logo */}
        <img src={Logo} width="48" alt="Logo" />
        {/* Hamburger Icon */}
        <img
          className="cursor-pointer md:hidden"
          src={Hamburger}
          width="24"
          height="21"
          alt="hamburger-menu-icon"
          onClick={handleToggle}
        />
        {/* Desktop Menu */}
        <ul className="hidden md:flex md:gap-8">{renderedListsDesktop}</ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          toggle
            ? `absolute right-0 top-0 flex h-screen bg-dark bg-transparent bg-opacity-10 px-14 backdrop-blur-xl md:hidden`
            : `hidden bg-transparent md:hidden`
        }
      >
        <img
          className=" absolute right-0 top-0 cursor-pointer p-9"
          onClick={handleToggle}
          src={Close}
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
