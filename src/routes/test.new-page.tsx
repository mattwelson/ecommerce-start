import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/test/new-page")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/test/new-page"!</div>;
}
