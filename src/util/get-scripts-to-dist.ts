// Hyperscript
import { htmxVersion, hypescriptVersion } from "@/lib/constants";

const hyperscriptResponse = await fetch(
  `https://unpkg.com/hyperscript.org@${hypescriptVersion}`
);

const hyperscriptText = await hyperscriptResponse.text(); // HTML string

const hyperscriptPath = "./public/dist/hyperscript.min.js";

await Bun.write(hyperscriptPath, hyperscriptText);

console.log(
  `Done writing hyperscript@${hypescriptVersion} to ${hyperscriptPath}`
);

// Htmx
const htmxResponse = await fetch(`https://unpkg.com/htmx.org@${htmxVersion}`);

const htmxText = await htmxResponse.text(); // HTML string

const htmxPath = "./public/dist/htmx.min.js";

await Bun.write(htmxPath, htmxText);

console.log(`Done writing htmx@${htmxVersion} to ${htmxPath}`);

// Htmx disable element plugin
const htmxDisableElementPluginResponse = await fetch(
  `https://unpkg.com/htmx.org@${htmxVersion}/dist/ext/disable-element.js`
);

const htmxDisableElementPluginText =
  await htmxDisableElementPluginResponse.text(); // HTML string

const htmxDisableElementPluginPath =
  "./public/dist/htmx-disable-element.min.js";

await Bun.write(htmxDisableElementPluginPath, htmxDisableElementPluginText);

console.log(
  `Done writing htmx@${htmxVersion} to ${htmxDisableElementPluginPath}`
);

// Htmx loading states plugin
const htmxLoadingStatesPluginResponse = await fetch(
  `https://unpkg.com/htmx.org@${htmxVersion}/dist/ext/loading-states.js`
);

const htmxLoadingStatesPluginText =
  await htmxLoadingStatesPluginResponse.text(); // HTML string

const htmxLoadingStatesPluginPath = "./public/dist/htmx-loading-states.min.js";

await Bun.write(htmxLoadingStatesPluginPath, htmxLoadingStatesPluginText);

console.log(
  `Done writing htmx@${htmxVersion} to ${htmxLoadingStatesPluginPath}`
);
