import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, Outlet } from "@tanstack/react-router";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { RootLayout } from "#/components/layout/root-layout";
import { NotFoundPage } from "./_home/not-found";
import { Toaster } from "sonner";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position="top-center" />
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <TooltipProvider>
          <div vaul-drawer-wrapper="" className="overflow-x-clip antialiased">
            <RootLayout>
              <Outlet />
            </RootLayout>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  ),

  notFoundComponent: () => (
    <div className="w-full flex justify-center">
      <NotFoundPage />
    </div>
  ),
});
