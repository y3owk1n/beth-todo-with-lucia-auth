import BaseHtml from "../components/base-html";

export async function get() {
  return (
    <BaseHtml>
      <body class="flex w-full h-screen justify-center items-center">
        <a href="/auth/login">Login Now</a>
      </body>
    </BaseHtml>
  );
}
