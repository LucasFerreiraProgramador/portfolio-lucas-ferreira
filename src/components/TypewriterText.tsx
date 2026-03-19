import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

const TypewriterText = ({
  texts,
  className = "",
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPausedRef = useRef(false);

  const tick = useCallback(() => {
    const currentFullText = texts[textIndexRef.current];
    
    if (isPausedRef.current) {
      isPausedRef.current = false;
      setIsDeleting(true);
      timeoutRef.current = setTimeout(tick, deleteSpeed);
      return;
    }

    if (!isDeleting) {
      // Typing
      if (charIndexRef.current < currentFullText.length) {
        charIndexRef.current++;
        setDisplayText(currentFullText.substring(0, charIndexRef.current));
        timeoutRef.current = setTimeout(tick, speed);
      } else {
        // Finished typing, pause before deleting
        isPausedRef.current = true;
        timeoutRef.current = setTimeout(tick, pauseDuration);
      }
    } else {
      // Deleting
      if (charIndexRef.current > 0) {
        charIndexRef.current--;
        setDisplayText(currentFullText.substring(0, charIndexRef.current));
        timeoutRef.current = setTimeout(tick, deleteSpeed);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        textIndexRef.current = (textIndexRef.current + 1) % texts.length;
        timeoutRef.current = setTimeout(tick, speed);
      }
    }
  }, [texts, speed, deleteSpeed, pauseDuration, isDeleting]);

  useEffect(() => {
    timeoutRef.current = setTimeout(tick, speed);
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [tick, speed]);

  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      translate="no"
    >
      <span className="gradient-text notranslate" aria-label={displayText}>
        {displayText}
      </span>
      <motion.span
        className="inline-block w-[3px] h-[1em] bg-primary ml-1 align-middle"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        aria-hidden="true"
      />
    </motion.span>
  );
};

export default TypewriterText;
