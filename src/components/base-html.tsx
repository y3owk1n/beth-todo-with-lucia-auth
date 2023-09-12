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
        <script src="/public/dist/htmx.min.js"></script>
        <script src="/public/dist/hyperscript.min.js"></script>
        <link href="/public/dist/main.css" rel="stylesheet"></link>
      </head>
      <body class={"font-sans antialiased"}>{children}</body>
    </html>
  );
}

export default BaseHtml;
