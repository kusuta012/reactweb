import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const ContactMe = () => {
  return (
    <div className="container mx-auto py-8 contact-me-container" id="contact">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <div className="space4"></div>
      <div className="contact-info">
        <div className="mb-4 flex justify-center">
          <a
            href="mailto:contactishaan0@gmail.com"
            className="text-blue-500 hover:underline icon-link"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" bounce />
          </a>
          <a
            href="https://github.com/kusuta012"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline icon-link"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" bounce />
          </a>
          <a
            href="https://www.instagram.com/dnd_ishaan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline icon-link"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" bounce />
          </a>
          <a
            href="https://discord.com/users/719081819521417217/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline icon-link"
          >
            <FontAwesomeIcon icon={faDiscord} size="2x" bounce />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
