import { Context } from "elysia";
import type { App } from "../..";
import { CookieRequest } from "@elysiajs/cookie";
import { ElysiaErrors } from "elysia/error";
import { Static, TSchema } from "@sinclair/typebox";

type PluginHtmlContext = {
  sanitize: any;
  html(value: string): Response;
};

export type ContextWithPlugin = Context<App["router"], App["store"]> &
  CookieRequest &
  PluginHtmlContext;

export type AppContext<
  Body = undefined,
  Params = undefined
> = Body extends undefined
  ? Params extends undefined
    ? ContextWithPlugin
    : Omit<ContextWithPlugin, "params"> & { params: Params }
  : Params extends undefined
  ? Omit<ContextWithPlugin, "body"> & { body: Body }
  :
      | (Omit<ContextWithPlugin, "body" | "params"> & {
          body: Body;
          params: Params;
        })
      | ContextWithPlugin; // Add this line to handle the case where both are undefined

export type SchemaGeneric = TSchema | undefined;

export type RouteHandler<
  Body extends SchemaGeneric = TSchema,
  Params extends SchemaGeneric = TSchema
> = {
  handler: (
    context: AppContext<
      Body extends Partial<TSchema> ? Static<Body> : undefined,
      Params extends Partial<TSchema> ? Static<Params> : undefined
    >
  ) => Promise<string | undefined | void>;
  error?(error: ElysiaErrors): string;
} & {
  hooks?: Body extends undefined
    ? Params extends undefined
      ? {}
      : { params: Params }
    : Params extends undefined
    ? { body: Body }
    : { body: Body; params: Params };
};
