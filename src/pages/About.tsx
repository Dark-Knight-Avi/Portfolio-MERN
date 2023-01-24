import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-slate-900 p-10 md:p-30 lg:p-28    ">
      <div className="puff-in-center w-[75%] md:w-[75%] lg:w-[30%] my-10 md:my-0 mx-10 p-5 border-2 border-white">
        <img
          className="animate-pulse"
          src={
            "https://raw.githubusercontent.com/Dark-Knight-Avi/Portfolio-MERN/master/src/assets/avatar.jpg"
          }
          alt="Avatar"
        />
      </div>
      <div className="flex flex-col justify-center max-w-7xl text-white">
        <p className=" text-white text-sm lg:w-[52%] md:w-[100%] tracking-wide leading-7">
          My name is Ian Dunkerley, I'm a full-stack developer based in
          Bangalore, Karnataka, India. I enjoy creating things that live on the
          internet. I have developed many types of web apps. My interest in web
          development started in 2020 when I was stuck in my native home in the
          Pendamic time of COVID. I'm a dedicated and efficient full stack
          developer with 2+ years experience in application layers, presentation
          layers, and databases. Certified in both F/E and B/E technologies.
          Seeking to further improve Django and MERN skills as a full stack
          developer.
        </p>
      </div>
    </div>
  );
};

export default About;
