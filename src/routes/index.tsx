import * as elements from "typed-html";
import BaseHtml from "../components/base-html";
import LoginForm from "../components/login-form";

export async function get() {
  return (
    <BaseHtml>
      <body class="flex w-full h-screen justify-center items-center">
        <LoginForm />
      </body>
    </BaseHtml>
  );
}
