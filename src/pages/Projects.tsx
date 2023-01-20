import React from "react";
import IProject from "../interfaces/IProject";
import { project } from "../utils/project";

const Projects = () => {
  return (
    <div>
      Hello World!
      {project.map((proj: IProject) => {
        return (
          <div key={proj.project__id}>
            <h2>{proj.project__title}</h2>
            <img src={proj.project__template} alt="" width={"300px"} />
            <ul>
              {proj.project__desc.map((desc) => (
                <li>{desc}</li>
              ))}
            </ul>
            <strong>{proj.project__tag}</strong>
            <div>
              I used{" "}
              {proj.project__techs.map((tech) => (
                <span>{tech}</span>
              ))}
            </div>
            <br />
            <a href={proj.project__link} target="_blank">
              View Project
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
