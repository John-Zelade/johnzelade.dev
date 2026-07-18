import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechBadge } from "@/components/shared/tech-icon";
import { experience } from "@/data/experience";

export const Route = createFileRoute("/_home/experience")({
  component: ExperiencePage,
});

export function ExperiencePage() {
  return (
    <div className="container">
      <SectionHeading
        title="Experience"
        description="My professional journey."
      />

      <ol className="relative border-l border-border pl-8">
        {experience.map((entry) => (
          <li key={entry.id} className="mb-10 last:mb-0">
            <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-background" />

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
                {entry.tech.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
