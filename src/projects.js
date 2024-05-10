import React, { useState, useEffect } from "react";
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
      title: "",
      image: project2Image,
      githubLink: "https://ishaandev.vercel.app",
    },
    // Add more projects as needed
  ];

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const now = new Date();
      const targetTime = new Date();
      targetTime.setHours(18, 0, 0); // 6 PM IST

      if (now >= targetTime) {
        setShowPopup(true);
        clearInterval(timerInterval);
      }
    }, 1000 * 60); // Check every minute

    return () => clearInterval(timerInterval);
  }, []);

  useEffect(() => {
    // Check local storage if the popup has been shown previously
    const popupShown = localStorage.getItem("popupShown");
    if (popupShown === "true") {
      setShowPopup(true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem("popupShown", "true");
  };

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
            {showPopup && (
              <div className="popup">
                <h2>Time's Up!</h2>
                <p>Popup content...</p>
                <button onClick={handleClosePopup}>Close</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
