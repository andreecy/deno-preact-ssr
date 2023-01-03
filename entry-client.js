import { createElement } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.tsx";

const el = createElement(App, null, null)

hydrateRoot(document, el)