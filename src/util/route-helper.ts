import { Context } from "elysia";
import type { App } from "../..";

export type AppContext = Context<App["router"], App["store"]>;
