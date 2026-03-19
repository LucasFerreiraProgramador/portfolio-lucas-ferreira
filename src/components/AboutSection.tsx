import { motion } from "framer-motion";
import { GraduationCap, Code, Rocket, Coffee } from "lucide-react";
import SectionTitle from "./SectionTitle";
import NeonCard from "./NeonCard";

const stats = [
  { icon: Code, value: "2+", label: "Anos Codando" },
  { icon: Rocket, value: "45+", label: "Projetos" },
  { icon: Coffee, value: "∞", label: "Cafés" },
  { icon: GraduationCap, value: "2027", label: "Formatura" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 hex-pattern" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionTitle
          title="Sobre Mim"
          subtitle="Conheça um pouco da minha história e trajetória na programação"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-muted-foreground font-rajdhani text-lg leading-relaxed">
              <p>
                <span className="text-primary font-mono">{">"}</span> Olá! Eu sou o{" "}
                <span className="text-neon-cyan font-semibold">Lucas Ferreira</span>, 
                desenvolvedor <span className="text-neon-purple">Front-End</span> focado em soluções Web e estudante de{" "}
                <span className="text-neon-blue">Análise e Desenvolvimento de Sistemas</span>.
              </p>
              <p>
                <span className="text-primary font-mono">{">"}</span> Atualmente estou construindo uma base sólida em criação de{" "}
                <span className="text-neon-pink">interfaces modernas</span>, boas práticas e desenvolvimento de aplicações pensadas para usuários reais.
              </p>
              <p>
              <span className="text-primary font-mono">{">"}</span> Tenho conhecimento e prática nas principais tecnologias do ecossistema Front-End, incluindo:{" "}
                <span className="text-yellow-400">JavaScript</span> (lógica, manipulação do DOM, consumo de APIs),{" "}
                <span className="text-orange-500">HTML</span> &{" "}
                <span className="text-blue-400">CSS</span> (estrutura, responsividade, estilização),{" "}
                <span className="text-neon-cyan">React</span> (componentização, estados, criação de interfaces dinâmicas),{" "}
                <span className="text-orange-400">Git</span> &{" "}
                <span className="text-foreground">GitHub</span> (controle de versão, branches, fluxo colaborativo),{" "}
                <span className="text-green-400">APIs REST</span> (requisições, JSON, tratamento de respostas),{" "}
                <span className="text-neon-purple">TypeScript</span> (tipagem estática, interfaces, melhorias de código).
              </p>
              <p>
                <span className="text-primary font-mono">{">"}</span> No momento, estou aprofundando minha atuação em{" "}
                <span className="text-neon-cyan">boas práticas de código</span>,{" "}
                <span className="text-neon-purple">clean code</span>, organização de projetos Front-End e criação de aplicações mais escaláveis, alinhado com as demandas reais do mercado.
              </p>
            </div>

            {/* Terminal-style quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="p-4 bg-dark-surface border border-border rounded-lg font-mono text-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-3 h-3 rounded-full bg-destructive" />
                <span className="w-3 h-3 rounded-full bg-yellow-500" />
                <span className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> echo "Transformando ideias em código"
              </p>
              <p className="text-neon-cyan mt-1">→ "Transformando ideias em código"</p>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <NeonCard
                key={stat.label}
                glowColor={["blue", "purple", "cyan", "pink"][index % 4] as any}
                delay={index * 0.1}
              >
                <div className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="text-3xl md:text-4xl font-orbitron font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-rajdhani">
                    {stat.label}
                  </div>
                </div>
              </NeonCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
