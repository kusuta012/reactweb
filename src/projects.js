// projects.js

import React from "react";
import project1Image from "./images/project1.png";
import project2Image from "./images/project2.png";

const Projects = () => {
  const projects = [
    {
      title: "Krack Discord Bot",
      image: project1Image,
      githubLink: "https://github.com/kusuta012/Krack", // Add your GitHub link here
    },
    {
      title: "Automated Code Quality Improvement System",
      image: project2Image,
      githubLink: "https://acqis.onrender.com",
    },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto py-8 projects-container" id="projects">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="space4"></div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.title} className="project-image" />
            </a>
            <h3 className="project-title">{project.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
