import { auth } from "@/auth/lucia";
import { authCookie } from "@/lib/constants";
import { RouteHandler } from "util/route-helper";

export const get: RouteHandler = {
  handler: async (context) => {
    try {
      const authRequest = auth.handleRequest(context);
      const session = await authRequest.validate();

      if (!session) {
        context.set.redirect = "/auth/login";
        return;
      }

      context.set.redirect = "/todos";
    } catch (error) {
      context.removeCookie(authCookie);
      context.set.headers = {
        "Hx-Redirect": "/",
      };
      return;
    }
  },
};
