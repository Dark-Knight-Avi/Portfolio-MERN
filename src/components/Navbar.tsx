import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center bg-slate-900 text-white ">
      <nav className="self-center bg-slate-900 text-white w-full max-w-7xl ">
        <div className="flex flex-col lg:flex-row justify-around items-center ">
          <h1 className="uppercase pl-5 py-4 text-lg font-sans font-bold">
            akfolio
          </h1>
          <ul className="hidden lg:flex items-center text-[18px] font-semibold pl-32">
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <a href="/">Home</a>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <a href="/">About</a>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <a href="/">Projects</a>
            </li>
            <li className="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
              <a href="/">Contact</a>
            </li>
          </ul>
          <div className=" text-center text-base pr-5 inline-flex">
            <a
              href="https://twitter.com/AvijeetKarmaka7"
              target={'_blank'}
              className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/avi_k_aritra/"
              target={'_blank'}
              className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/avijeet.karmakar.9"
              target={'_blank'}
              className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://github.com/Dark-Knight-Avi"
              target={'_blank'}
              className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
            >
              <i className="fa fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aritra-karmakar-82b622214/"
              target={'_blank'}
              className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
            >
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
