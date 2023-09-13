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
        data-loading-target="#logout-loader"
        data-loading-class-remove="hidden"
        data-loading-path="/api/auth/signout"
      >
        <Icons.loader2
          id="loguout-loader"
          class="hidden mr-2 w-6 h-6 animate-spin"
        />
        Logout
      </Button>
    </div>
  );
}

export default UserInfo;
