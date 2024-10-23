"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useEffect, useRef } from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiPython } from "@react-icons/all-files/si/SiPython";
import { SiPostgresql } from "@react-icons/all-files/si/SiPostgresql";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { FaPhp } from "@react-icons/all-files/fa/FaPhp";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import PortoSection from "@/components/ImageCarousel";
import { downloadFile } from "@/utils/downloadCV";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [showButton, setShowButton] = useState<boolean>(false);
  const [isAboutVisible, setIsAboutVisible] = useState<boolean>(false);
  const [isContactVisible, setIsContactVisible] = useState<boolean>(false); // State for contact section visibility
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const texts = [
    "Hello!!! My name is Panji",
    "Hallo!!! Mijn naam is Panji",
    "Halo!!! Nama saya Panji",
    "你好!!! 我叫潘吉",
    "こんにちは!!! 私の名前はパンジです",
    "مرحبًا!!! اسمي بانجي",
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);
  const fullText: string = texts[currentTextIndex];

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
        setShowButton(true);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, [currentTextIndex, fullText]);

  useEffect(() => {
    const languageInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) =>
        prevIndex === texts.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(languageInterval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAboutVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  // Observer for the Contact section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsContactVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <section id="Home" className="min-h-screen flex flex-col rounded-lg">
        <div className="flex-grow flex items-center justify-center">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/assets/background.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(45%)",
              zIndex: -1,
            }}
          />
          <div className="flex flex-col items-center justify-center h-full px-4">
            <h1 className="text-4xl font-bold text-center text-white sm:text-3xl md:text-4xl">
              {text}
              <span className="animate-blink">|</span>
            </h1>
            <button
              className={`bg-red-700 hover:bg-red-800 p-4 font-semibold text-white mt-6 rounded-full transform transition-all duration-1000 ease-in-out ${
                showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              onClick={()=> downloadFile("CV_Panji.pdf")}
            >
              Download my CV
            </button>
          </div>
        </div>
      </section>

      <section
        id="About"
        ref={aboutRef}
        className={`h-screen bg-white flex items-center justify-center transition-opacity duration-1000 ${
          isAboutVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-6 max-w-5xl bg-white transform transition-colors duration-300 hover:bg-red-800 hover:text-white shadow-lg rounded-lg">
          <img
            src="/assets/Panjiii.JPG"
            className="rounded-lg max-w-[15rem] w-full md:w-auto"
            alt="Profile Picture"
          />
          <div className="text-lg">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <p>
              I'm currently a student at Telkom Vocational High School, where I’ve honed my skills in web development, particularly with Node.js and React.js. I’m passionate about building full-stack applications and using data analysis to solve real-world problems. Over the years, I've had the chance to lead projects and take on leadership roles in various organizations, which has helped me grow both technically and personally. I’m always eager to learn, challenge myself, and dive deeper into the ever-evolving world of technology.
            </p>
            <h2 className="text-2xl font-thin mt-4 border-b inline-block">
              Tech stack
            </h2>
            <div className="flex flex-row gap-4 text-4xl mt-4 mb-4 flex-wrap">
              <SiJavascript />
              <SiTypescript />
              <FaPhp />
              <SiPython />
              <SiPostgresql />
              <SiTailwindcss />
              <FaNodeJs />
              <FaReact />
            </div>
          </div>
        </div>
      </section>

      <section
        id="Projects"
        ref={projectRef}
        className="min-h-screen bg-red-800 flex items-center justify-center"
      >
        <div className="container mx-auto p-8">
          <PortoSection />
        </div>
      </section>

      <section
        id="Contact"
        ref={contactRef}
        className={`min-h-screen bg-red-800 flex items-center justify-center transition-opacity duration-1000 ${
          isContactVisible ? "animate-fadeIn" : "opacity-0"
        }`}
      >
        <div className="container mx-auto p-8 text-center">
          <h2 className="text-3xl font-semibold text-white mb-6">Contact Me</h2>
          <p className="text-white mb-6">
            You can find me on these platforms. Feel free to connect!
          </p>
          <div className="flex justify-center space-x-8 text-5xl">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/panji-putra-ardian"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 hover:text-red-500"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/panjiiiiiii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 hover:text-red-500"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/panpanjoel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 hover:text-red-500"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
