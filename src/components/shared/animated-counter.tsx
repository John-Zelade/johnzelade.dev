import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

interface AnimatedCounterProps {
  value: string;
  delay?: number;
  duration?: number;
}

export function AnimatedCounter({
  value,
  delay = 0,
  duration = 1.4,
}: AnimatedCounterProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : value;

  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (shouldReduceMotion) {
      setDisplay(target);
      return;
    }

    const controls = animate(0, target, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });

    return () => controls.stop();
  }, [isInView, target, delay, duration, shouldReduceMotion]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
