import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, MapPin, CheckCircle, AlertCircle, Instagram } from "lucide-react";
import SectionTitle from "./SectionTitle";
import NeonButton from "./NeonButton";
import NeonCard from "./NeonCard";
import { supabase } from "@/integrations/supabase/client";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      if (!supabase) {
        throw new Error("Supabase client not configured");
      }

      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
      });

      if (error) {
        console.error('Error sending email:', error);
        setSubmitStatus("error");
      } else if (data?.success) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error('Email send failed:', data?.error);
        setSubmitStatus("error");
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lucasferreirasilva.dev@gmail.com",
      href: "mailto:lucasferreirasilva.dev@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/LucasFerreiraProgramador",
      href: "https://github.com/LucasFerreiraProgramador",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/lucasferreira-dev-front-end",
      href: "https://www.linkedin.com/in/lucasferreira-dev-front-end/",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@lucasferreira.dev",
      href: "https://www.instagram.com/lucasferreira.dev?igsh=MTRjNm9wNmwxZnF3bA%3D%3D&utm_source=qr",
    },
    {
      icon: MapPin,
      label: "Localização",
      value: "Minas Gerais, Brasil",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-x-clip">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-neon-blue/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Contato"
          subtitle="Vamos conversar? Entre em contato comigo para projetos, colaborações ou apenas para trocar uma ideia"
        />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto w-full p-2">
          {/* Contact Form */}
          <NeonCard glowColor="blue">
            <h3 className="font-orbitron font-semibold text-xl mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              Envie uma Mensagem
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5" id="contact-form" data-form-type="contact">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block font-rajdhani font-medium mb-2 text-sm text-muted-foreground">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="w-full px-4 py-3 bg-dark-elevated border border-border rounded-lg input-futuristic font-rajdhani"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-rajdhani font-medium mb-2 text-sm text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    className="w-full px-4 py-3 bg-dark-elevated border border-border rounded-lg input-futuristic font-rajdhani"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block font-rajdhani font-medium mb-2 text-sm text-muted-foreground">
                  Assunto
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                  className="w-full px-4 py-3 bg-dark-elevated border border-border rounded-lg input-futuristic font-rajdhani"
                  placeholder="Sobre o que deseja falar?"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block font-rajdhani font-medium mb-2 text-sm text-muted-foreground">
                  Mensagem
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  autoComplete="off"
                  className="w-full px-4 py-3 bg-dark-elevated border border-border rounded-lg input-futuristic font-rajdhani resize-none"
                  placeholder="Sua mensagem..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 font-rajdhani"
                >
                  <CheckCircle className="w-5 h-5" />
                  Mensagem enviada com sucesso!
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-destructive font-rajdhani"
                >
                  <AlertCircle className="w-5 h-5" />
                  Erro ao enviar. Tente novamente.
                </motion.div>
              )}

              <NeonButton
                type="submit"
                variant="primary"
                size="lg"
                loading={isSubmitting}
                className="w-full"
              >
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </NeonButton>
            </form>
          </NeonCard>

          {/* Contact Info */}
          <div className="space-y-6">
            <NeonCard glowColor="purple">
              <h3 className="font-orbitron font-semibold text-xl mb-6 flex items-center gap-2">
                <Mail className="w-5 h-5 text-neon-purple" />
                Informações de Contato
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    {info.href ? (
                      <a
                        href={info.href}
                        target={info.href.startsWith("mailto") ? undefined : "_blank"}
                        rel={info.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                        className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg bg-dark-elevated border border-border hover:border-primary transition-all duration-300 min-w-0"
                      >
                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs text-muted-foreground font-mono">
                            {info.label}
                          </div>
                          <div className="font-rajdhani font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base break-all">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 sm:gap-4 p-3 rounded-lg bg-dark-elevated border border-border min-w-0">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                          <info.icon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-xs text-muted-foreground font-mono">
                            {info.label}
                          </div>
                          <div className="font-rajdhani font-medium text-foreground text-sm sm:text-base break-all">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </NeonCard>

            {/* Quick Message */}
            <NeonCard glowColor="cyan">
              <div className="text-center">
                <h4 className="font-orbitron font-semibold mb-3">
                  Vamos trabalhar juntos?
                </h4>
                <p className="text-muted-foreground font-rajdhani mb-4">
                  Estou sempre aberto a novas oportunidades e projetos interessantes.
                </p>
                <div className="flex justify-center gap-4">
                  <motion.a
                    href="https://github.com/LucasFerreiraProgramador"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-dark-elevated border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
                  >
                    <Github className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/lucasferreira-dev-front-end/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-dark-elevated border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
                  >
                    <Linkedin className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/lucasferreira.dev?igsh=MTRjNm9wNmwxZnF3bA%3D%3D&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-dark-elevated border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
                  >
                    <Instagram className="w-6 h-6" />
                  </motion.a>
                  <motion.a
                    href="mailto:lucasferreirasilva.dev@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-dark-elevated border border-border rounded-lg hover:border-primary hover:text-primary transition-all"
                  >
                    <Mail className="w-6 h-6" />
                  </motion.a>
                </div>
              </div>
            </NeonCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
