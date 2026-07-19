import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { useProjects } from "@/hooks/use-projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechBadge } from "@/components/shared/tech-icon";
import { QueryState } from "@/components/shared/query-state";
import { ProjectCarousel } from "@/components/shared/project-carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projectImages } from "@/lib/project-images";
import type { ProjectCategory } from "@/types";
import { container, item } from "#/lib/constants/animation";
import { CATEGORIES } from "#/lib/constants/projects";

export const Route = createFileRoute("/_home/projects/")({
  component: ProjectsPage,
});

export function ProjectsPage() {
  const { data: projects, isLoading, isError } = useProjects();
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const shouldReduceMotion = useReducedMotion();

  const filtered = useMemo(() => {
    if (!projects) return [];
    return category === "All"
      ? projects
      : projects.filter((p) => p.category === category);
  }, [projects, category]);

  return (
    <div className="container">
      <SectionHeading
        eyebrow="Portfolio"
        title="Projects"
        description="A collection of personal and academic projects I've built while exploring different technologies and solving real-world problems."
      />

      <div className="mb-8 flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <Button
            key={cat}
            size="sm"
            variant={category === cat ? "default" : "outline"}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      <QueryState
        isLoading={isLoading}
        isError={isError}
        isEmpty={filtered.length === 0}
        emptyMessage="No projects in this category yet."
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            variants={container}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            exit="hidden"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                variants={item}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full overflow-hidden transition-colors hover:border-primary/50">
                  <ProjectCarousel
                    images={
                      projectImages[project.imageFolder ?? project.id] ?? []
                    }
                    alt={project.title}
                  />

                  <Link
                    to="/projects/$projectId"
                    params={{ projectId: project.id }}
                    className="flex flex-col gap-2"
                  >
                    <CardHeader className="hover:text-primary">
                      <CardTitle className="text-base">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {project.summary}
                      </p>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2 pt-0">
                      {project.tech.map((tech) => (
                        <TechBadge key={tech} name={tech} />
                      ))}
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </QueryState>
    </div>
  );
}
