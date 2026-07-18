import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Code2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { TechIcon } from "@/components/shared/tech-icon";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_home/")({
  component: HomePage,
});

const STATS = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies", value: "5+" },
  { label: "Commitment", value: "100%" },
];

const TECH_STACK = ["React", "TypeScript", "TanStack", "Tailwind CSS"];

export function HomePage() {
  return (
    <div className="container sm:py-6">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">
          <p className="mb-4 text-lg text-muted-foreground">Hi, I'm</p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            John <span className="text-primary">Zelade</span> Higo
          </h1>
          <p className="mt-3 text-xl font-medium text-muted-foreground">
            Junior Software Engineer
          </p>
          <p className="mt-6 max-w-md text-muted-foreground">
            I build scalable web and mobile applications with modern
            technologies and great user experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projects" className={cn(buttonVariants({ size: "lg" }))}>
              View Projects
            </Link>
            <Link
              to="/contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              Contact Me
            </Link>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="text-2xl font-bold text-primary">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <div className="flex justify-between">
              <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Tech Stack
              </p>
              <Link
                to="/about"
                className="mb-3 text-xs font-medium tracking-wide text-muted-foreground"
              >
                View more
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                  <TechIcon name={tech} />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative hidden items-center justify-center lg:flex">
          <div className="flex h-80 w-80 items-center justify-center rounded-2xl border border-border bg-card">
            <Code2 size={96} className="text-primary" strokeWidth={1.25} />
          </div>
        </div>
      </div>
    </div>
  );
}
