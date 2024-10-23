import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById("Home");
      const aboutSection = document.getElementById("About");
      const projectsSection = document.getElementById("Projects");
      const contactSection = document.getElementById("Contact");
      const scrollPosition = window.scrollY;
      const offsetBuffer = 150; // Buffer to prevent overlap

      // Check if the user is in the "Contact" section
      if (contactSection && scrollPosition >= contactSection.offsetTop - offsetBuffer) {
        setActiveSection("contact");
      } 
      // Check if the user is in the "Projects" section
      else if (projectsSection && scrollPosition >= projectsSection.offsetTop - offsetBuffer) {
        setActiveSection("projects");
      } 
      // Check if the user is in the "About" section
      else if (aboutSection && scrollPosition >= aboutSection.offsetTop - offsetBuffer) {
        setActiveSection("about");
      } 
      // If not in another section, revert to "Home"
      else if (homeSection && scrollPosition < aboutSection!.offsetTop - offsetBuffer) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center">
      <nav
        className={`fixed top-0 z-50 m-6 transition-colors duration-300 bg-white bg-opacity-25 rounded-full ${
          activeSection === "about" ? "dark:bg-red-800 bg-opacity-100" : 
          activeSection === "projects" ? "dark:bg-white bg-opacity-100" : ""
        }`}
      >
        <div
          className={`container flex items-center justify-center p-6 mx-auto text-gray-600 lg:text-xl sm:text-sm capitalize dark:text-gray-300 ${
            activeSection === "about" ? "dark:text-white" : 
            activeSection === "projects" ? "dark:text-red-800" : 
            activeSection === "contact" ? "dark:text-white" : ""
          }`}
        >
          <a
            className={`border-b-2 border-transparent transition-colors duration-300 transform dark:hover:text-gray-200 mx-1.5 sm:mx-6 ${
              activeSection === "home"
                ? "text-white-500 dark:border-red-500"
                : "hover:text-gray-800 hover:border-red-500"
            }`}
            onClick={() => scrollToSection("Home")}
          >
            Home
          </a>

          <a
            className={`border-b-2 border-transparent transition-colors duration-300 transform dark:hover:text-gray-200 mx-1.5 sm:mx-6 ${
              activeSection === "about"
                ? "text-white-500 dark:border-red-500"
                : "hover:text-gray-800 hover:border-red-500"
            }`}
            onClick={() => scrollToSection("About")}
          >
            About
          </a>

          <a
            className={`border-b-2 border-transparent transition-colors duration-300 transform dark:hover:text-gray-200 mx-1.5 sm:mx-6 ${
              activeSection === "projects"
                ? "text-white-500 dark:border-red-500"
                : "hover:border-red-500"
            }`}
            onClick={() => scrollToSection("Projects")}
          >
            Projects
          </a>

          <a
            className={`border-b-2 border-transparent transition-colors duration-300 transform dark:hover:text-gray-200 mx-1.5 sm:mx-6 ${
              activeSection === "contact"
                ? "text-white-500 dark:border-red-500"
                : "hover:text-gray-800 hover:border-red-500"
            }`}
            onClick={() => scrollToSection("Contact")}
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
