import { Atom, Braces, Layers, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import type { ElementType } from "react";

interface TechMeta {
  icon: ElementType;
  color: string;
  isImage?: boolean;
}

const TECH_MAP: Record<string, TechMeta> = {
  React: { icon: Atom, color: "text-sky-400" },
  "React Native": { icon: Atom, color: "text-sky-400" },
  TypeScript: { icon: Icons.typescript, color: "", isImage: true },
  JavaScript: { icon: Braces, color: "text-yellow-400" },
  TanStack: { icon: Icons.tanstack, color: "", isImage: true },
  "Tailwind CSS": { icon: Icons.tailwindcssicon, color: "", isImage: true },
  "shadcn/ui": { icon: Icons.shadcn, color: "", isImage: true },

  "Node.js": { icon: Icons.nodejs, color: "", isImage: true },
  "Express.js": { icon: Icons.expressjs, color: "", isImage: true },
  Laravel: { icon: Icons.laravel, color: "", isImage: true },
  Django: { icon: Icons.django, color: "", isImage: true },
  Ionic: { icon: Icons.ionic, color: "", isImage: true },
  MySQL: { icon: Icons.mysql, color: "", isImage: true },
  SQLite: { icon: Icons.sqlite, color: "", isImage: true },
  PostgreSQL: { icon: Icons.postgresql, color: "", isImage: true },
  MapLibre: { icon: Layers, color: "text-emerald-400" },
  "Chart.js": { icon: Layers, color: "text-pink-400" },
  Git: { icon: Icons.git, color: "", isImage: true },

  Konva: { icon: Icons.konva, color: "", isImage: true },

  Vite: { icon: Icons.vite, color: "", isImage: true },
  Github: { icon: Icons.github, color: "", isImage: true },
  Postman: { icon: Icons.postman, color: "", isImage: true },
  "Visual Studio Code": { icon: Icons.vscode, color: "", isImage: true },
};

export function TechIcon({
  name,
  className,
  size = 18,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const meta = TECH_MAP[name] ?? {
    icon: Sparkles,
    color: "text-muted-foreground",
  };
  const Icon = meta.icon;

  if (meta.isImage) {
    return (
      <Icon
        width={size}
        height={size}
        className={className}
        aria-hidden="true"
      />
    );
  }

  return (
    <Icon
      size={size}
      className={cn(meta.color, className)}
      aria-hidden="true"
    />
  );
}

export function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs font-medium">
      <TechIcon name={name} size={14} />
      {name}
    </span>
  );
}
