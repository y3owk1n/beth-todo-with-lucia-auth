import "@fontsource-variable/inter";
import { PropsWithChildren } from "@kitajs/html";
import "@kitajs/html/htmx";

function BaseHtml({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="vieport" content="width=device-width, initial-scale=1.0" />
        <title>The Beth Stack</title>
        <script src="/public/htmx.min.js"></script>
        <script src="/public/hyperscript.min.js"></script>
        <link href="/public/main.css" rel="stylesheet"></link>
        <script src="/public/htmx-disable-element.min.js"></script>
        <script src="/public/htmx-loading-states.min.js"></script>
      </head>
      <body class={"font-sans antialiased"}>{children}</body>
    </html>
  );
}

export default BaseHtml;
