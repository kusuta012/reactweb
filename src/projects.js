import React, { useState, useEffect } from "react";
import project1Image from "./images/project1.png";
import project2Image from "./images/project2.png";
import moment from "moment-timezone"; // Import moment-timezone library

const Projects = () => {
  const [project2Title, setProject2Title] = useState("");
  const [project2GithubLink, setProject2GithubLink] = useState("");
  const [isTimerActive, setIsTimerActive] = useState(true);

  const endDateIST = moment.tz("2024-05-10 18:00:00", "Asia/Kolkata"); // Set end date in IST timezone

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment(); // Get current time in moment object

      const distance = endDateIST.diff(now); // Calculate difference in milliseconds

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // Timer has ended, update project info
        setProject2Title("Automated Code Quality Improvement System");
        setProject2GithubLink("https://acqis.onrender.com");
        setIsTimerActive(false);
        clearInterval(intervalId); // Stop the timer
      } else {
        // Update timer display
        const formattedTime = `${days > 0 ? days + "d " : ""}${hours > 0 ? hours + "h " : ""}${minutes > 0 ? minutes + "m " : ""}${seconds}s`;
        setProject2Title(`Countdown: ${formattedTime}`);
      }
    }, 1000); // Update timer every second

    return () => clearInterval(intervalId); // Cleanup function to stop the timer on unmount
  }, []);

  const projects = [
    {
      title: "Krack Discord Bot",
      image: project1Image,
      githubLink: "https://github.com/kusuta012/Krack",
    },
    {
      title: project2Title, // Dynamically set title based on timer state
      image: project2Image,
      githubLink: project2GithubLink, // Dynamically set link based on timer state
    },
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
            {isTimerActive && index === 1 && <h3 className="project-title">{project.title}</h3>} {/* Only display timer for project 2 before end date */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
