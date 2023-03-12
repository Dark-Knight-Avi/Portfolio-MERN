import React from "react";

const About = () => {
  return (
    <div className="flex flex-row md:flex-col items-center bg-slate-900 p-10 md:p-30 lg:p-28 h-min-[90vh]">
      <div className="flex flex-col md:flex-row justify-center text-white w-full lg:w-[75%]">
        <div className="puff-in-center flex justify-center items-center my-10 w-[25%] md:my-0 mx-10 p-5 border-2 border-white">
          <img
            className="animate-pulse"
            src={
              "https://raw.githubusercontent.com/Dark-Knight-Avi/Portfolio-MERN/master/src/assets/avatar.jpg"
            }
            alt="Avatar"
          />
        </div>
        <p className=" text-white ml-8 pl-5 text-justify text-sm pr-20  border-l-2 border-white w-[100%] tracking-wide leading-9">
          My name is <strong>Aritra Karmakar</strong>, I'm a{" "}
          <strong>full-stack developer</strong> based in Bangalore, Karnataka,
          India. I enjoy creating things that live on the internet. I have
          developed many types of web apps. My interest in web development
          started in 2020 when I was stuck in my native home in the Pendamic
          time of COVID. I'm a dedicated and efficient full stack developer with
          2+ years experience in application layers, presentation layers, and
          databases. Certified in both <strong>F/E</strong> and{" "}
          <strong>B/E</strong> technologies. Seeking to further improve{" "}
          <strong>Django</strong> and <strong>MERN</strong> skills as a full
          stack developer.
        </p>
      </div>
      {/* <div className="flex flex-col justify-center max-w-7xl text-white">
        <h1>My Skills:</h1>
        <h1>Languages:</h1>
      </div> */}
    </div>
  );
};

export default About;
