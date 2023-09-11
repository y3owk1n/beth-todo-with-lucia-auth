import { auth } from "@/auth/lucia";
import { RouteHandler } from "util/route-helper";

export const post: RouteHandler = {
  handler: async (context) => {
    const authRequest = auth.handleRequest(context);
    const session = await authRequest.validate(); // or `authRequest.validateBearerToken()`
    if (!session) {
      return;
    }
    await auth.invalidateSession(session.sessionId);

    authRequest.setSession(null); // for session cookie

    await auth.deleteDeadUserSessions(session.user.userId);

    context.set.headers = {
      "Hx-Redirect": "/",
      "Set-Cookie": "",
    };

    return;
  },
};
