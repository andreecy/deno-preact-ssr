import { serve } from "https://deno.land/std@0.157.0/http/server.ts";
import { createElement } from "react";
import { renderToReadableStream } from "react-dom/server";
import App from "./App.tsx";

const suspenseMark = `data:text/javascript;/** suspense mark **/`;

const handler = async (request: Request) => {

    const url = new URL(request.url)
    console.log(url.pathname)

    // match the route
    if (url.pathname === '/') {
        const stream = await renderToReadableStream(
            createElement(App, {}),
            {
                bootstrapScripts: ['/entry-client.js']
            })

        return new Response(stream, {
            headers: { 'content-type': 'text/html' },
        });
    }

    // match file path
    const filePath = './out' + url.pathname
    let fileSize;

    try {
        fileSize = (await Deno.stat(filePath)).size;
    } catch (e) {
        if (e instanceof Deno.errors.NotFound) {
            return new Response(null, { status: 404 });
        }
        return new Response(null, { status: 500 });
    }

    const file = await Deno.readFile(filePath)

    return new Response(file, {
        headers: { 'content-type': 'text/javascript' },

    });
};

console.log("Listening on http://localhost:8000");
serve(handler);