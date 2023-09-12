import Elysia from "elysia";
import { html } from "@elysiajs/html";
import cookie from "@elysiajs/cookie";
import { autoroutes } from "elysia-autoroutes";
import { staticPlugin } from "@elysiajs/static";

export const app = new Elysia()
  .use(html())
  .use(cookie())
  .use(staticPlugin())
  .use(
    autoroutes({
      routesDir: "./src/routes",
    }),
  )
  .use(
    autoroutes({
      routesDir: "./src/api",
      prefix: "/api", // -> optional
    }),
  )
  .listen(3000);

console.log(
  `Elysia is running at http://${app.server?.hostname}:${app.server?.port}`,
);

export type App = typeof app;
