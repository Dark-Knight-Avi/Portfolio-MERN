import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <span className="ml-3 text-xl">AKFOLIO</span>
        </a>
        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
          © 2020 AKFOLIO —
          <a
            href="https://twitter.com/knyttneve"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @aritra
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://twitter.com/AvijeetKarmaka7"
            target={"_blank"}
            className="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"
          >
            <i className="fa fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/avi_k_aritra/"
            target={"_blank"}
            className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
          >
            <i className="fa fa-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/avijeet.karmakar.9"
            target={"_blank"}
            className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
          >
            <i className="fa fa-facebook"></i>
          </a>
          <a
            href="https://github.com/Dark-Knight-Avi"
            target={"_blank"}
            className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
          >
            <i className="fa fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aritra-karmakar-82b622214/"
            target={"_blank"}
            className="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"
          >
            <i className="fa fa-linkedin"></i>
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
