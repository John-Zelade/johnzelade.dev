import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_home/projects/$projectId")({
  component: ProjectDetailPage,
});

import { Link, useParams } from "@tanstack/react-router";
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  FileText,
  Smartphone,
} from "lucide-react";
import { useProject } from "@/hooks/use-projects";
import { QueryState } from "@/components/shared/query-state";
import { TechBadge } from "@/components/shared/tech-icon";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "#/components/icons";

export function ProjectDetailPage() {
  const { projectId } = useParams({ from: "/_home/projects/$projectId" });
  const { data: project, isLoading, isError } = useProject(projectId);

  return (
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
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {project.title}
              </h1>

              <div className="mt-6 flex flex-wrap gap-3">
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
              </div>

              <section className="mt-10">
                <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Overview
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Problem
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>
              </section>

              <section className="mt-8">
                <h2 className="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Solution
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </section>
            </div>

            <aside className="space-y-8">
              <div className="w-full h-100 overflow-hidden rounded-3xl border">
                {project.videoUrl ? (
                  <iframe
                    src={project.videoUrl}
                    title={`${project.title} Demo`}
                    className="h-[400px] w-full"
                    allow="autoplay; encrypted-media"
                  />
                ) : project.documentationUrl ? (
                  <div className="flex h-[400px] flex-col items-center justify-center gap-4">
                    <FileText className="h-10 w-10 text-muted-foreground" />

                    <p className="text-sm text-muted-foreground">
                      Documentation available
                    </p>

                    <a
                      href={project.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      View Documentation
                    </a>
                  </div>
                ) : (
                  <div className="flex h-[400px] items-center justify-center">
                    <p className="text-sm text-muted-foreground">
                      No preview available
                    </p>
                  </div>
                )}
              </div>

              <div>
                <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Key Features
                </h2>
                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  Tech Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>
            </aside>
          </div>
        ) : null}
      </QueryState>
    </div>
  );
}
