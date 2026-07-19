import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";

import devices from "@/components/assets/devices.png";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { TechIcon } from "@/components/shared/tech-icon";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "#/components/shared/animated-counter";
import { container, item } from "#/lib/constants/animation";
import { STATS, TECH_STACK } from "#/lib/constants/home";

export const Route = createFileRoute("/_home/")({
  component: HomePage,
});

export function HomePage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="container sm:py-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
        >
          <motion.p
            variants={item}
            className="mb-4 text-lg text-muted-foreground"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            John <span className="text-primary">Zelade</span> Higo
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-3 text-xl font-medium text-muted-foreground"
          >
            Junior Software Engineer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-muted-foreground"
          >
            I build modern web and mobile applications, focusing on scalable
            solutions, clean code, and delivering better user experiences.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className={cn(buttonVariants({ size: "lg" }))}>
              View Projects
            </Link>
            <Link
              to="/contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Contact Me
            </Link>
          </motion.div>

          <motion.dl
            variants={container}
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {STATS.map((stat, i) => (
              <motion.div key={stat.label} variants={item}>
                <dt className="text-2xl font-bold text-primary">
                  <AnimatedCounter value={stat.value} delay={i * 0.5} />
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </dd>
              </motion.div>
            ))}
          </motion.dl>

          <motion.div variants={item} className="mt-10">
            <div className="flex justify-between">
              <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Tech Stack
              </p>
              <Link
                to="/about"
                className="mb-3 text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:text-primary"
              >
                View more
              </Link>
            </div>

            <motion.div variants={container} className="flex flex-wrap gap-4">
              {TECH_STACK.map((tech) => (
                <motion.span
                  key={tech}
                  variants={item}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <TechIcon name={tech} />
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, scale: 0.92, x: 24 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex items-center justify-center overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-[#e1e1f4]" />

          <div className="absolute right-4 bottom-16 h-32 w-32 rounded-3xl bg-[#f4e1eb] rotate-12" />

          <div className="absolute right-10 top-0 h-4 w-4 rounded-full bg-primary" />
          <div className="absolute bottom-10 left-20 h-3 w-3 rounded-full bg-primary" />

          {/* Main image container */}
          <div className="relative flex h-100 w-100 items-center justify-center rounded-2xl">
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src={devices} alt="Devices" className="drop-shadow-xl" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
