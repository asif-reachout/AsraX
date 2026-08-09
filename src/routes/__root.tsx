import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { useEffect, useState } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AsraX Media — Full Funnel Marketing Agency for Global Brands" },
      { name: "description", content: "A growth partner that keeps every result transparent. Websites, content, SEO, paid ads, social, and reporting — built around leads and revenue." },
      { name: "author", content: "AsraX Media" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://asraxmedia.com/" },
      { property: "og:site_name", content: "AsraX Media" },
      { property: "og:title", content: "AsraX Media — Full Funnel Marketing Agency for Global Brands" },
      { property: "og:description", content: "A growth partner that keeps every result transparent. Websites, content, SEO, paid ads, social, and reporting — built around leads and revenue." },
      { property: "og:image", content: "https://asraxmedia.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:alt", content: "AsraX Media — Full Funnel Marketing Agency for Global Brands" },
      // Twitter / X Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "AsraX Media — Full Funnel Marketing Agency for Global Brands" },
      { name: "twitter:description", content: "A growth partner that keeps every result transparent. Websites, content, SEO, paid ads, social, and reporting — built around leads and revenue." },
      { name: "twitter:image", content: "https://asraxmedia.com/og-image.png" },
      { name: "twitter:image:alt", content: "AsraX Media — Full Funnel Marketing Agency for Global Brands" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

const PROGRESS_MIN_MS = 500; // keep the bar on screen long enough to read as feedback

function RouteProgress() {
  const router = useRouter();
  const [phase, setPhase] = useState<"idle" | "loading" | "done">("idle");

  useEffect(() => {
    let startedAt = 0;
    let finishTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const offStart = router.subscribe("onBeforeNavigate", () => {
      clearTimeout(finishTimer);
      clearTimeout(hideTimer);
      startedAt = performance.now();
      setPhase("loading");
    });

    const offEnd = router.subscribe("onResolved", () => {
      const wait = Math.max(0, PROGRESS_MIN_MS - (performance.now() - startedAt));
      finishTimer = setTimeout(() => {
        setPhase("done");
        hideTimer = setTimeout(() => setPhase("idle"), 250);
      }, wait);
    });

    return () => {
      offStart();
      offEnd();
      clearTimeout(finishTimer);
      clearTimeout(hideTimer);
    };
  }, [router]);

  if (phase === "idle") return null;
  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-100 h-[3px]">
      <div className={`h-full bg-brand shadow-[0_0_8px_var(--brand)] ${phase === "done" ? "route-progress-done" : "route-progress"}`} />
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <RouteProgress />
      <Outlet />
    </QueryClientProvider>
  );
}
