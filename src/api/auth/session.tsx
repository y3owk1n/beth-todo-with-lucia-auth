import { RouteHandler } from "../../util/route-helper";

import UserInfo from "../../components/user-info";
import { auth } from "../../auth/lucia";
import { ElysiaErrors } from "elysia/error";
import ErrorAlert from "../../components/error-alert";

export const get: RouteHandler = {
  handler: async (context) => {
    try {
      const authRequest = auth.handleRequest(context);
      const session = await authRequest.validate();

      if (!session) {
        return "No user";
      }

      return <UserInfo {...session.user} />;
    } catch (error) {
      context.set.status = 302;
      context.set.redirect = "/";
      context.set.headers = {
        "Set-Cookie": "",
      };
      return;
    }
  },
  error(error: ElysiaErrors) {
    return <ErrorAlert message={error.message} />;
  },
};
