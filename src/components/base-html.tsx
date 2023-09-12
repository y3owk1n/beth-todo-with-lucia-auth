import * as elements from "typed-html";
import "@fontsource-variable/inter";

function BaseHtml({ children }: elements.Children) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="vieport" content="width=device-width, initial-scale=1.0" />
        <title>The Beth Stack</title>
        <script src="/public/dist/htmx.min.js"></script>
        <script src="/public/dist/hyperscript.min.js"></script>
        <link href="/public/dist/main.css" rel="stylesheet"></link>
      </head>
      {children}
    </html>
  );
}

export default BaseHtml;
