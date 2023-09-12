import { LuciaError } from "lucia";
import { Type } from "@sinclair/typebox";
import { RouteHandler } from "util/route-helper";
import { auth } from "@/auth/lucia";
import ErrorAlert from "@/components/error-alert";

const loginSchema = Type.Object({
  email: Type.String({
    error: "Email is required",
  }),
  password: Type.String({
    error: "Password is required",
  }),
});

export const post: RouteHandler<typeof loginSchema, undefined> = {
  handler: async (context) => {
    const body = context.body;

    await Bun.sleep(3000);

    try {
      const key = await auth.useKey(
        "email",
        body.email.toLowerCase(),
        body.password,
      );

      const session = await auth.createSession({
        userId: key.userId,
        attributes: {},
      });

      const authRequest = auth.handleRequest(context);
      authRequest.setSession(session);

      const sessionCookie = auth.createSessionCookie(session);

      context.set.headers = {
        "Hx-Redirect": "/todos",
        "Set-Cookie": sessionCookie.serialize(),
      };
      return;
    } catch (e: any) {
      context.set.status = 400;
      if (e instanceof LuciaError && e.message === "AUTH_INVALID_KEY_ID") {
        // invalid key
        return <ErrorAlert message="No user found" />;
      }
      if (e instanceof LuciaError && e.message === "AUTH_INVALID_PASSWORD") {
        // incorrect password
        return <ErrorAlert message="Invalid credentials" />;
      }

      return <ErrorAlert message={e.message} />;
    }
  },
  hooks: {
    body: loginSchema,
    error: ({ error }) => {
      return <ErrorAlert message={error.message} />;
    },
  },
};
