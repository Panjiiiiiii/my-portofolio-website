"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";

export default function Home() {
  const [text, setText] = useState<string>(""); // Menentukan tipe string untuk state
  const [showButton, setShowButton] = useState<boolean>(false); // State untuk mengatur visibilitas tombol
  const fullText: string = "Hello!!! My name is Panji Putra Ardian";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(intervalId);
        // Setelah animasi typewriter selesai, munculkan tombol
        setShowButton(true);
      }
    }, 100); // Kecepatan mengetik (100ms per karakter)

    // Membersihkan interval ketika komponen dibongkar
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col rounded-lg">
        <div className="relative flex-grow flex items-center justify-center">
          {/* Background Image */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("/assets/background.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(50%)",
              zIndex: -1,
            }}
          />
          <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-center text-white">
              {text}
              <span className="animate-blink">|</span>
            </h1>

            {/* Tambahkan animasi fade-up ke tombol */}
            <button
              className={`bg-red-700 hover:bg-red-800 p-4 font-semibold text-white mt-6 rounded-full transform transition-all duration-1000 ease-in-out ${
                showButton
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Download my CV
            </button>
          </div>
        </div>
      </section>

      {/* Section About */}
      <section id="About" className="h-screen bg-white flex items-center justify-center">
        <h1 className="text-4xl font-bold">Hello, this is the About Section</h1>
      </section>
      <Footer />
    </>
  );
}
