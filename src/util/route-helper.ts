import { Context } from "elysia";
import type { App } from "../..";
import { CookieRequest } from "@elysiajs/cookie";

type PluginHtmlContext = {
  sanitize: any;
  html(value: string): Response;
};

export type ContextWithPlugin = Context<App["router"], App["store"]> &
  CookieRequest &
  PluginHtmlContext;

export type AppContext = ContextWithPlugin;
