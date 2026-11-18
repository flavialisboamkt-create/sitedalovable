import { createFileRoute, redirect } from "@tanstack/react-router";

// O Portfólio foi substituído pela página da plataforma EstrategIA.
export const Route = createFileRoute("/portfolio")({
  beforeLoad: () => { throw redirect({ to: "/plataforma", statusCode: 301 }); },
});
