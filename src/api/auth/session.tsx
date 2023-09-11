import { authCookie } from "@/lib/constants";
import { RouteHandler } from "util/route-helper";
import { auth } from "@/auth/lucia";
import UserInfo from "@/components/user-info";

export const get: RouteHandler = {
  handler: async (context) => {
    try {
      const authRequest = auth.handleRequest(context);
      const session = await authRequest.validate();

      if (!session) {
        context.removeCookie(authCookie);
        context.set.headers = {
          "Hx-Redirect": "/",
        };
        return;
      }

      return <UserInfo {...session.user} />;
    } catch (error) {
      context.removeCookie(authCookie);
      context.set.headers = {
        "Hx-Redirect": "/",
      };
      return;
    }
  },
};
