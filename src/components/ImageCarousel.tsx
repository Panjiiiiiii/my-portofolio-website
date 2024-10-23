import React, { useEffect, useState, useRef } from "react";

interface Card {
  title: string;
  category: string;
  imageUrl: string;
}

const PortoSection: React.FC = () => {
  const cards: Card[] = [
    {
      title: "Wikusama Cafe Website",
      category: "Website",
      imageUrl: "/assets/Cafe.png",
    },
    {
      title: "Hotel Website",
      category: "Website",
      imageUrl: "/assets/Hotel.png",
    },
    {
      title: "Climatology Analysis",
      category: "Website",
      imageUrl: "/assets/Climatology.png",
    },
    {
      title: "Kipatok Ngalam",
      category: "Mockup",
      imageUrl: "/assets/Ngalam.png",
    },
    {
      title: "Swimming Pool Booking App",
      category: "Website",
      imageUrl: "/assets/SwimmingPool.png",
    },
  ];

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`bg-red-900 py-20 px-4 md:px-20 flex justify-center rounded-xl transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div className="container px-6 mx-auto">
        <h1 className="text-3xl font-semibold text-center text-white capitalize">
          Portfolio
        </h1>
        <p className="mt-4 text-center text-gray-200">
          A collection of some projects I've worked on.
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-cover rounded-lg cursor-pointer h-64 md:h-80 lg:h-96 group bg-gray-800"
              style={{
                backgroundImage: `url(${card.imageUrl})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-center px-4 py-2 transition-opacity duration-700 opacity-0 bg-black/50 group-hover:opacity-100 backdrop-blur-sm">
                <h2 className="text-lg md:text-xl font-semibold text-white capitalize">{card.title}</h2>
                <p className="mt-1 md:mt-2 text-sm md:text-lg tracking-wider text-red-400 uppercase">{card.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortoSection;
