import * as elements from "typed-html";
import BaseHtml from "../components/base-html";

export async function get() {
  return (
    <BaseHtml>
      <body class="flex flex-col w-full h-screen justify-center items-center">
        <div
          hx-get="/api/auth/session"
          hx-trigger="load"
          hx-swap="innerHTML"
        ></div>
        <div hx-get="/api/todos" hx-trigger="load" hx-swap="innerHTML"></div>
      </body>
    </BaseHtml>
  );
}
