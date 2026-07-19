import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_home")({
  component: HomeLayout,
});

function HomeLayout() {
  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8 flex justify-center">
      <Outlet />
    </div>
  );
}
