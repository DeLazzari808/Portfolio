import React, { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Royal Cup",
      description:
        "A full-stack web application for managing football tournaments, featuring real-time data updates and a responsive design.",
      image: "/royalcup-networking.png",
      technologies: [
        "JavaScript (ES6+)",
        "TypeScript",
        "Vite",
        "TailwindCSS",
        "Firebase Realtime Database",
        "Firebase Hosting",
      ],
      liveDemo: "https://royal-cup-br.web.app/",
      github: "https://github.com/DeLazzari808/Royal-Cup/tree/master",
      category: "Full-Stack Web App",
    },
    {
      title: "Mode - Fashion Industry Platform",
      description:
        "A sophisticated web application designed as the central ecosystem for the fashion industry, connecting brands, models, agencies, and designers.",
      image: "/ModeScreenShot.jpg",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "TailwindCSS",
        "Firebase",
        "Firestore",
        "Context API",
      ],
      liveDemo: "https://modeapp.netlify.app/",
      github: "https://github.com/DeLazzari808/mode-landing-page",
      category: "Product Architecture",
    },
    {
      title: "Royal Cup Finance",
      description:
        "A PWA for shared financial control, optimizing cash management with the Miller-Orr model and real-time data visualization.",
      image: "/royalcup-finance-cover.png",
      technologies: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "Recharts",
        "PWA",
      ],
      liveDemo: "https://financeiroroyalcup.web.app/",
      github: "https://github.com/DeLazzari808/financeiro-royal",
      category: "Finance / PWA",
    },
    {
      title: "Porto Frio",
      description:
        "Professional website for a leading industrial kitchen company, focused on product showcase and quote requests.",
      image: "/porto-frio-screenshot.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Netlify",
      ],
      liveDemo: "https://porto-frio.netlify.app/",
      github: "#",
      category: "Landing Page",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleControlClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="projects"
      className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Featured Projects
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-blue-600 dark:bg-blue-500"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            A showcase of my recent work, demonstrating expertise in modern web development, database architecture, and user experience.
          </p>
        </div>

        <div className="relative flex min-h-[600px] w-full items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="absolute left-0 z-30 flex items-center justify-center h-14 w-14 rounded-full bg-white/80 dark:bg-gray-900/80 text-blue-600 dark:text-blue-400 shadow-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <ChevronLeft size={32} />
          </button>

          {/* Cards */}
          <div className="absolute w-full h-full flex items-center justify-center perspective-1000">
            {projects.map((project, index) => {
              const offset = index - activeIndex;
              const isVisible = Math.abs(offset) <= 2; // Render only nearby cards

              const transform = `
                translateX(${offset * 40}%) 
                scale(${1 - Math.abs(offset) * 0.18})
                rotateY(${offset * -15}deg)
              `;
              
              const zIndex = 20 - Math.abs(offset);
              const filter = `blur(${Math.abs(offset) > 0 ? '4px' : '0px'})`;
              const opacity = Math.abs(offset) > 1 ? '0' : '1';

              return (
                <div
                  key={index}
                  className="absolute flex justify-center items-center w-full max-w-3xl md:max-w-4xl h-[420px] md:h-[440px] transform cursor-pointer transition-all duration-500 ease-in-out"
                  style={{
                    transform,
                    zIndex,
                    filter,
                    opacity: isVisible ? opacity : '0',
                    visibility: isVisible ? 'visible' : 'hidden',
                  }}
                  onClick={() => handleControlClick(index)}
                >
                  <div className="overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg w-full h-full flex flex-col md:flex-row">
                    <div className="md:w-1/2 h-48 md:h-full">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:w-1/2 flex flex-col justify-between">
                      <div>
                        <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h3>
                        <p className="mb-4 text-gray-600 dark:text-gray-400 min-h-[80px] md:min-h-[100px]">
                          {project.description}
                        </p>
                        <div className="mb-6 flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-4 mt-4">
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                          <Github size={16} />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next project"
            className="absolute right-0 z-30 flex items-center justify-center h-14 w-14 rounded-full bg-white/80 dark:bg-gray-900/80 text-blue-600 dark:text-blue-400 shadow-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="mt-8 flex justify-center space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => handleControlClick(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'w-6 bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
