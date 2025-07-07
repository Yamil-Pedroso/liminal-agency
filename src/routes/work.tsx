import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/work")({
  component: Work,
});

function Work() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-white">Work Page!</h1>
    </div>
  );
}
