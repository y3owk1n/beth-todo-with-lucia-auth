import * as elements from "typed-html";

function BaseHtml({ children }: elements.Children) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="vieport" content="width=device-width, initial-scale=1.0" />
        <title>The Beth Stack</title>
        <script src="https://unpkg.com/htmx.org@1.9.3"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://unpkg.com/hyperscript.org@0.9.9"></script>
      </head>
      {children}
    </html>
  );
}

export default BaseHtml;
