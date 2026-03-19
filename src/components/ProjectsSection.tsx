import { motion } from "framer-motion";
import { Github, Code } from "lucide-react";
import SectionTitle from "./SectionTitle";
import NeonCard from "./NeonCard";

import netflixCloneImg from "@/assets/projects/netflix-clone-new.png";
import financeDashboardImg from "@/assets/projects/finance-dashboard-new.png";
import contadoraLaraImg from "@/assets/projects/contadora-lara.png";
import todoAppImg from "@/assets/projects/todo-app.jpg";
import portfolioSiteImg from "@/assets/projects/portfolio-site.jpg";
import weatherAppImg from "@/assets/projects/weather-app.jpg";

const projects = [
  {
    id: 1,
    title: "Clone Netflix",
    description: "Réplica da interface da Netflix com catálogo de filmes, sistema de busca, carrossel interativo e consumo de API externa para dados de filmes e séries.",
    image: netflixCloneImg,
    technologies: ["React", "Styled Components", "API TMDB", "Axios"],
    github: "https://github.com/LucasFerreiraProgramador/netflix-clone",
    glowColor: "pink" as const,
  },
  {
    id: 2,
    title: "Dashboard Financeira",
    description: "Painel de controle financeiro com gráficos interativos, métricas em tempo real, histórico de transações e visualização de dados de investimentos.",
    image: financeDashboardImg,
    technologies: ["React", "Chart.js", "Tailwind CSS", "Context API"],
    github: "https://github.com/LucasFerreiraProgramador/Dashboard-Financeira-App",
    date: "Dezembro 2025",
    glowColor: "purple" as const,
  },
  {
    id: 3,
    title: "Contadora Lara Landing Page",
    description: "Página de vendas premium para serviços contábeis e fiscais. Foco total em conversão de leads, design responsivo moderno e integração direta com canais de atendimento.",
    image: contadoraLaraImg,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    github: "https://github.com/LucasFerreiraProgramador/Landing-Page-Contadora-Lara",
    date: "Novembro 2025",
    glowColor: "cyan" as const,
  },
  {
    id: 4,
    title: "To-Do App Interativo",
    description: "Aplicativo de gerenciamento de tarefas com drag-and-drop, categorias coloridas, filtros, persistência local e animações fluidas.",
    image: todoAppImg,
    technologies: ["React", "Framer Motion", "localStorage", "DnD Kit"],
    github: "https://github.com/LucasFerreiraProgramador/to-do-app-pro",
    date: "Outubro 2025",
    glowColor: "blue" as const,
  },
  {
    id: 5,
    title: "Portifolio Lucas Ferreira",
    description: "Site pessoal futurista para desenvolvedores com seções dinâmicas, animações interativas, formulário de contato e integração com redes sociais.",
    image: portfolioSiteImg,
    technologies: ["React", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/LucasFerreiraProgramador/portfolio-lucas-ferreira",
    date: "Setembro 2025",
    glowColor: "purple" as const,
  },
  {
    id: 6,
    title: "Previsão Meteorológica App",
    description: "Aplicativo de previsão do tempo com geolocalização automática, busca por cidades, previsão de 7 dias e condições climáticas detalhadas.",
    image: weatherAppImg,
    technologies: ["React", "OpenWeather API", "Geolocation", "CSS Modules"],
    github: "https://github.com/LucasFerreiraProgramador/Previsao-Meteorologica",
    date: "Agosto 2025",
    glowColor: "cyan" as const,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 hex-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Projetos"
          subtitle="Conheça alguns dos meus trabalhos e projetos desenvolvidos"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NeonCard glowColor={project.glowColor} className="h-full">
                <div className="flex flex-col h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-lg mb-4 group">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-60" />
                    
                    {/* Overlay with links on hover */}
                    <div className="absolute inset-0 bg-dark-bg/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full bg-neon-blue/20 border border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-primary-foreground transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-xl font-orbitron font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground font-rajdhani text-sm leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-mono rounded-md bg-dark-surface border border-border text-neon-cyan"
                        >
                          <Code className="w-3 h-3 inline mr-1" />
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/LucasFerreiraProgramador"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 font-orbitron font-semibold rounded-lg bg-transparent border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.3)] transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            Ver mais no GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
