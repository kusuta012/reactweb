import React, { useState, useEffect } from "react";
import Typing from 'react-typing-effect';
import skills from "./skills";
import Projects from "./projects";
import ContactMe from "./contactme";
import { SpeedInsights } from "@vercel/speed-insights/react"
import "./App.css";
import holiImage from './images/holi.png';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const spawnInterval = setInterval(function() {
  const randomX = Math.random() * document.documentElement.scrollWidth; // Get a random X coordinate relative to the entire document
  const randomY = Math.random() * document.documentElement.scrollHeight; // Get a random Y coordinate relative to the entire document
  
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = randomX + 'px';
  balloon.style.top = randomY + 'px';
  balloon.style.backgroundColor = getRandomColor();
  document.body.appendChild(balloon);
  
  setTimeout(function() {
    balloon.remove(); // Remove the balloon after a certain duration
  }, 3000); // Adjust the duration (in milliseconds) as needed
}, 700); // Adjust the interval (in milliseconds) as needed

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}





function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    const aboutSection = document.getElementById("skills");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    const element = document.documentElement;
    element.scrollIntoView({ behavior: "smooth" });
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Update state if scrolled past 100px (adjust as needed)
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  


  return (
    <>
        <header className="container mx-auto py-4">
        <nav className={`flex items-center justify-between px-4 py-2 bg-gray-800 ${isScrolled ? 'scrolled' : ''}`}> 
            <div>
              <button onClick={scrollToTop} className="logo-button">
                <img src={process.env.PUBLIC_URL + "/weblogo.ico"} alt="Ishaan" className="h-10 w-auto" />
              </button>
            </div>
            <ul className="flex space-x-4">
            </ul>
           <img src={holiImage} alt="Happy Holi" class="holi-image">
            </img>
             <ul>
              <li>
                <button onClick={scrollToAbout}>About Me</button>
              </li>
              <li>
                <button onClick={scrollToSkills}>Skills</button>
              </li>
              <li>
                <button onClick={scrollToProjects}>Projects</button>
              </li>
              <li>
                <button onClick={scrollToContact}>Contact</button>
              </li>
            </ul>
          </nav>
        </header>
        <div className="container mx-auto flex flex-col justify-center h-full">
          <div className="text-center md:text-left mb-8">
            <div className="text-2xl md:text-4xl mt-4">
              <Cap />
            </div>
            <div className="space1"></div>
            <h1 className="text-4xl md:text-6xl font-bold">Ishaan</h1>
            <div className="space2"></div>
            <h3 className="text-4xl md:text-6xl font-bold">Turning code into reality.</h3>
          </div>
          <div className="space4">
            <p className="text-lg">
              I'm a 10th grader excited about coding. I built Discord bots in Python and played with web development using React and Tailwind CSS. Still learning, but I have already made some projects!
            </p>
          </div>
          <div className="space3"></div>
          <div id="about" className="text-center md:text-left mt-8">
            <h2 className="text-2xl font-bold">About Me</h2>
            <div className="mt-8"></div>
            <p>
              Hello! My name is Ishaan and I enjoy writing codes My interest in Programming started back in 2019 when I decided to try making a calculator using Python and now I am fluent in programming python advanced.
            </p>
            <div className="mt-8"></div>
            <p>
              Fast-forward to today, I am learning Web Development at Udemy. My main focus these days is building python projects and frontend for my website.
            </p>
            <div className="mt-8"></div>
            <p>
              I also recently made a Discord Bot which is has plenty of commands to manage your server. Its Name is Blimpo , which would be soon be verified by discord in late 2024.
            </p>
            <div className="mt-8"></div>
            <p>
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="mt-8"></div>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>Python</li>
              <li>Rust</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Node.js</li>
            </ul>
            <div className="space3"></div>
          </div>
          <Skills />
        </div>
        <div className="space3"></div>
        <Projects />
        <div className="space3"></div>
        <ContactMe />
        <SpeedInsights/>
    </>
  );
}

function Cap() {
  const text = ['A programmer', 'A developer', 'A coder', 'A student'];  

  return (
    <div className="typing-container"> 
      <Typing
        text={text} 
        speed={130}
        loop
      >
        <span className="typing-text">{text}</span>  
      </Typing>
    </div>
  );
}

function Skills() {
  return (
    <div className="container mx-auto py-8 skills-container" id="skills">
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="space4"></div>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-card">
            <div className="flex items-center justify-center mb-2">
              <img
                src={skill.logo}
                alt={skill.name}
                className="skill-logo"
              />
            </div>
            <p className="skill-name">{skill.name}</p>
            <div className="skill-progress-bar">
              <span className="progress-number">{skill.proficiency}%</span>
              <div
                className="skill-progress-bar-fill"
                style={{ width: `${skill.proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
