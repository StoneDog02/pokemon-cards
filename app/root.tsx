import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css",
    },

{ rel: "preconnect", href:"https://fonts.googleapis.com"},
{ rel: "preconnect", href:"https://fonts.gstatic.com", crossorigin: true},
{ href: "https://fonts.googleapis.com/css2?family=Changa&display=swap", rel: "stylesheet"},
{ rel: "preconnect", href: "https://fonts.googleapis.com"},
{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
{ href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap", rel: "stylesheet"},
{ rel: "preconnect", href: "https://fonts.googleapis.com"},
{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
{ href: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600&display=swap", rel: "stylesheet"},
{ rel: "preconnect", href: "https://fonts.googleapis.com"},
{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
{ href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600&display=swap", rel: "stylesheet"},
{ rel: "preconnect", href: "https://fonts.googleapis.com"},
{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
{ href: "https://fonts.googleapis.com/css2?family=Mulish:ital@1&display=swap", rel: "stylesheet"},
{ rel: "preconnect", href: "https://fonts.googleapis.com"},
{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
{ href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,600&display=swap", rel: "stylesheet"},
{ rel: "preconnect", href: "https://fonts.googleapis.com"},
{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
{ href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap", rel: "stylesheet"},
{ rel: "preconnect", href: "https://fonts.googleapis.com"},
{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
{ href: "https://fonts.googleapis.com/css2?family=Ubuntu:ital@1&display=swap", rel: "stylesheet"},
{ rel: "preconnect", href: "https://fonts.googleapis.com"},
{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
{ href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300&display=swap", rel: "stylesheet"},
{ rel: "preconnect", href: "https://fonts.googleapis.com"},
{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
{ href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital@1&display=swap", rel: "stylesheet"},
{ rel: "preconnect", href: "https://fonts.googleapis.com"},
{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: true},
{ href: "https://fonts.googleapis.com/css2?family=Hind:wght@500&display=swap", rel: "stylesheet"},

  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <script src="https://kit.fontawesome.com/b439bcdc85.js" crossorigin="anonymous"></script>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
