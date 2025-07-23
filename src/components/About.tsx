import React from "react";
import { Code, Globe, Zap, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Full-Stack Development",
      description:
        "Expertise in modern JavaScript/TypeScript ecosystem including React, Node.js, and Firebase",
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "International Experience",
      description:
        "Business education in Oxford, England, bringing global perspective to projects",
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Rapid Learning",
      description:
        "Quick adaptation to new technologies and frameworks with systematic approach",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      title: "Collaborative",
      description:
        "Strong communication skills and experience working in team environments",
    },
  ];

  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            About Me
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-blue-600 dark:bg-blue-500"></div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I'm a passionate Full-Stack Developer with experience in
              architecting, developing, and deploying modern web applications.
              Currently pursuing my Associate's Degree in Systems Analysis and
              Development at Unicesumar, I specialize in the JavaScript & TypeScript
              ecosystem with a strong focus on React, Firebase, and
              component-based architecture.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              My international experience studying Business in Oxford, England,
              has enhanced my cultural adaptability and business acumen,
              allowing me to approach development projects with both technical
              expertise and strategic thinking.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I'm particularly passionate about building digital products from
              the ground up, focusing on data security, user experience, and
              scalable architecture. My goal is to create applications that not
              only function flawlessly but also provide exceptional user
              experiences.
            </p>

            <div className="pt-6">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                Education
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Associate's Degree in Systems Analysis and Development
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">Unicesumar • 2023 - 2026</p>
                </div>
                <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Business Studies
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    City of Oxford College • 2018 - 2019
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="transform rounded-xl bg-gray-50 dark:bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-gray-900/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 rounded-lg bg-blue-100 dark:bg-blue-900/50 p-2">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                      {highlight.title}
                    </h3>
                    <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
