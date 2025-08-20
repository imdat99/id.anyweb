import { renderToWebStream } from "vue/server-renderer";
import { createApp } from "./main";
import { readFileSync } from "fs";
import type { Manifest } from "vite";
async function render(url: string) {
  const { app, router } = await createApp();
  // set location cho router
  await router.push(url);
  await router.isReady(); // đợi router resolve async components
  const ctx = {};
  const stream = renderToWebStream(app, ctx);
  return {
    stream,
    context: ctx,
  };
}
const getHead = () => {
    const manifest = fromFile("dist/client/.vite/manifest.json");
    const entryChunk = getEntryChunk(manifest);
    console.log("entryChunk", entryChunk)
    const styleStr = entryChunk?.css?.map((url) => `<link rel="stylesheet" href="${url}" /><link rel="preload" href="${url}" as="style"/>`).join('');
    const scripts = entryChunk?.dynamicImports?.map((url) => `<link rel="preload" href="${manifest[url].file}" as="script" crossorigin="anonymous" />`).join('');
    return minifyJavaScript(`
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue + TS</title>
    ${styleStr??""}
    ${scripts??""}
    <script type=\"module\" defer src=\"${entryChunk?.file??"/src/entry.client.ts"}\"></script>
  </head>
  <body>`)};
export default async function handler(_request: Request): Promise<Response> {
  const url = new URL(_request.url);
  const { stream } = await render(url.href.replace(url.origin, ""));
  return new Response(
    stream.pipeThrough(
      new TransformStream({
        start(controller) {
          controller.enqueue(new TextEncoder().encode(getHead()));
        },
        transform(chunk, controller) {
          // Giả sử chunk là text
        //   const text = new TextDecoder().decode(chunk);
        //   const modifiedText = text.replace(
        //     /<\/head>/g,
        //     `${Object.values(helmetContext.helmet)
        //       .map((h) => h.toString())
        //       .join("")}</head>`
        //   ); // sửa dữ liệu
          controller.enqueue(chunk);
        },
        flush(controller) {
          controller.enqueue(new TextEncoder().encode("</body></html>"));
        },
      })
    ),
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}
export function getEntryChunk(manifest: Manifest) {
  return Object.values(manifest).find((chunk) => chunk.isEntry)!;
}

export function fromFile(path: string): Manifest {
    try{
        return import.meta.env.DEV ? {} : JSON.parse(readFileSync(path, { encoding: "utf-8" }));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch(_e) {
        return {}
    }
}
function minifyJavaScript(jsCode: string = ''): string {
    return jsCode
        .replace(/\s*\/\/.*$/gm, '') // Loại bỏ comment dòng
        .replace(/\s*\/\*[\s\S]*?\*\//g, '') // Loại bỏ comment block
        .replace(/\s+/g, ' ') // Thay thế nhiều khoảng trắng bằng một khoảng trắng
        .replace(/(\s*([{};:])\s*)/g, '$2') // Loại bỏ khoảng trắng quanh dấu ngoặc và dấu ;
        .trim(); // Loại bỏ khoảng trắng đầu và cuối
}