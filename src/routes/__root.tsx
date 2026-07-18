import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, Outlet } from "@tanstack/react-router";

import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { RootLayout } from "#/components/layout/root-layout";
import { NotFoundPage } from "./_home/not-found";

const queryClient = new QueryClient();

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
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

  notFoundComponent: () => <NotFoundPage />,
});
