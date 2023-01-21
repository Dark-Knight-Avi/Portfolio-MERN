import React, { FC, useState } from "react";
import NavBarProps from "../interfaces/NavBarProps";
import Menu from "./Menu";
import SocialMedias from "./SocialMedias";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

const Navbar: FC<NavBarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="flex justify-center bg-slate-900 text-white ">
      <nav
        className={`self-center bg-slate-900 text-white w-full max-w-7xl lg:px-0 px-10`}
      >
        <div className="flex lg:justify-around justify-between items-center ">
          <h1 className="uppercase pl-5 py-4 text-lg font-sans font-bold">
            akfolio
          </h1>
          {isOpen ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setIsOpen(false)}
              className="lg:hidden"
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setIsOpen(true)}
              className="lg:hidden"
            />
          )}
          <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
            <Menu />
          </ul>
          <div className=" text-center text-base pr-5 hidden lg:inline-flex">
            <SocialMedias />
          </div>
        </div>
        {isOpen && (
          <div className="bg-slate-800 scroll-smooth h-[300px] w-[180px] z-10 absolute right-14 top-13 flex flex-col justify-between">
            <ul className="flex flex-col my-5">
              <Menu />
            </ul>
            <div className="flex ml-2 justify-center my-5">
              <SocialMedias />
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
