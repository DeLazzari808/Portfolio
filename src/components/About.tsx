import React from "react";
import { Code, Globe, Zap, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  en: {
    sectionTitle: "About Me",
    highlights: [
      {
        title: "Full-Stack Development",
        description: "Expertise in modern JavaScript/TypeScript ecosystem including React, Node.js, and Firebase",
      },
      {
        title: "International Experience",
        description: "Business education in Oxford, England, bringing global perspective to projects",
      },
      {
        title: "Rapid Learning",
        description: "Quick adaptation to new technologies and frameworks with systematic approach",
      },
      {
        title: "Collaborative",
        description: "Strong communication skills and experience working in team environments",
      },
    ],
    p1: "I'm a passionate Full-Stack Developer with experience in architecting, developing, and deploying modern web applications. Currently pursuing my Associate's Degree in Systems Analysis and Development at Unicesumar, I specialize in the JavaScript & TypeScript ecosystem with a strong focus on React, Firebase, and component-based architecture.",
    p2: "My international experience studying Business in Oxford, England, has enhanced my cultural adaptability and business acumen, allowing me to approach development projects with both technical expertise and strategic thinking.",
    p3: "I'm particularly passionate about building digital products from the ground up, focusing on data security, user experience, and scalable architecture. My goal is to create applications that not only function flawlessly but also provide exceptional user experiences.",
    education: "Education",
    degree: "Associate's Degree in Systems Analysis and Development",
    degreeSchool: "Unicesumar • 2023 - 2026",
    business: "Business Studies",
    businessSchool: "City of Oxford College • 2018 - 2019",
  },
  pt: {
    sectionTitle: "Sobre Mim",
    highlights: [
      {
        title: "Desenvolvimento Full-Stack",
        description: "Especialista no ecossistema moderno JavaScript/TypeScript incluindo React, Node.js e Firebase",
      },
      {
        title: "Experiência Internacional",
        description: "Formação em Negócios em Oxford, Inglaterra, trazendo uma perspectiva global aos projetos",
      },
      {
        title: "Aprendizado Rápido",
        description: "Adaptação ágil a novas tecnologias e frameworks com abordagem sistemática",
      },
      {
        title: "Colaborativo",
        description: "Fortes habilidades de comunicação e experiência em ambientes de equipe",
      },
    ],
    p1: "Sou um desenvolvedor Full-Stack apaixonado, com experiência em arquitetar, desenvolver e implantar aplicações web modernas. Atualmente curso Análise e Desenvolvimento de Sistemas na Unicesumar, com especialização no ecossistema JavaScript & TypeScript, focando em React, Firebase e arquitetura baseada em componentes.",
    p2: "Minha experiência internacional estudando Negócios em Oxford, Inglaterra, aprimorou minha adaptabilidade cultural e visão de negócios, permitindo abordar projetos de desenvolvimento com expertise técnica e pensamento estratégico.",
    p3: "Sou especialmente apaixonado por construir produtos digitais do zero, com foco em segurança de dados, experiência do usuário e arquitetura escalável. Meu objetivo é criar aplicações que não apenas funcionem perfeitamente, mas também proporcionem experiências excepcionais.",
    education: "Formação",
    degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    degreeSchool: "Unicesumar • 2023 - 2026",
    business: "Estudos em Negócios",
    businessSchool: "City of Oxford College • 2018 - 2019",
  },
};

const icons = [
  <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
];

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            {t.sectionTitle}
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-blue-600 dark:bg-blue-500"></div>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t.p1}
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t.p2}
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              {t.p3}
            </p>
            <div className="pt-6">
              <h3 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
                {t.education}
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {t.degree}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{t.degreeSchool}</p>
                </div>
                <div className="border-l-4 border-blue-600 dark:border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {t.business}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {t.businessSchool}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-6">
            {t.highlights.map((highlight, index) => (
              <div
                key={index}
                className="transform rounded-xl bg-gray-50 dark:bg-gray-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-gray-900/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 rounded-lg bg-blue-100 dark:bg-blue-900/50 p-2">
                    {icons[index]}
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
