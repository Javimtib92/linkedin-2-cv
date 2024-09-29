import { App } from "@/src/app";
import { render } from "preact";
import "./index.css";

const root = document.getElementById("app");

if (root) {
  render(<App />, root);
}
