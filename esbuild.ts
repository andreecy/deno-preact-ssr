import * as esbuild from 'https://deno.land/x/esbuild@v0.15.10/mod.js'
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.6.0/mod.ts";

const importMapURL = new URL('./import_map.json', import.meta.url)
// console.log(importMapURL)
const result = await esbuild.build({
    plugins: [denoPlugin({ importMapURL: importMapURL })],
    entryPoints: ['entry-client.js'],
    outdir: 'out',
    bundle: true,
    minify: true,
    format: 'esm',
    target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
})
esbuild.stop()