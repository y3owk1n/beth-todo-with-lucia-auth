import { t } from "elysia";
import { AppContext } from "../../util/route-helper";
import { auth } from "../../auth/lucia";

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
      context.set.status = 500;

      return "An unknown error occured";
    }
  },
  hooks: {
    body: t.Object({
      email: t.String(),
      password: t.String(),
    }),
  },
};
