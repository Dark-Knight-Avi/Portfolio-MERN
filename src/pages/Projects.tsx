import React from "react";
import IProject from "../interfaces/IProject";
import { project } from "../utils/project";

const Projects = () => {
  return (
    <div className="p-10 md:p-30 lg:p-28 flex flex-col bg-slate-900 text-white">
      {project.map((proj: IProject) => {
        return (
          <div
            key={proj.project__id}
            className="bg-slate-800 flex md:flex-row flex-col hover:shadow-md my-5 p-7 hover:bg-slate-700 hover:shadow-[#505c71]"
          >
            <img src={proj.project__template} alt="" width={"300px"} />
            <div className="md:mx-10 my-10">
              <h2 className="font-bold text-2xl sm:text-3xl mb-5">{proj.project__title}</h2>
              <ul className="ml-5 mb-2">
                {proj.project__desc.map((desc) => (
                  <li className="list-disc">{desc}</li>
                ))}
              </ul>
              <strong className="bg-slate-600 rounded-md px-4 py-1 text-sm my-2">{proj.project__tag}</strong>
              <div className="mt-1">
                I used{" "}
                {proj.project__techs.map((tech) => (
                  <span>{tech}</span>
                ))}
              </div>
              <br />
              <a className="border-white border-2 text-white hover:bg-slate-600 focus:bg-slate-600 px-5 py-3 font-bold" href={proj.project__link} target="_blank">
                View Project
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
