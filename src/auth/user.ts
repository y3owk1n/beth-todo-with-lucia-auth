import { AppContext } from "../util/route-helper";
import { auth } from "./lucia";
import cookie from "cookie";

export async function getSession(request: AppContext["request"]) {
  const cookies = request["headers"].get("cookie");

  const parsedCookie = cookie.parse(cookies || "");

  const sessionCookie = parsedCookie["auth_session"];

  const luciaRequest = {
    method: request["method"],
    url: request["url"],
    headers: {
      origin: request["headers"].get("origin"),
      cookie: request["headers"].get("cookie"),
      authorization: request["headers"].get("authorization"),
    },
    storedSessionCookie: sessionCookie,
  };

  auth.validateRequestOrigin(luciaRequest); // csrf protection
  const sessionId = auth.readSessionCookie(cookies);
  if (sessionId) {
    const session = await auth.validateSession(sessionId); // note: `validateSession()` throws an error if session is invalid

    if (session.state === "active") {
      return {
        session,
        sessionCookie: null,
      };
    } else {
      await auth.invalidateSession(sessionId);
      const newSession = await auth.createSession({
        userId: session.user.userId,
        attributes: {}, // expects `Lucia.DatabaseSessionAttributes`
      });
      const sessionCookie = auth.createSessionCookie(newSession);

      return {
        session: newSession,
        sessionCookie,
      };
    }
  } else {
    return {
      session: null,
      sessionCookie: null,
    };
  }
}
