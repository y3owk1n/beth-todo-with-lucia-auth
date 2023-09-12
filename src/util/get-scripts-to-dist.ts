// Hyperscript
import { htmxVersion, hypescriptVersion } from "@/lib/constants";

const hyperscriptResponse = await fetch(
  `https://unpkg.com/hyperscript.org@${hypescriptVersion}`,
);

const hyperscriptText = await hyperscriptResponse.text(); // HTML string

const hyperscriptPath = "./public/dist/hyperscript.min.js";

await Bun.write(hyperscriptPath, hyperscriptText);

console.log(
  `Done writing hyperscript@${hypescriptVersion} to ${hyperscriptPath}`,
);

// Htmx
const htmxResponse = await fetch(`https://unpkg.com/htmx.org@${htmxVersion}`);

const htmxText = await htmxResponse.text(); // HTML string

const htmxPath = "./public/dist/htmx.min.js";

await Bun.write(htmxPath, htmxText);

console.log(`Done writing htmx@${htmxVersion} to ${htmxPath}`);
