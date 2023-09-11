import { t } from "elysia";
import { AppContext } from "../../util/route-helper";
import { auth } from "../../auth/lucia";
import { ElysiaErrors } from "elysia/error";
import ErrorAlert from "../../components/error-alert";
import * as elements from "typed-html";
import { LuciaError } from "lucia";

export const post = {
  handler: async (context: AppContext) => {
    const body = context.body;

    try {
      const key = await auth.useKey(
        "email",
        body.email.toLowerCase(),
        body.password
      );

      const session = await auth.createSession({
        userId: key.userId,
        attributes: {},
      });

      const authRequest = auth.handleRequest(context);
      authRequest.setSession(session);

      const sessionCookie = auth.createSessionCookie(session);

      // context.set.status = 302;
      // context.set.redirect = "/todos";
      context.set.headers = {
        "Hx-Redirect": "/todos",
        "Set-Cookie": sessionCookie.serialize(),
      };
      return;
    } catch (e: any) {
      if (e instanceof LuciaError && e.message === "AUTH_INVALID_KEY_ID") {
        // invalid key

        return <ErrorAlert message="Invalid key" />;
      }
      if (e instanceof LuciaError && e.message === "AUTH_INVALID_PASSWORD") {
        // incorrect password
        return <ErrorAlert message="Invalid credentials" />;
      }
      return <ErrorAlert message={e.message} />;
    }
  },
  hooks: {
    body: t.Object({
      email: t.String({
        error: "Email is required",
      }),
      password: t.String({
        error: "Password is required",
      }),
    }),
  },
  error(error: ElysiaErrors) {
    return <ErrorAlert message={error.message} />;
  },
};
