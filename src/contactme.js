import React from "react";

const ContactMe = () => {
  return (
    <div className="container mx-auto py-8 contact-me-container" id="contact">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <div className="space4"></div>
      <div className="contact-info">
        <div className="mb-4">
          <p className="text-lg font-semibold">Email:</p>
          <a href="mailto:contactishaan0@gmail.com" className="text-blue-500 hover:underline">Mail Me</a>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">GitHub:</p>
          <a href="https://github.com/kusuta012" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Github</a>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Instagram:</p>
          <a href="https://www.instagram.com/echo_ishaan/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Instagram Handle</a>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Discord:</p>
          <span className="text-gray-600">Risinplayz®#6222</span>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
