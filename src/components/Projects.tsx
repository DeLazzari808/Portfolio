import React, { useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  en: {
    sectionTitle: "Featured Projects",
    sectionDesc: "A showcase of my recent work, demonstrating expertise in modern web development, database architecture, and user experience.",
    liveDemo: "Live Site",
    code: "Code",
    projects: [
      {
        title: "Beatempo - Digital Platform for Music Agency",
        description: "A sophisticated web platform for Beatempo, a Curitiba-based music agency focused on boosting independent artists' careers. Built from scratch with a dark, elegant interface that reflects the brand's visual identity and provides a professional user experience.",
        image: "/beatempo-screenshot.png",
        technologies: ["HTML5", "Tailwind CSS", "JavaScript (ES6+)"],
        liveDemo: "https://beatempo.com.br",
        github: "https://github.com/DeLazzari808",
        category: "Landing Page",
      },
      {
        title: "Wine & Sense - Immersive Digital Experience",
        description: "A sophisticated landing page for 'Wine & Sense', an immersive sensory event combining gastronomy, wines, aromas, and art. Built with React and Vite, featuring custom animations, responsive design, and conversion-optimized UX to guide users through an emotional journey to ticket purchase.",
        image: "/wine-and-sense-screenshot.png",
        technologies: ["React", "Vite", "Tailwind CSS", "Lucide React", "Vercel", "Git"],
        liveDemo: "https://wine-and-sense.com.br",
        github: "https://github.com/DeLazzari808/wine-and-sense",
        category: "Landing Page",
      },
      {
        title: "PowerLine - Professional Electrical Services",
        description: "A comprehensive business website for PowerLine, a professional electrical services company specializing in residential and commercial installations. Features service showcase, project portfolio, customer testimonials, and contact forms with modern design and responsive layout.",
        image: "/powerline-screenshot.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Vercel"],
        liveDemo: "https://site-powerline.vercel.app/",
        github: "https://github.com/DeLazzari808",
        category: "Business Website",
      },
      {
        title: "Royal Cup",
        description: "A full-stack web application for managing football tournaments, featuring real-time data updates and a responsive design.",
        image: "/royalcup-networking.png",
        technologies: ["JavaScript (ES6+)", "TypeScript", "Vite", "TailwindCSS", "Firebase Realtime Database", "Firebase Hosting"],
        liveDemo: "https://royal-cup-br.web.app/",
        github: "https://github.com/DeLazzari808/Royal-Cup/tree/master",
        category: "Full-Stack Web App",
      },
      {
        title: "Mode - Fashion Industry Platform",
        description: "A sophisticated web application designed as the central ecosystem for the fashion industry, connecting brands, models, agencies, and designers.",
        image: "/ModeScreenShot.jpg",
        technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Firebase", "Firestore", "Context API"],
        liveDemo: "https://modeapp.netlify.app/",
        github: "https://github.com/DeLazzari808/mode-landing-page",
        category: "Product Architecture",
      },
      {
        title: "Royal Cup Finance",
        description: "A PWA for shared financial control, optimizing cash management with the Miller-Orr model and real-time data visualization.",
        image: "/royalcup-finance-cover.png",
        technologies: ["React.js", "TypeScript", "Tailwind CSS", "Firebase", "Recharts", "PWA"],
        liveDemo: "https://financeiroroyalcup.web.app/",
        github: "https://github.com/DeLazzari808/financeiro-royal",
        category: "Finance / PWA",
      },
      {
        title: "Porto Frio",
        description: "Professional website for a leading industrial kitchen company, focused on product showcase and quote requests.",
        image: "/porto-frio-screenshot.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Netlify"],
        liveDemo: "https://porto-frio.netlify.app/",
        github: "#",
        category: "Landing Page",
      },
    ],
  },
  pt: {
    sectionTitle: "Projetos em Destaque",
    sectionDesc: "Uma vitrine dos meus trabalhos recentes, demonstrando experiência em desenvolvimento web moderno, arquitetura de banco de dados e experiência do usuário.",
    liveDemo: "Site Ativo",
    code: "Código",
    projects: [
      {
        title: "Beatempo - Plataforma Digital para Agência Musical",
        description: "Plataforma web sofisticada para a Beatempo, agência de Curitiba focada em impulsionar a carreira de artistas independentes. Desenvolvida do zero com interface escura e elegante que reflete a identidade visual da marca e proporciona uma experiência profissional ao usuário.",
        image: "/beatempo-screenshot.png",
        technologies: ["HTML5", "Tailwind CSS", "JavaScript (ES6+)"],
        liveDemo: "https://beatempo.com.br",
        github: "https://github.com/DeLazzari808",
        category: "Landing Page",
      },
      {
        title: "Wine & Sense - Experiência Digital Imersiva",
        description: "Landing page sofisticada para o 'Wine & Sense', evento sensorial que une gastronomia, vinhos, aromas e arte. Desenvolvida com React e Vite, apresentando animações customizadas, design responsivo e UX otimizada para conversão, guiando os usuários através de uma jornada emocional até a compra do ingresso.",
        image: "/wine-and-sense-screenshot.png",
        technologies: ["React", "Vite", "Tailwind CSS", "Lucide React", "Vercel", "Git"],
        liveDemo: "https://wine-and-sense.com.br",
        github: "https://github.com/DeLazzari808/wine-and-sense",
        category: "Landing Page",
      },
      {
        title: "PowerLine - Serviços Elétricos Profissionais",
        description: "Site empresarial completo para a PowerLine, empresa especializada em serviços elétricos residenciais e comerciais. Apresenta showcase de serviços, portfólio de projetos, depoimentos de clientes e formulários de contato com design moderno e layout responsivo.",
        image: "/powerline-screenshot.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Vercel"],
        liveDemo: "https://site-powerline.vercel.app/",
        github: "https://github.com/DeLazzari808",
        category: "Site Empresarial",
      },
      {
        title: "Royal Cup",
        description: "Aplicação web full-stack para gerenciamento de torneios de futebol, com dados em tempo real e design responsivo.",
        image: "/royalcup-networking.png",
        technologies: ["JavaScript (ES6+)", "TypeScript", "Vite", "TailwindCSS", "Firebase Realtime Database", "Firebase Hosting"],
        liveDemo: "https://royal-cup-br.web.app/",
        github: "https://github.com/DeLazzari808/Royal-Cup/tree/master",
        category: "Web App Full-Stack",
      },
      {
        title: "Mode - Plataforma da Indústria da Moda",
        description: "Aplicação web sofisticada, ecossistema central para a indústria da moda, conectando marcas, modelos, agências e designers.",
        image: "/ModeScreenShot.jpg",
        technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Firebase", "Firestore", "Context API"],
        liveDemo: "https://modeapp.netlify.app/",
        github: "https://github.com/DeLazzari808/mode-landing-page",
        category: "Arquitetura de Produto",
      },
      {
        title: "Royal Cup Finance",
        description: "PWA para controle financeiro compartilhado, otimizando a gestão de caixa com o modelo Miller-Orr e visualização de dados em tempo real.",
        image: "/royalcup-finance-cover.png",
        technologies: ["React.js", "TypeScript", "Tailwind CSS", "Firebase", "Recharts", "PWA"],
        liveDemo: "https://financeiroroyalcup.web.app/",
        github: "https://github.com/DeLazzari808/financeiro-royal",
        category: "Finanças / PWA",
      },
      {
        title: "Porto Frio",
        description: "Site profissional para empresa líder em cozinhas industriais, focado em portfólio de produtos e orçamentos.",
        image: "/porto-frio-screenshot.png",
        technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Netlify"],
        liveDemo: "https://porto-frio.netlify.app/",
        github: "#",
        category: "Landing Page",
      },
    ],
  },
};

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const projects = t.projects;
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
            {t.sectionTitle}
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-blue-600 dark:bg-blue-500"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            {t.sectionDesc}
          </p>
        </div>

        <div className="relative flex min-h-[600px] w-full items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            aria-label={language === 'en' ? 'Previous project' : 'Projeto anterior'}
            className="absolute left-0 z-30 flex items-center justify-center h-14 w-14 rounded-full bg-white/80 dark:bg-gray-900/80 text-blue-600 dark:text-blue-400 shadow-lg hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            style={{ top: '50%', transform: 'translateY(-50%)' }}
          >
            <ChevronLeft size={32} />
          </button>

          {/* Cards */}
          <div className="absolute w-full h-full flex items-center justify-center perspective-1000">
            {projects.map((project, index) => {
              const offset = index - activeIndex;
              const isVisible = Math.abs(offset) <= 2;
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
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900">
                                <div class="text-center p-4">
                                  <div class="text-2xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">${project.title.split(' ')[0]}</div>
                                  <div class="text-xs md:text-sm text-blue-500 dark:text-blue-300">Screenshot</div>
                                </div>
                              </div>
                            `;
                          }
                        }}
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
                          <span>{t.liveDemo}</span>
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
                        >
                          <Github size={16} />
                          <span>{t.code}</span>
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
            aria-label={language === 'en' ? 'Next project' : 'Próximo projeto'}
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
              aria-label={language === 'en' ? `Go to project ${index + 1}` : `Ir para o projeto ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
