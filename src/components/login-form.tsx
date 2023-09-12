import { Icons } from "./icons";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function LoginForm() {
  return (
    <form
      class="flex flex-col gap-3"
      hx-post="/api/auth/login"
      hx-ext="loading-states"
      data-loading-target="#loader"
      data-loading-class-remove="hidden"
      _="on htmx:beforeRequest remove #server-error 
        on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText before <button />
            else reset() me"
    >
      <Input type="email" name="email" placeholder="email" />
      <Input type="password" name="password" placeholder="password" />
      <Button id="submit" data-loading-disable data-loading-busy type="submit">
        <Icons.loader2 id="loader" class="hidden mr-2 w-6 h-6 animate-spin" />
        Submit
      </Button>
      <a
        class="underline text-center text-sm underline-offset-4 hover:text-primary"
        href="/auth/register"
      >
        Register Now
      </a>
    </form>
  );
}

export default LoginForm;
