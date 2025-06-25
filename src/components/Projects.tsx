import React from "react";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  Database,
  Smartphone,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Royal Cup",
      description:
        "A comprehensive full-stack web application for football tournament management, featuring real-time data updates and responsive design.",
      image: '/royalcup-networking.png',
      technologies: [
        "JavaScript (ES6+)",
        "Vite",
        "TailwindCSS",
        "Firebase Realtime Database",
        "Firebase Hosting",
      ],
      features: [
        "Real-time tournament data synchronization",
        "Responsive UI with loading states and micro-interactions",
        "CI/CD deployment pipeline with preview channels",
        "NoSQL database modeling and integration",
      ],
      liveDemo: "https://royal-cup-br.web.app/",
      github: "https://github.com/DeLazzari808/Royal-Cup/tree/master",
      category: "Full-Stack Web App",
    },
    {
      title: "Mode - Fashion Industry Platform",
      description:
        "A sophisticated web application designed as the central ecosystem for the fashion industry, connecting brands, models, agencies, and designers.",
      image:
        '/ModeScreenShot.jpg',
      technologies: [
        "React",
        "Vite",
        "TailwindCSS",
        "Firebase",
        "Firestore",
        "Context API",
      ],
      features: [
        "Component-based architecture for scalability",
        "Firebase Authentication with secure user accounts",
        "Firestore database with security rules",
        "Global state management with React Context",
        "Dark-themed elegant UI design",
      ],
      liveDemo: "https://modeapp.netlify.app/",
      github: "https://github.com/DeLazzari808/mode-landing-page",
      category: "Product Architecture",
    },
    {
      title: "Porto Frio",
      description:
        "Professional website for a leading industrial kitchen company, focusing on product showcases and quote requests.",
      image:
        "/porto-frio-screenshot.png",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript (Vanilla JS)",
        "Tailwind CSS",
        "Flowbite",
        "Netlify",
      ],
      features: [
        "Modern and responsive design to showcase their product portfolio",
        "Detailed product catalog with technical specifications",
        "Integrated online quote request system",
        "Contact Info",
      ],
      liveDemo: "https://porto-frio.netlify.app/",
      github: "#",
      category: "Landing Page",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Featured Projects
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-blue-600 dark:bg-blue-500"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            A showcase of my recent work, demonstrating expertise in modern web
            development, database architecture, and user experience design.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-1">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:hover:shadow-gray-900/50 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`lg:flex ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Project Image */}
                <div className="lg:w-1/2">
                  <div className="relative h-64 lg:h-full">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-blue-900/20"></div>
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-blue-600 dark:bg-blue-500 px-3 py-1 text-sm font-medium text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 lg:w-1/2 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start space-x-3"
                          >
                            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600 dark:bg-blue-500"></div>
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="mb-3 text-xl font-semibold text-gray-900 dark:text-white">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="rounded-full border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 px-3 py-1 text-sm text-gray-700 dark:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 pt-4">
                      <a
                        href={project.liveDemo}
                        className="flex transform items-center space-x-2 rounded-lg bg-blue-600 dark:bg-blue-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-blue-700 dark:hover:bg-blue-800"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.github}
                        className="flex transform items-center space-x-2 rounded-lg border-2 border-gray-300 dark:border-gray-600 px-6 py-3 font-semibold text-gray-700 dark:text-gray-300 transition-all duration-300 hover:scale-105 hover:border-gray-400 dark:hover:border-gray-500 hover:text-gray-900 dark:hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Projects Teaser */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-300">
            Interested in seeing more of my work?
          </p>
          <a
            href="https://github.com/DeLazzari808"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transform items-center space-x-2 rounded-lg bg-gray-900 dark:bg-gray-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-gray-800 dark:hover:bg-gray-600"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
