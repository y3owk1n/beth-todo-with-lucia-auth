function RegisterForm() {
  return (
    <form
      class="flex flex-col gap-3"
      hx-post="/api/auth/register"
      _="on htmx:beforeRequest remove #register-error
            on htmx:afterRequest
            if detail.successful === false
                put detail.xhr.responseText into #register-error
            else reset() me"
    >
      <h1>Register</h1>
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
      <div id="register-error"></div>
      <button type="submit">Submit</button>
      <a href="/auth/login">Login Now</a>
    </form>
  );
}

export default RegisterForm;
