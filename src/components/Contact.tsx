import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const translations = {
  en: {
    sectionTitle: "Let's Work Together",
    sectionDesc: "I'm always interested in new opportunities and exciting projects. Let's discuss how we can bring your ideas to life.",
    getInTouch: "Get In Touch",
    contactDesc: "Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. I typically respond within 24 hours.",
    name: "Name *",
    email: "Email *",
    subject: "Subject *",
    message: "Message *",
    namePlaceholder: "Your name",
    emailPlaceholder: "your.email@example.com",
    subjectPlaceholder: "What's this about?",
    messagePlaceholder: "Tell me about your project or just say hello...",
    send: "Send Message",
    sending: "Sending...",
    sent: "Message Sent!",
    error: "Something went wrong. Please try again later.",
    location: "Curitiba, Brazil",
    phone: "+55 (41) 98727-0447",
    available: "Available for freelance projects and full-time opportunities.",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  pt: {
    sectionTitle: "Vamos Trabalhar Juntos",
    sectionDesc: "Estou sempre aberto a novas oportunidades e projetos empolgantes. Vamos conversar sobre como podemos tirar suas ideias do papel.",
    getInTouch: "Fale Comigo",
    contactDesc: "Se você tem um projeto em mente, quer colaborar ou apenas dizer oi, ficarei feliz em conversar. Normalmente respondo em até 24 horas.",
    name: "Nome *",
    email: "E-mail *",
    subject: "Assunto *",
    message: "Mensagem *",
    namePlaceholder: "Seu nome",
    emailPlaceholder: "seu.email@exemplo.com",
    subjectPlaceholder: "Sobre o que é?",
    messagePlaceholder: "Conte sobre seu projeto ou apenas diga olá...",
    send: "Enviar Mensagem",
    sending: "Enviando...",
    sent: "Mensagem Enviada!",
    error: "Algo deu errado. Por favor, tente novamente mais tarde.",
    location: "Curitiba, Brasil",
    phone: "+55 (41) 98727-0447",
    available: "Disponível para projetos freelance e oportunidades full-time.",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
};

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://formspree.io/f/xpwrolnz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: t.email,
      value: "joaopedrodelazzari2@gmail.com",
      link: "mailto:joaopedrodelazzari2@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: t.phone,
      value: t.phone,
      link: "tel:+5541987270447",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t.location,
      value: t.location,
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: t.linkedin,
      value: "linkedin.com/in/delazzari",
      link: "https://linkedin.com/in/delazzari",
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: t.github,
      value: "github.com/DeLazzari808",
      link: "https://github.com/DeLazzari808",
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
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

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                {t.getInTouch}
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                {t.contactDesc}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="rounded-lg bg-blue-100 dark:bg-blue-900/50 p-2">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <a
                      href={info.link || undefined}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-gray-200 dark:bg-gray-700 p-2 text-gray-700 dark:text-gray-200 transition-colors duration-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500"
                  aria-label={social.title}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                placeholder={t.namePlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                placeholder={t.emailPlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                placeholder={t.subjectPlaceholder}
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
              >
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full resize-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                placeholder={t.messagePlaceholder}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex w-full transform items-center justify-center space-x-2 rounded-lg px-8 py-4 font-semibold transition-all duration-300 hover:scale-105 ${
                isSubmitting
                  ? "cursor-not-allowed bg-gray-400 dark:bg-gray-600"
                  : submitStatus === "success"
                    ? "bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800"
                    : "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
              } text-white`}
            >
              {isSubmitting ? (
                <>
                  <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                  <span>{t.sending}</span>
                </>
              ) : submitStatus === "success" ? (
                <span>{t.sent}</span>
              ) : (
                <>
                  <Send size={20} />
                  <span>{t.send}</span>
                </>
              )}
            </button>
            {/* Error Message */}
            {submitStatus === "error" && (
              <div className="mt-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4">
                <p className="text-sm text-red-800 dark:text-red-200">
                  {t.error}
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;