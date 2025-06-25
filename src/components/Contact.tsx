import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

const Contact = () => {
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

  // --- INÍCIO DA MODIFICAÇÃO: Lógica de Envio Real ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle"); // Reseta o status anterior

    try {
      const response = await fetch("https://formspree.io/f/xpwrolnz", { // Seu endpoint aqui
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Limpa o formulário

        // Opcional: esconde a mensagem de sucesso após alguns segundos
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        // Se a resposta do servidor não for 'ok', consideramos um erro
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Failed to send the message:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false); // Garante que o botão seja reativado
    }
  };
  // --- FIM DA MODIFICAÇÃO ---

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "joaopedrodelazzari2@gmail.com",
      link: "mailto:joaopedrodelazzari2@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      value: "+55 (41) 98727-0447",
      link: "tel:+5541987270447",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      value: "Curitiba, Brazil",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-6 w-6" />,
      title: "LinkedIn",
      value: "linkedin.com/in/delazzari",
      link: "https://linkedin.com/in/delazzari",
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      value: "github.com/joaolazzari",
      link: "https://github.com/DeLazzari808",
    },
  ];

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gray-800 py-20 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Let's Work Together
          </h2>
          <div className="mx-auto mb-8 h-1 w-24 bg-blue-600 dark:bg-blue-500"></div>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            I'm always interested in new opportunities and exciting projects.
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                Get In Touch
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                Whether you have a project in mind, want to collaborate, or just
                want to say hello, I'd love to hear from you. I typically
                respond within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 rounded-lg bg-blue-100 dark:bg-blue-900/50 p-3 text-blue-600 dark:text-blue-400">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
              <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                Connect With Me
              </h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-shrink-0 rounded-lg bg-gray-100 dark:bg-gray-700 p-3 text-gray-600 dark:text-gray-300">
                      {social.icon}
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white">
                        {social.title}
                      </h5>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {social.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg dark:shadow-gray-900/50">
            <h3 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                  placeholder="Tell me about your project or just say hello..."
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
                    <span>Sending...</span>
                  </>
                ) : submitStatus === "success" ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
            
            {/* Mensagem de Erro, caso ocorra */}
            {submitStatus === "error" && (
              <div className="mt-4 rounded-lg border border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20 p-4">
                <p className="text-sm text-red-800 dark:text-red-200">
                  Something went wrong. Please try again later.
                </p>
              </div>
            )}
            
            {/* A mensagem de sucesso que você já tinha */}
            {submitStatus === "success" && (
              <div className="mt-4 rounded-lg border border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20 p-4">
                <p className="text-sm text-green-800 dark:text-green-200">
                  Thank you for your message! I'll get back to you soon.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;