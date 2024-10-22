import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Effect untuk mendeteksi scroll dan mengubah state berdasarkan section yang aktif
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("About");
      const homeSection = document.querySelector("nav");
      
      const scrollPosition = window.scrollY;

      if (aboutSection && scrollPosition >= aboutSection.offsetTop - 50) {
        setActiveSection("about");
      } else {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-1/2 transform -translate-x-1/2 m-6 align-middle bg-white bg-opacity-25 rounded-full">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize text-lg dark:text-gray-300">
          <Link
            href="#"
            className={`text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 mx-1.5 sm:mx-6 ${
              activeSection === "home" ? "border-red-500" : "border-transparent hover:border-red-500"
            }`}
          >
            home
          </Link>

          <Link
            href="#About"
            className={`border-b-2 border-transparent transition-colors duration-300 transform dark:hover:text-gray-200 mx-1.5 sm:mx-6 ${
              activeSection === "about" ? "text-red-500 border-red-500" : "hover:text-gray-800 hover:border-red-500"
            }`}
          >
            About
          </Link>

          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            pricing
          </a>

          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            blog
          </a>
        </div>
      </nav>
    </>
  );
}
