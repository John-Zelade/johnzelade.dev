import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { FolderKanban } from "lucide-react";
import { useProjects } from "@/hooks/use-projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechBadge } from "@/components/shared/tech-icon";
import { QueryState } from "@/components/shared/query-state";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { ProjectCategory } from "@/types";

export const Route = createFileRoute("/_home/projects/")({
  component: ProjectsPage,
});

const CATEGORIES: Array<ProjectCategory | "All"> = ["All", "Web", "Mobile"];

export function ProjectsPage() {
  const { data: projects, isLoading, isError } = useProjects();
  const [category, setCategory] = useState<ProjectCategory | "All">("All");

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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Link
              key={project.id}
              to="/projects/$projectId"
              params={{ projectId: project.id }}
            >
              <Card className="h-full transition-colors hover:border-primary/50">
                <div className="flex aspect-video items-center justify-center rounded-t-xl bg-secondary/60">
                  <FolderKanban
                    size={32}
                    className="text-muted-foreground"
                    strokeWidth={1.25}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-base">{project.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {project.summary}
                  </p>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 pt-0">
                  {project.tech.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </QueryState>
    </div>
  );
}
