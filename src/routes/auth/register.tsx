import * as elements from "typed-html";
import BaseHtml from "../../components/base-html";
import RegisterForm from "../../components/register-form";

export async function get() {
  return (
    <BaseHtml>
      <body class="flex w-full h-screen justify-center items-center">
        <RegisterForm />
      </body>
    </BaseHtml>
  );
}
