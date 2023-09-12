import { Session } from "lucia";
import { Button } from "./ui/button";
import { Icons } from "./icons";

function UserInfo(user: Session["user"]) {
  return (
    <div class="flex items-center justify-around">
      <p>{user.email}</p>
      <Button
        hx-post="/api/auth/signout"
        hx-ext="loading-states"
        data-loading-disable
        data-loading-busy
        data-loading-target="#loader"
        data-loading-class-remove="hidden"
      >
        <Icons.loader2 id="loader" class="hidden mr-2 w-6 h-6 animate-spin" />
        Logout
      </Button>
    </div>
  );
}

export default UserInfo;
