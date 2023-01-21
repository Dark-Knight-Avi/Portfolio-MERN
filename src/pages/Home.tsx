import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center bg-slate-900 p-5 md:p-16 lg:p-28">
        <div className="flex flex-col justify-center max-w-7xl text-white">
          <h1 className="tracking-in-expand text-base font-medium tracking-wider ">
            Welcome to my portfolio
          </h1>
          <span className="underline underline-offset-2 text-white -mt-3">
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
          <div className="f lex flex-col text-white mt-5">
            <h1 className="tracking-in-expand text-4xl md:text-[50px] font-semibold">
              Hello I'm Aritra Karmakar
            </h1>
            <p className="tracking-in-expand lg:text-[35px] md:text-[30px] text-[25px] content my-5 tracking-wide">
              <div className="content__container">
                <p className="content__container__text">I'm a</p>

                <ul className="content__container__list lg:pl-[100px] md:pl-[78px] pl-[65px]">
                  <li className="content__container__list__item">
                    MERN Developer
                  </li>
                  <li className="content__container__list__item">
                    Django Developer
                  </li>
                  <li className="content__container__list__item">
                    React Developer
                  </li>
                  <li className="content__container__list__item">
                    TypeScript Developer
                  </li>
                </ul>
              </div>
            </p>
          </div>
          <p className="mt-4 text-sm lg:w-[52%] md:w-[100%] tracking-wide leading-7">
            Dedicated and efficient full stack developer with 2+ years
            experience in application layers, presentation layers, and
            databases. Certified in both F/E and B/E technologies. Seeking to
            further improve Django and MERN skills as a full stack developer.
          </p>
          <div className="flex mt-10 space-x-5">
            <button className="bg-white text-black px-6 py-2 hover:bg-slate-200 active:bg-slate-300 font-semibold">
              About Me
            </button>
            <button className="bg-slate-800 text-white border-2 border-white px-6 py-2 hover:brightness-200 active:brightness-150 font-semibold">
              Contact Me
            </button>
          </div>
        </div>
        <div className="puff-in-center w-[40%] md:w-[50%] lg:w-[32%] my-10 md:my-0 mx-10 p-5 border-2 border-white">
          <img
            className="animate-pulse"
            src={
              "https://raw.githubusercontent.com/Dark-Knight-Avi/Portfolio-MERN/master/src/assets/avatar.jpg"
            }
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
