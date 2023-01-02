import { h, hydrate } from 'preact';
import App from "./App.tsx";

const app = h(App, null, null)

hydrate(app, document.getElementById('root'))