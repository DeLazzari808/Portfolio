import React from "react";
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/joaolazzari",
      icon: <Github size={20} />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/delazzari",
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
    },
    {
      href: "mailto:joaopedrodelazzari2@gmail.com",
      icon: <Mail size={20} />,
      label: "Email",
    },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">João Lazzari</h3>
            <p className="leading-relaxed text-gray-400 dark:text-gray-300">
              Full-Stack Developer passionate about creating exceptional web
              experiences with modern technologies and user-centered design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform rounded-lg bg-gray-800 dark:bg-gray-800 p-2 transition-all duration-300 hover:scale-110 hover:bg-blue-600 dark:hover:bg-blue-500"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 dark:text-gray-300 transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-gray-400 dark:text-gray-300">
              <p>Curitiba, Brazil</p>
              <p>+55 (41) 98727-0447</p>
              <p>joaopedrodelazzari2@gmail.com</p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-gray-400 dark:text-gray-300">
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-800 dark:border-gray-700 pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400 dark:text-gray-300">
              © {currentYear} João Lazzari. All rights reserved.
            </p>
            <p className="flex items-center space-x-1 text-sm text-gray-400 dark:text-gray-300">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>using React & TailwindCSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
