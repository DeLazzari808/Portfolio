import React from "react";
import {
  Code,
  Database,
  Globe,
  Zap,
  Users,
  Brain,
  MessageCircle,
  FileCode2,
  BarChart2,
  Cog,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  en: {
    sectionTitle: "Skills & Expertise",
    sectionDesc: "A comprehensive overview of my technical capabilities and professional competencies.",
    languages: "Languages",
    technical: [
      {
        category: "Frontend Development",
        skills: [
          { name: "React", level: 85 },
          { name: "Vite", level: 85 },
          { name: "TailwindCSS", level: 90 },
          { name: "HTML5 & CSS3", level: 90 },
          { name: "Recharts", level: 70 },
          { name: "Vue.js", level: 70 },
        ],
      },
      {
        category: "Backend & BaaS",
        skills: [
          { name: "Firebase (Firestore, Auth, Hosting)", level: 85 },
          { name: "Node.js", level: 75 },
          { name: "MySQL / NoSQL", level: 80 },
          { name: "REST & GraphQL APIs", level: 80 },
        ],
      },
      {
        category: "Tools & DevOps",
        skills: [
          { name: "Git & GitHub", level: 85 },
          { name: "CI/CD (Firebase)", level: 75 },
          { name: "npm", level: 85 },
          { name: "react-hook-form", level: 80 },
        ],
      },
    ],
    languagesList: [
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "PHP", level: 70 },
      { name: "SQL", level: 75 },
    ],
    professional: "Professional Skills",
    softSkills: [
      {
        icon: <Brain className="h-6 w-6" />,
        title: "Rapid Learning & Adaptability",
        description: "Quick learner with systematic approach to mastering new frameworks and tools",
      },
      {
        icon: <Zap className="h-6 w-6" />,
        title: "Creative Problem Solving",
        description: "Creative and effective solutions for complex technical challenges",
      },
      {
        icon: <MessageCircle className="h-6 w-6" />,
        title: "Communicative",
        description: "Strong verbal and written communication skills for clear collaboration",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Teamwork",
        description: "Collaborative mindset with experience in cross-functional teams",
      },
    ],
  },
  pt: {
    sectionTitle: "Habilidades & Expertise",
    sectionDesc: "Uma visão abrangente das minhas capacidades técnicas e competências profissionais.",
    languages: "Linguagens",
    technical: [
      {
        category: "Desenvolvimento Frontend",
        skills: [
          { name: "React", level: 85 },
          { name: "Vite", level: 85 },
          { name: "TailwindCSS", level: 90 },
          { name: "HTML5 & CSS3", level: 90 },
          { name: "Recharts", level: 70 },
          { name: "Vue.js", level: 70 },
        ],
      },
      {
        category: "Backend & BaaS",
        skills: [
          { name: "Firebase (Firestore, Auth, Hosting)", level: 85 },
          { name: "Node.js", level: 75 },
          { name: "MySQL / NoSQL", level: 80 },
          { name: "APIs REST & GraphQL", level: 80 },
        ],
      },
      {
        category: "Ferramentas & DevOps",
        skills: [
          { name: "Git & GitHub", level: 85 },
          { name: "CI/CD (Firebase)", level: 75 },
          { name: "npm", level: 85 },
          { name: "react-hook-form", level: 80 },
        ],
      },
    ],
    languagesList: [
      { name: "TypeScript", level: 85 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "PHP", level: 70 },
      { name: "SQL", level: 75 },
    ],
    professional: "Habilidades Profissionais",
    softSkills: [
      {
        icon: <Brain className="h-6 w-6" />,
        title: "Aprendizado Rápido & Adaptabilidade",
        description: "Aprendiz rápido com abordagem sistemática para dominar novos frameworks e ferramentas",
      },
      {
        icon: <Zap className="h-6 w-6" />,
        title: "Resolução Criativa de Problemas",
        description: "Soluções criativas e eficazes para desafios técnicos complexos",
      },
      {
        icon: <MessageCircle className="h-6 w-6" />,
        title: "Comunicativo",
        description: "Fortes habilidades de comunicação verbal e escrita para colaboração clara",
      },
      {
        icon: <Users className="h-6 w-6" />,
        title: "Trabalho em Equipe",
        description: "Mentalidade colaborativa com experiência em equipes multifuncionais",
      },
    ],
  },
};

const technicalIcons = [
  <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  <Database className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
  <Cog className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
];

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-20 transition-colors duration-300">
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

        {/* Languages */}
        <div className="mb-12">
            <div
              className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/50"
            >
              <div className="mb-6 flex items-center space-x-4">
                <div className="rounded-lg bg-blue-100 dark:bg-blue-900/50 p-3">
                  <FileCode2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t.languages}
                </h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {t.languagesList.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-20">
          <div className="grid gap-8 lg:grid-cols-3">
            {t.technical.map((category, index) => (
              <div
                key={index}
                className="rounded-2xl bg-gray-50 dark:bg-gray-800 p-8 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-900/50"
              >
                <div className="mb-6 flex items-center space-x-4">
                  <div className="rounded-lg bg-blue-100 dark:bg-blue-900/50 p-3">
                    {technicalIcons[index]}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {category.category}
                  </h4>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="mb-20">
          <h3 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            {t.professional}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {t.softSkills.map((skill, index) => (
              <div
                key={index}
                className="transform rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-gray-900/50 flex flex-col items-center"
              >
                <div className="mb-4 rounded-full bg-blue-600 dark:bg-blue-500 p-3 text-white">
                  {skill.icon}
                </div>
                <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">{skill.title}</h4>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
