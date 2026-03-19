import { motion } from "framer-motion";
import { ReactNode } from "react";

interface NeonButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  href?: string;
  target?: string;
}

const variants = {
  primary: `
    bg-gradient-to-r from-neon-blue to-neon-cyan text-primary-foreground
    hover:shadow-[0_0_20px_hsl(var(--neon-blue)/0.5),0_0_40px_hsl(var(--neon-blue)/0.3)]
  `,
  secondary: `
    bg-gradient-to-r from-neon-purple to-neon-pink text-white
    hover:shadow-[0_0_20px_hsl(var(--neon-purple)/0.5),0_0_40px_hsl(var(--neon-purple)/0.3)]
  `,
  outline: `
    bg-transparent border-2 border-primary text-primary
    hover:bg-primary/10 hover:shadow-[0_0_15px_hsl(var(--neon-blue)/0.3)]
  `,
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const NeonButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  disabled = false,
  loading = false,
  href,
  target,
}: NeonButtonProps) => {
  const baseClasses = `
    relative overflow-hidden font-orbitron font-semibold rounded-lg
    transition-all duration-300 inline-flex items-center justify-center gap-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const content = (
    <>
      {loading && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {loading ? (
          <motion.div
            className="w-5 h-5 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        ) : null}
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={baseClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      className={baseClasses}
    >
      {content}
    </motion.button>
  );
};

export default NeonButton;
