import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-black rounded-full" />
        <span className="text-sm font-semibold tracking-widest">MR OMAR</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-12 text-md text-zinc-400">
        <button
          className="sm:hidden block text-black font-medium"
          onClick={toggleMenu}
        >
          Menu
        </button>
        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } sm:translate-x-0 transform  transition-transform duration-300 ease-in-out sm:flex flex-col sm:flex-row gap-12 text-md text-zinc-400 absolute sm:relative top-0 right-0 bg-white h-full w-9/12 sm:bg-transparent sm:h-auto sm:w-auto`}
        >
          <Link href="#" className="text-black font-medium block text-center pt-8">
            Home
          </Link>
          <Link href="#" className="text-black block text-center pt-8">
            Projects
          </Link>
          <Link href="#" className=" text-black block text-center pt-8">
            Contact
          </Link>
          <button
            className="sm:hidden block text-black font-medium absolute top-2 right-2"
            onClick={closeMenu}
          >
            X
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
