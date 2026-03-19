import { motion } from "framer-motion";
import { ChevronDown, Github, Linkedin, Mail, MapPin, Instagram, Download } from "lucide-react";
import TypewriterText from "./TypewriterText";
import NeonButton from "./NeonButton";

const HeroSection = () => {
  const roles = [
    "Desenvolvedor Front-end",
    "Desenvolvedor Web",
    "Estudante de Análise e Desenvolvimento de Sistemas",
    "Desenvolvedor Mobile",
    "Desenvolvedor Desktop",
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-mono text-sm text-muted-foreground">
              Disponível para projetos
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-bold mb-6"
          >
            <span className="text-foreground">LUCAS</span>
            <br />
            <span className="gradient-text">FERREIRA</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl font-rajdhani font-medium mb-6 h-12"
            translate="no"
          >
            <TypewriterText texts={roles} speed={80} />
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-2 text-muted-foreground mb-8"
          >
            <MapPin className="w-4 h-4 text-primary" />
            <span className="font-rajdhani">Minas Gerais, Brasil</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <NeonButton
              variant="primary"
              size="lg"
              onClick={() => {
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Mail className="w-5 h-5" />
              Entre em Contato
            </NeonButton>
            <NeonButton
              variant="secondary"
              size="lg"
              href="/Lucas_Ferreira_Dev_Front_End.pdf"
              target="_blank"
            >
              <Download className="w-5 h-5" />
              Download CV
            </NeonButton>
            <NeonButton
              variant="outline"
              size="lg"
              onClick={() => {
                document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Saiba Mais
            </NeonButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center gap-6"
          >
            {[
              { icon: Github, href: "https://github.com/LucasFerreiraProgramador", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/lucasferreira-dev-front-end/", label: "LinkedIn" },
              { icon: Instagram, href: "https://www.instagram.com/lucasferreira.dev?igsh=MTRjNm9wNmwxZnF3bA%3D%3D&utm_source=qr", label: "Instagram" },
              { icon: Mail, href: "mailto:lucasferreirasilva.dev@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="font-mono text-xs tracking-wider">SCROLL</span>
          <ChevronDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
