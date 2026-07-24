import { Link } from "@tanstack/react-router";
import { Download, Linkedin, Mail, X } from "lucide-react";
import { NAV_LINKS } from "@/components/layout/nav-links";
import { cn } from "@/lib/utils";
import { useTheme } from "../providers/theme-provider";
import resumePdf from "@/components/assets/john-zelade-higo-cv.pdf";
import { Icons } from "../icons";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { theme } = useTheme();
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 md:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          `absolute inset-0 h-screen ${theme === "light" ? "bg-white/95" : "bg-black/95"} backdrop-blur-sm transition-opacity duration-300`,
          open ? "opacity-100" : "opacity-0",
        )}
      />

      {/* Panel */}
      <div
        className={cn(
          "absolute right-0 top-0 flex h-full w-full flex-col justify-between border-l border-border bg-card p-6 shadow-xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div>
          <div className="mb-8 flex items-center justify-between">
            <span className="text-lg font-bold">JZ</span>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="rounded-md p-1 text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground hover:bg-secondary"
                activeProps={{ className: "bg-secondary text-primary" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-5">
          <div className="flex px-2 justify-between">
            <a
              href={resumePdf}
              download="John_Zelade_Higo_Resume.pdf"
              className="flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 md:flex"
            >
              <Download size={16} />
              Resume
            </a>
          </div>
          <div className="flex px-4 items-center gap-4 text-muted-foreground">
            <a
              href="https://linkedin.com/in/john-zelade-higo/"
              aria-label="LinkedIn"
              className="hover:text-primary"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/John-Zelade"
              aria-label="GitHub"
              className="hover:text-primary"
            >
              <Icons.github className="h-5 w-5" />
            </a>
            <a
              href="mailto:johnzeladehigo@gmail.com"
              aria-label="Email"
              className="hover:text-primary"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
