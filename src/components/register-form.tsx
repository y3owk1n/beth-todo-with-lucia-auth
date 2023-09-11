import * as elements from "typed-html";

function RegisterForm() {
  return (
    <form
      class="flex flex-col gap-3"
      hx-post="/api/auth/register"
      _="on submit target.reset()"
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterForm;
