import * as elements from "typed-html";
import { Session } from "lucia";

function UserInfo(user: Session["user"]) {
  return (
    <div class="flex justify-around">
      <p>{user.email}</p>
      <button hx-post="/api/auth/signout">Logout</button>
    </div>
  );
}

export default UserInfo;
