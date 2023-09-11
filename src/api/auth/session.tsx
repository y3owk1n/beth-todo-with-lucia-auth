import { AppContext } from "../../util/route-helper";

import * as elements from "typed-html";
import UserInfo from "../../components/user-info";
import { auth } from "../../auth/lucia";

export const get = {
  handler: async (context: AppContext) => {
    try {
      // const { session, sessionCookie } = await getSession(context.request);

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
};
