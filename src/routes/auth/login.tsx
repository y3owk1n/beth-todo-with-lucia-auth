import BaseHtml from "@/components/base-html";
import LoginForm from "@/components/login-form";

export async function get() {
  return (
    <BaseHtml>
      <body class="grid w-full h-screen justify-center items-center">
        <div class="space-y-3">
          <LoginForm />
        </div>
      </body>
    </BaseHtml>
  );
}
