import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  type Variants,
} from "motion/react";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechBadge } from "@/components/shared/tech-icon";
import { experience } from "@/data/experience";
import { dot, experience_item } from "#/lib/constants/animation";

export const Route = createFileRoute("/_home/experience")({
  component: ExperiencePage,
});

export function ExperiencePage() {
  const shouldReduceMotion = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.8", "end 0.6"],
  });

  return (
    <div className="container relative ">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl" />

      <SectionHeading
        title="Career & Education"
        description="My professional journey."
      />

      <ol ref={listRef} className="relative border-l border-border/40 pl-8">
        {!shouldReduceMotion ? (
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute -left-px top-0 h-full w-px origin-top bg-primary"
          />
        ) : null}

        {experience.map((entry) => (
          <motion.li
            key={entry.id}
            className="relative mb-10 last:mb-0"
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.span
              variants={dot}
              className="absolute -left-[41px] flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background"
            />

            <motion.div variants={experience_item}>
              <div className="mb-1 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                {entry.type === "work" ? (
                  <Briefcase size={14} />
                ) : (
                  <GraduationCap size={14} />
                )}
                {entry.period}
              </div>
              <h3 className="text-lg font-semibold">{entry.role}</h3>
              <p className="text-sm text-primary">{entry.organization}</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {entry.description}
              </p>
              {entry.tech.length > 0 ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {entry.tech.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={shouldReduceMotion ? "visible" : "hidden"}
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={experience_item}
                      transition={{ delay: 0.15 + techIndex * 0.05 }}
                    >
                      <TechBadge name={tech} />
                    </motion.div>
                  ))}
                </div>
              ) : null}
            </motion.div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
