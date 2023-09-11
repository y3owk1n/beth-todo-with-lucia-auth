function LoginForm() {
  return (
    <form
      class="flex flex-col gap-3"
      hx-post="/api/auth/login"
      hx-target="#login-error"
      hx-swap="innerHTML"
      hx-swap-oob="true"
      _="on htmx:beforeRequest remove #login-error
            on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText into #login-error
            else reset() me"
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
