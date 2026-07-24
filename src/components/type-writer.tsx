import { ROLES } from "#/data/experience";
import { useTypewriter } from "#/hooks/use-type-writer";
import { motion, useReducedMotion } from "motion/react";

export function Typewriter() {
  const shouldReduceMotion = useReducedMotion();
  const text = useTypewriter(ROLES);

  // Skip the effect entirely for reduced-motion users — just show the first role, static
  if (shouldReduceMotion) {
    return <span className="text-primary">{ROLES[0]}</span>;
  }

  return (
    <span className="text-primary">
      {text}
      <motion.span
        aria-hidden="true"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
        className="ml-0.5 inline-block w-[2px] bg-primary"
        style={{ height: "1em", verticalAlign: "text-bottom" }}
      />
    </span>
  );
}
