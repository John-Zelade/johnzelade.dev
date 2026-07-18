import { createFileRoute } from "@tanstack/react-router";
import { User } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { TechBadge } from "@/components/shared/tech-icon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import resumePdf from "@/components/assets/john-zelade-higo-cv.pdf";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_home/about")({
  component: AboutPage,
});

const SKILL_GROUPS = [
  {
    title: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "TanStack",
      "shadcn/ui",
      "Ionic",
      "React Native",
    ],
  },
  { title: "Backend", items: ["Node.js", "Express.js", "Laravel", "Django"] },
  { title: "Database", items: ["MySQL", "SQLite", "PostgreSQL"] },
  {
    title: "Tools & Others",
    items: ["Git", "Github", "Vite", "Postman", "Visual Studio Code"],
  },
];

export function AboutPage() {
  return (
    <div className="container">
      <SectionHeading title="About Me" />

      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="max-w-xl text-left leading-relaxed text-muted-foreground">
            I'm a Junior Software Engineer with over a year of professional
            experience building web and hybrid mobile applications. I enjoy
            learning new technologies, solving problems, and creating
            applications that are simple, reliable, and easy to use. I'm always
            looking for opportunities to improve my skills and build better
            software.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {[
              { value: "1+", label: "Years Experience" },
              { value: "10+", label: "Projects Completed" },
              { value: "5+", label: "Technologies" },
              { value: "100%", label: "Commitment" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-4 text-center"
              >
                <p className="text-xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="mb-4 text-sm font-medium uppercase tracking-wide text-muted-foreground">
              Tech Stack and Tools
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {SKILL_GROUPS.map((group) => (
                <Card key={group.title}>
                  <CardHeader>
                    <CardTitle className="text-sm">{group.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechBadge key={item} name={item} />
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <a
            href={resumePdf}
            download="John_Zelade_Higo_Resume.pdf"
            className={cn(buttonVariants({ size: "lg" }), "mt-10")}
          >
            Download Resume
          </a>
        </div>

        <div className="flex items-start justify-center">
          <div className="flex aspect-square w-full max-w-xs items-center justify-center rounded-2xl border border-border bg-card">
            <User size={72} className="text-muted-foreground" strokeWidth={1} />
          </div>
        </div>
      </div>
    </div>
  );
}
