import { mdsvex } from "mdsvex";
import mdsvexconfig from "./mdsvex.config.js";
import adapter from '@sveltejs/adapter-node';
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexconfig.extensions],

  kit: {
    // Default SvelteKit options
    // target: "#svelte",
    adapter: adapter(),
  },

  preprocess: [preprocess({}), mdsvex(mdsvexconfig)],
};

export default config;
