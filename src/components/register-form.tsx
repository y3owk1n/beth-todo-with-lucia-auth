import { Icons } from "./icons";
import { Input } from "./ui/input";

function RegisterForm() {
  return (
    <form
      class="flex flex-col gap-3"
      hx-post="/api/auth/register"
      _="on htmx:beforeRequest remove #error-message
            on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText into #register-error
            else reset() me"
    >
      <Input type="email" name="email" placeholder="email" />
      <Input type="password" name="password" placeholder="password" />

      <div id="register-error"></div>
      <button
        class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
        type="submit"
      >
        <Icons.loader2
          id="loader"
          class="htmx-indicator mr-2 w-6 h-6 animate-spin"
        />
        Submit
      </button>
      <a
        class="underline text-center text-sm underline-offset-4 hover:text-primary"
        href="/auth/login"
      >
        Login Now
      </a>
    </form>
  );
}

export default RegisterForm;
