import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_home/projects/$projectId")({
  component: ProjectDetailPage,
});

import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  PlayCircle,
  Smartphone,
  SquarePlay,
  Video,
  Youtube,
} from "lucide-react";
import { useProject } from "@/hooks/use-projects";
import { QueryState } from "@/components/shared/query-state";
import { TechBadge } from "@/components/shared/tech-icon";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "#/components/icons";
import { container, item } from "#/lib/constants/animation";

export function ProjectDetailPage() {
  const { projectId } = useParams({ from: "/_home/projects/$projectId" });
  const { data: project, isLoading, isError } = useProject(projectId);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <div className="container">
        <Link
          to="/projects"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft size={16} /> Back to Projects
        </Link>

        <QueryState
          isLoading={isLoading}
          isError={isError}
          isEmpty={!project}
          emptyMessage="Project not found."
        >
          {project ? (
            <motion.div
              key={project.id}
              variants={container}
              initial={shouldReduceMotion ? "visible" : "hidden"}
              animate="visible"
              className="grid gap-12 lg:grid-cols-[1.3fr_1fr]"
            >
              <div>
                <motion.h1
                  variants={item}
                  className="text-3xl text-primary font-bold tracking-tight sm:text-4xl"
                >
                  {project.title}
                </motion.h1>

                <motion.div
                  variants={item}
                  className="mt-6 flex flex-wrap gap-3"
                >
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(buttonVariants())}
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  ) : null}
                  {project.sourceUrl ? (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(buttonVariants({ variant: "outline" }))}
                    >
                      <Icons.github width={16} height={16} /> Source Code
                    </a>
                  ) : null}
                  {project.videoUrl ? (
                    <a
                      href={project.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(buttonVariants({ variant: "link" }))}
                    >
                      <SquarePlay width={16} height={16} /> Watch Demo
                    </a>
                  ) : null}
                </motion.div>

                <motion.section variants={item} className="mt-10">
                  <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Overview
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </motion.section>

                <motion.section variants={item} className="mt-8">
                  <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Problem
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">
                    {project.problem}
                  </p>
                </motion.section>

                <motion.section variants={item} className="mt-8">
                  <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Solution
                  </h2>
                  <p className="leading-relaxed text-muted-foreground">
                    {project.solution}
                  </p>
                </motion.section>
              </div>
              <motion.aside variants={item} className="space-y-8">
                <motion.div
                  variants={item}
                  className="h-[400px] w-full overflow-hidden rounded-3xl border border-border"
                >
                  {project.videoEmbedUrl ? (
                    <iframe
                      src={project.videoEmbedUrl}
                      title={`${project.title} Demo`}
                      className="h-[400px] w-full"
                      allow="autoplay; encrypted-media"
                    />
                  ) : project.liveUrl ? (
                    <div className="group relative h-[400px] w-full overflow-hidden rounded-xl bg-muted">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/60">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                        >
                          <PlayCircle className="h-10 w-10 text-white" />

                          <span className="text-sm font-medium text-white hover:underline">
                            Open Demo
                          </span>
                        </a>{" "}
                      </div>
                    </div>
                  ) : project.documentationUrl ? (
                    <div className="group relative h-[400px] w-full overflow-hidden rounded-xl bg-muted">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Dark overlay */}
                      <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/60" />

                      {/* Documentation CTA */}
                      <a
                        href={project.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
                      >
                        <div className="flex flex-col items-center gap-4">
                          {/* Icon */}
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20 backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                            <FileText className="h-8 w-8 text-white" />
                          </div>

                          {/* Text */}
                          <div className="space-y-1">
                            <p className="text-base font-semibold text-white">
                              Documentation Available
                            </p>

                            <p className="text-sm text-white/70">
                              Learn more about this project
                            </p>
                          </div>

                          <span className="mt-2 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black shadow-lg transition-all duration-300 group-hover:bg-white/90 group-hover:gap-3">
                            View Documentation
                            <ArrowUpRight className="h-4 w-4" />
                          </span>
                        </div>
                      </a>
                    </div>
                  ) : (
                    <div className="flex h-[400px] items-center justify-center">
                      <p className="text-sm text-muted-foreground">
                        No preview available
                      </p>
                    </div>
                  )}
                </motion.div>

                <motion.div variants={item}>
                  <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Key Features
                  </h2>
                  <motion.ul variants={container} className="space-y-2">
                    {project.features.map((feature) => (
                      <motion.li
                        key={feature}
                        variants={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-primary"
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>

                <motion.div variants={item}>
                  <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Tech Stack
                  </h2>
                  <motion.div
                    variants={container}
                    className="flex flex-wrap gap-2"
                  >
                    {project.tech.map((tech) => (
                      <motion.div key={tech} variants={item}>
                        <TechBadge name={tech} />
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.aside>
            </motion.div>
          ) : null}
        </QueryState>
      </div>
    </>
  );
}
