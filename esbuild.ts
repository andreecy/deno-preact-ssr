import * as esbuild from 'https://deno.land/x/esbuild@v0.15.10/mod.js'
import { denoPlugin } from "https://deno.land/x/esbuild_deno_loader@0.6.0/mod.ts";

const importMapURL = new URL('./import_map.json', import.meta.url)

const result = await esbuild.build({
    plugins: [denoPlugin({ importMapURL: importMapURL })],
    entryPoints: ['entry-client.js'],
    outdir: 'out',
    bundle: true,
    // minify: true,
    format: 'esm',
    treeShaking: true,
    target: ["chrome99", "firefox99", "safari15"],
    // jsxFactory: 'React.createElement',
    // jsxFragment: 'React.Fragment',
})
esbuild.stop()