import { createFileRoute, Link } from "@tanstack/react-router";
import me from "@/components/assets/me.png";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechBadge } from "@/components/shared/tech-icon";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import resumePdf from "@/components/assets/john-zelade-higo-cv.pdf";
import { cn } from "@/lib/utils";
import { container, item } from "#/lib/constants/animation";
import { STATS } from "#/lib/constants/home";
import { SKILL_GROUPS } from "#/lib/constants/about";

export const Route = createFileRoute("/_home/about")({
  component: AboutPage,
});

export function AboutPage() {
  const shouldReduceMotion = useReducedMotion();
  const MotionLink = motion(Link);

  return (
    <div className="container">
      <SectionHeading title="About Me" />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          variants={container}
          initial={shouldReduceMotion ? "visible" : "hidden"}
          animate="visible"
        >
          <motion.p
            variants={item}
            className="max-w-xl text-left leading-relaxed text-muted-foreground"
          >
            I'm a Junior Software Engineer with over a year of professional
            experience building web and hybrid mobile applications. I enjoy
            learning new technologies, solving problems, and creating
            applications that are simple, reliable, and easy to use. I'm always
            looking for opportunities to improve my skills and build better
            software.
          </motion.p>

          <motion.div
            variants={container}
            className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={item}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                className="rounded-xl border border-border bg-card p-4 text-center transition-colors hover:border-primary/40"
              >
                <p className="text-xl font-bold text-primary">
                  <AnimatedCounter value={stat.value} delay={i * 0.1} />
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-10">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Tech Stack and Tools
            </h2>
            <motion.div
              variants={container}
              className="grid gap-4 sm:grid-cols-2"
            >
              {SKILL_GROUPS.map((group) => (
                <motion.div key={group.title} variants={item}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle>{group.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <TechBadge key={skill} name={skill} />
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <div className="mt-10 flex gap-4">
            <motion.a
              variants={item}
              href={resumePdf}
              download="John_Zelade_Higo_Resume.pdf"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.03 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Download Resume
            </motion.a>
            <motion.div variants={item} className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                )}
              >
                View Projects
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, scale: 0.92, x: 24 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex items-start justify-center"
        >
          {/* Soft background blobs */}
          <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-purple-300/20 blur-3xl" />
          <div className="absolute -left-12 bottom-8 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl" />

          {/* Abstract geometric shapes */}
          <div className="absolute -right-4 top-12 h-16 w-16 rotate-12 rounded-2xl border border-purple-300/40 bg-purple-200/20 backdrop-blur" />
          <div className="absolute -left-8 bottom-20 h-12 w-12 rotate-45 rounded-xl border border-blue-300/40 bg-blue-200/20 backdrop-blur" />

          {/* Small floating dots */}
          <div className="absolute right-20 top-4 h-3 w-3 rounded-full bg-purple-400/70" />
          <div className="absolute left-8 top-24 h-2 w-2 rounded-full bg-blue-400/70" />
          <div className="absolute right-4 bottom-24 h-2 w-2 rounded-full bg-pink-400/70" />

          {/* Large soft circle */}
          <div className="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-purple-300/20 blur-2xl" />

          {/* Floating glass card */}
          <div className="absolute top-70 left-12 h-15 w-15 rotate-45 rounded-2xl border border-white/40 bg-white/20 backdrop-blur-md shadow-lg" />
          <div className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/50" />

          {/* Small square */}
          <div className="absolute -top-5 left-12 h-10 w-10 rotate-45 rounded-xl bg-blue-200/30 border border-blue-300/30" />

          {/* Floating dots */}
          <div className="absolute top-6 left-1/3 h-3 w-3 rounded-full bg-purple-400/70" />

          <div className="absolute top-20 right-1/4 h-2 w-2 rounded-full bg-blue-400/70" />

          <div className="absolute top-0 right-32 h-1.5 w-1.5 rounded-full bg-pink-400" />

          {/* Profile */}
          <div className="relative flex aspect-square w-full max-w-xs items-center justify-center">
            <motion.div
              className="relative flex items-end justify-center overflow-hidden rounded-full bg-[#e1e1f4] shadow-2xl"
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src={me}
                alt="me"
                className="h-full w-full object-cover object-top scale-110"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
