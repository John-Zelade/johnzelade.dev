import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t flex justify-center border-border/60 bg-background">
      <div className="container flex flex-col items-center gap-6 py-4">
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/John-Zelade"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>

          <a
            href="https://linkedin.com/in/john-zelade-higo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>

          <a
            href="mailto:johnzeladehigo@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <div className="container flex flex-col items-center gap-3 text-center">
          <p className="max-w-md text-sm text-muted-foreground px-2">
            Interested in working together or have a project in mind? Let's
            build something great.
          </p>

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} John Zelade Higo
          </p>
        </div>
      </div>
    </footer>
  );
}
