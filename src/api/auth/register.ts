import { t } from "elysia";
import { AppContext } from "../../util/route-helper";
import { auth } from "../../auth/lucia";

export const post = {
  handler: async (context: AppContext) => {
    const body = context.body;

    try {
      const user = await auth.createUser({
        key: {
          providerId: "email",
          providerUserId: body.email.toLowerCase(),
          password: body.password,
        },
        attributes: {
          email: body.email.toLowerCase(),
        }, // expects `Lucia.DatabaseUserAttributes`
      });

      const session = await auth.createSession({
        userId: user.userId,
        attributes: {},
      });

      const sessionCookie = auth.createSessionCookie(session);

      context.set.status = 302;
      context.set.redirect = "/todos";
      context.set.headers = {
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
