import { motion } from "framer-motion";
import { Heart, Terminal, Github, Linkedin, Mail, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="font-orbitron font-bold notranslate" translate="no">
              <span className="text-primary">&gt;_</span>
              <span className="text-foreground"> Lucas Ferreira | Desenvolvedor Front-End</span>
            </span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 -ml-4 md:-ml-6"
          >
            {[
              { icon: Github, href: "https://github.com/LucasFerreiraProgramador" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/lucasferreira-dev-front-end/" },
              { icon: Instagram, href: "https://www.instagram.com/lucasferreira.dev?igsh=MTRjNm9wNmwxZnF3bA%3D%3D&utm_source=qr" },
              { icon: Mail, href: "mailto:lucasferreirasilva.dev@gmail.com" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.2, y: -3 }}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground font-rajdhani text-sm flex items-center gap-1"
          >
            <span>© 2026 Lucas Ferreira. Feito com</span>
            <Heart className="w-4 h-4 text-neon-pink inline-block animate-pulse" />
            <span>e</span>
            <span className="text-primary font-mono">{"</>"}</span>
          </motion.div>
        </div>

        {/* Decorative Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-8 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        />

        {/* Tech Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-dark-elevated rounded-full border border-border text-xs font-mono text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Built with React + TypeScript + TailwindCSS
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
