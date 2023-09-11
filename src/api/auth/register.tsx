import { ElysiaErrors } from "elysia/error";
import { Type } from "@sinclair/typebox";
import { RouteHandler } from "util/route-helper";
import { auth } from "@/auth/lucia";
import ErrorAlert from "@/components/error-alert";

const registerSchema = Type.Object({
  email: Type.String({
    error: "Email is required",
  }),
  password: Type.String({
    error: "Password is required",
  }),
});

export const post: RouteHandler<typeof registerSchema, undefined> = {
  handler: async (context) => {
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
    body: registerSchema,
    error: ({ error }) => {
      return <ErrorAlert message={error.message} />;
    },
  },
};
