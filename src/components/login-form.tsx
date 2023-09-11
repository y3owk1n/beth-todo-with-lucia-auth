import * as elements from "typed-html";

function LoginForm() {
  return (
    <form
      class="flex flex-col gap-3"
      hx-post="/api/auth/login"
      hx-target="#login-error"
      hx-swap="innerHTML"
      _="on htmx:afterRequest.details.isError !== true reset() me"
    >
      <h1>Login</h1>
      <input
        type="email"
        name="email"
        placeholder="email"
        class="border border-black px-2 py-1"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        class="border border-black px-2 py-1"
      />
      <div id="login-error"></div>
      <button type="submit">Submit</button>
      <a href="/auth/register">Register Now</a>
    </form>
  );
}

export default LoginForm;
