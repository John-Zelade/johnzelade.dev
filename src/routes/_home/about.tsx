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
            I'm a Software Engineer with over a year of professional
            experience building web and hybrid mobile applications. I enjoy
            learning new technologies, solving problems, and creating
            applications that are simple, reliable, and easy to use. I'm always
            looking for opportunities to improve my skills and build better
            software.
          </motion.p>

          <motion.div
            variants={container}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
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

          <motion.div
            variants={item}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10"
          >
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Tech Stack and Tools
            </h2>
            <motion.div
              variants={container}
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {SKILL_GROUPS.map((group) => (
                <motion.div
                  key={group.title}
                  variants={item}
                  initial={shouldReduceMotion ? "visible" : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
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

          <motion.div
            variants={container}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 flex gap-4"
          >
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
          </motion.div>
        </motion.div>

        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, scale: 0.92, x: 24 }
          }
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative flex items-start justify-center"
        >
          {/* Soft background blobs */}
          <motion.div
            className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-purple-300/20 blur-3xl"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.div
            className="absolute -left-12 bottom-8 h-40 w-40 rounded-full bg-blue-300/20 blur-3xl"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Abstract geometric shapes */}
          <motion.div
            className="absolute -right-4 top-12 h-16 w-16 rotate-12 rounded-2xl border border-purple-300/40 bg-purple-200/20 backdrop-blur"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scale: 0.6, rotate: -10 }
            }
            whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
            animate={{ y: shouldReduceMotion ? 0 : [0, -8, 0] }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              opacity: { duration: 0.5, delay: 0.5 },
              scale: { duration: 0.5, delay: 0.5 },
              rotate: { duration: 0.5, delay: 0.5 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
          />
          <motion.div
            className="absolute -left-8 bottom-20 h-12 w-12 rotate-45 rounded-xl border border-blue-300/40 bg-blue-200/20 backdrop-blur"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, scale: 0.6, rotate: 20 }
            }
            whileInView={{ opacity: 1, scale: 1, rotate: 45 }}
            animate={{ y: shouldReduceMotion ? 0 : [0, 10, 0] }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              opacity: { duration: 0.5, delay: 0.6 },
              scale: { duration: 0.5, delay: 0.6 },
              rotate: { duration: 0.5, delay: 0.6 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.1,
              },
            }}
          />

          {/* Small floating dots */}
          {[
            {
              className: "right-20 top-4 h-3 w-3 bg-purple-400/70",
              delay: 0.7,
            },
            { className: "left-8 top-24 h-2 w-2 bg-blue-400/70", delay: 0.75 },
            {
              className: "right-4 bottom-24 h-2 w-2 bg-pink-400/70",
              delay: 0.8,
            },
            {
              className: "top-6 left-1/3 h-3 w-3 bg-purple-400/70",
              delay: 0.85,
            },
            {
              className: "top-20 right-1/4 h-2 w-2 bg-blue-400/70",
              delay: 0.9,
            },
            {
              className: "top-0 right-32 h-1.5 w-1.5 bg-pink-400",
              delay: 0.95,
            },
          ].map((dot, i) => (
            <motion.div
              key={i}
              className={cn("absolute rounded-full", dot.className)}
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: dot.delay }}
            />
          ))}

          {/* Large soft circle */}
          <motion.div
            className="absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-purple-300/20 blur-2xl"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Floating glass card */}
          <motion.div
            className="absolute top-64 left-12 h-14 w-14 rotate-45 rounded-2xl border border-white/40 bg-white/20 shadow-lg backdrop-blur-md"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            animate={{ y: shouldReduceMotion ? 0 : [0, -10, 0] }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              opacity: { duration: 0.5, delay: 1 },
              scale: { duration: 0.5, delay: 1 },
              y: {
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              },
            }}
          />
          <motion.div
            className="absolute top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-400/50"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 1.05 }}
          />

          {/* Small square */}
          <motion.div
            className="absolute -top-5 left-12 h-10 w-10 rotate-45 rounded-xl border border-blue-300/30 bg-blue-200/30"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 1.1 }}
          />

          {/* Profile */}
          <div className="relative flex aspect-square w-full max-w-xs items-center justify-center">
            <motion.div
              className="relative flex items-end justify-center overflow-hidden rounded-full bg-[#e1e1f4] shadow-2xl"
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src={me}
                alt="me"
                className="h-full w-full scale-110 object-cover object-top"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
