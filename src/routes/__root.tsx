import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { SiteLayout } from "@/components/site-layout";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() { return <div className="site-container py-40 text-center"><h1 className="page-title">Página não encontrada.</h1><Button asChild variant="editorial" className="mt-9"><Link to="/">Voltar ao início</Link></Button></div>; }
function ErrorComponent({ error, reset }: ErrorComponentProps) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <div className="site-container py-40 text-center"><h1 className="section-title">Esta página não carregou.</h1><p className="mt-4 text-muted-foreground">Tente novamente ou volte ao início.</p><div className="mt-8 flex justify-center gap-3"><Button variant="editorial" onClick={() => { router.invalidate(); reset(); }}>Tentar novamente</Button><Button asChild variant="editorialOutline"><Link to="/">Início</Link></Button></div></div>;
}
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [{ charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { property: "og:type", content: "website" }, { property: "og:image", content: "/og-image.jpg" }, { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:image", content: "/og-image.jpg" }], links: [{ rel: "stylesheet", href: appCss }, { rel: "icon", type: "image/png", href: "/favicon.png" }, { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" }] }),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) { return <html lang="pt-BR"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><SiteLayout><Outlet /></SiteLayout></QueryClientProvider>; }
