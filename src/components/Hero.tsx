import React from "react";
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/DevResume.pdf";
    link.download = "Joao_Lazzari_Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 dark:from-blue-950 dark:via-blue-900 dark:to-indigo-950"
    >
      {/* Background Pattern */}
      <div className="bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] absolute inset-0 opacity-20"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="h-48 w-48 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 dark:from-blue-500 dark:to-indigo-700 p-1 shadow-2xl">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-6xl font-bold text-gray-600 dark:text-gray-300">
                JL
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              João Lazzari
            </h1>
            <p className="mx-auto max-w-3xl text-xl font-light text-blue-200 dark:text-blue-100 md:text-2xl">
              Full-Stack Developer specializing in JavaScript, React, and
              Firebase
            </p>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-blue-100 dark:text-blue-200">
              Building modern web applications with a focus on user experience,
              scalability, and cutting-edge technologies.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="transform rounded-lg bg-blue-600 dark:bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 dark:hover:bg-blue-800 hover:shadow-xl"
            >
              Get In Touch
            </button>
            <button
              onClick={downloadResume}
              className="flex transform items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-blue-900 dark:hover:text-blue-950"
            >
              <Download size={20} />
              Download Resume
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://linkedin.com/in/delazzari"
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-full bg-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-white/20"
            >
              <Linkedin size={24} className="text-white" />
            </a>
            <a
              href="https://github.com/joaolazzari"
              target="_blank"
              rel="noopener noreferrer"
              className="transform rounded-full bg-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-white/20"
            >
              <Github size={24} className="text-white" />
            </a>
            <a
              href="mailto:joaopedrodelazzari2@gmail.com"
              className="transform rounded-full bg-white/10 p-3 transition-all duration-300 hover:scale-110 hover:bg-white/20"
            >
              <Mail size={24} className="text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce text-white"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
