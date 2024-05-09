import React, { useState, useEffect } from "react";
import Typing from "react-typing-effect";
import skills from "./skills";
import Projects from "./projects";
import ContactMe from "./contactme";
import spotifyLogo from "./logos/spot.png";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./App.css";


function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trackInfo, setTrackInfo] = useState({
    name: "",
    artists: "",
    albumCover: "",
  });

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

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);

const [accessToken, setAccessToken] = useState('');
const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

useEffect(() => {
  const fetchTrackInfo = async () => {
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/me/player/currently-playing",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      console.log("", response.status);

      if (response.ok) {
        const data = await response.json();
        console.log("Track data:", data);
        setTrackInfo({
          name: data.item.name,
          artists: data.item.artists.map((artist) => artist.name).join(", "),
          albumCover: data.item.album.images[0].url,
        });
      } else if (response.status === 401) {
        console.log("");
        // If access token expired, refresh token
        await refreshtoken();
        // Retry fetching track info
        await fetchTrackInfo();
      } else {
        // If other error
        throw new Error("Failed to fetch currently playing track");
      }
    } catch (error) {
      console.error("Error fetching currently playing track:", error.message);
      // Clear track info in case of error
      setTrackInfo({});
    }
  };

  const refreshtoken = async () => {
    try {
      const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "refresh_token",
          refresh_token: refreshToken,
          client_id: clientId,
          client_secret: clientSecret,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Update access token
        setAccessToken(data.access_token);
      } else {
        throw new Error("Failed to refresh access token");
      }
    } catch (error) {
      console.error("Error refreshing access token:", error.message);
      // Handle token refresh failure
    }
  };

  const intervalId = setInterval(fetchTrackInfo, 7000); // Fetch track info every 7 seconds

  // Fetch track info immediately after component mounts
  fetchTrackInfo();

  return () => clearInterval(intervalId);
}, []);

 
  

  return (
    <>
      <div
        className="light-bokeh"
        style={{ left: cursorPosition.x, top: cursorPosition.y }}
      ></div>
      <header className="container mx-auto py-4">
        <nav className="flex items-center justify-between px-4 py-2 bg-gray-800">
          <div>
            <button onClick={scrollToTop} className="logo-button">
              <img
                src={process.env.PUBLIC_URL + "/weblogo.ico"}
                alt="Ishaan"
                className="h-10 w-auto"
              />
            </button>
          </div>
          <ul className="flex space-x-4">
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
          <h3 className="text-4xl md:text-6xl font-bold">
            Turning code into reality.
          </h3>
        </div>
        <div className="space4">
          <p className="text-lg">
            I'm a 10th grader excited about coding. I built Discord bots in
            Python and played with web development using React and Tailwind CSS.
            Still learning, but I have already made some projects!
          </p>
        </div>
        <div className="space3"></div>
        <div id="about" className="text-center md:text-left mt-8">
          <h2 className="text-2xl font-bold">About Me</h2>
          <div className="mt-8"></div>
          <p>
            Hello! My name is Ishaan and I enjoy writing codes My interest in
            Programming started back in 2019 when I decided to try making a
            calculator using Python and now I am fluent in programming python
            advanced.
          </p>
          <div className="mt-8"></div>
          <p>
            Fast-forward to today, I am learning Web Development at Udemy. My
            main focus these days is building python projects and frontend for
            my website.
          </p>
          <div className="mt-8"></div>
          <p>
            I also recently made a Discord Bot which is has plenty of commands
            to manage your server. Its Name is Blimpo , which would be soon be
            verified by discord in late 2024.
          </p>
          <div className="mt-8"></div>
          <p>Here are a few technologies I’ve been working with recently:</p>
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
      <SpeedInsights />
      <div id="spotify-container">
        <img id="spotify-logo" src={spotifyLogo} alt="Spotify Logo" />
        <div id="track-info">
          <p id="listening-message">
            Ishaan is currently listening to on Spotify:
          </p>
          {trackInfo.albumCover ? (
            <>
              <img
                id="album-cover"
                src={trackInfo.albumCover}
                alt="Album Cover"
              />
              <div id="track-name">{trackInfo.name}</div>
              <div id="artist">{trackInfo.artists}</div>
            </>
          ) : (
            <p>No track currently playing</p>
          )}
        </div>
      </div>
    </>
  );
}

function Cap() {
  const text = ["A programmer", "A developer", "A coder", "A student"];

  return (
    <div className="typing-container">
      <Typing text={text} speed={130} loop>
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
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
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
