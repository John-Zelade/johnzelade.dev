import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/components/layout/nav-links";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MobileMenu } from "@/components/layout/mobile-menu";
import resumePdf from "@/components/assets/john-zelade-higo-cv.pdf";
import { Download } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky w-full flex justify-center top-0 z-40 border-b border-border/60 bg-background/80 px-4 sm:px-6 lg:px-8 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight">
          JZ
        </Link>

        <div className="flex gap-2">
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{ className: "text-primary" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={resumePdf}
              download="John_Zelade_Higo_Resume.pdf"
              className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90 md:flex"
            >
              <Download size={16} />
              Resume
            </a>

            <div className="flex items-center">
              <ThemeToggle />
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="rounded-md p-2 text-foreground hover:bg-secondary md:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
