import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_home")({
  component: HomeLayout,
});

function HomeLayout() {
  return (
    <div className="w-full px-12 py-6">
      <Outlet />
    </div>
  );
}
