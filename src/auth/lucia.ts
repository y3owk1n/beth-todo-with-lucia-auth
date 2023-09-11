// lucia.ts
import { lucia } from "lucia";
import { elysia } from "lucia/middleware";
import { postgres as postgresAdapter } from "@lucia-auth/adapter-postgresql";
import { queryClient } from "../db";

// expect error (see next section)
export const auth = lucia({
  env: "DEV", // "PROD" if deployed to HTTPS
  middleware: elysia(),
  adapter: postgresAdapter(queryClient, {
    user: "auth_user",
    key: "user_key",
    session: "user_session",
  }),
  getUserAttributes: (data) => {
    return {
      email: data.email,
    };
  },
});

export type Auth = typeof auth;
