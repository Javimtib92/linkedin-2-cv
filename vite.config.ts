import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
// biome-ignore lint/correctness/noNodejsModules: <explanation>
import path from "node:path";

export default defineConfig({
	plugins: [preact(), tailwindcss()],
	server: {
		port: 3000
	  },
	
	  resolve: {
		alias: [
		  { find: "@/src", replacement: path.resolve(__dirname, "src") },
		]
	  },
});
