import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Rocket } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_home/not-found")({
  component: NotFoundPage,
});

export function NotFoundPage() {
  return (
    <div className="container flex flex-col items-center justify-center py-24 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary/60 text-muted-foreground">
        <Rocket size={32} strokeWidth={1.25} />
      </div>
      <p className="mt-8 text-6xl font-bold tracking-tight text-primary">404</p>
      <h1 className="mt-2 text-xl font-semibold">Page Not Found</h1>
      <p className="mt-2 max-w-sm text-muted-foreground">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className={cn(buttonVariants(), "mt-8")}>
        Back to Home
      </Link>
    </div>
  );
}
