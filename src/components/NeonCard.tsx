import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeonCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "blue" | "purple" | "pink" | "cyan";
  delay?: number;
}

const glowColors = {
  blue: "before:from-neon-blue before:via-neon-cyan before:to-neon-blue",
  purple: "before:from-neon-purple before:via-neon-pink before:to-neon-purple",
  pink: "before:from-neon-pink before:via-neon-purple before:to-neon-pink",
  cyan: "before:from-neon-cyan before:via-neon-blue before:to-neon-cyan",
};

const NeonCard = ({
  children,
  className = "",
  glowColor = "blue",
  delay = 0,
}: NeonCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`
        relative p-[2px] rounded-xl
        before:absolute before:inset-0 before:bg-gradient-to-r ${glowColors[glowColor]}
        before:rounded-xl before:opacity-50 before:transition-opacity before:duration-300
        hover:before:opacity-100
        after:absolute after:inset-[2px] after:bg-card after:rounded-[10px]
        group
        ${className}
      `}
    >
      <div className="relative z-10 bg-card rounded-[10px] p-6 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default NeonCard;
