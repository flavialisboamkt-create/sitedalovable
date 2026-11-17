import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/marcas-depoimentos")({
  beforeLoad: () => { throw redirect({ to: "/marcas", statusCode: 301 }); },
});
