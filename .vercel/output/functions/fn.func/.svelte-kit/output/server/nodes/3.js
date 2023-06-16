import * as server from '../entries/pages/_name_/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/_name_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[name]/+page.server.js";
export const imports = ["_app/immutable/nodes/3.d3a2dd11.js","_app/immutable/chunks/index.62ec8c34.js"];
export const stylesheets = ["_app/immutable/assets/3.b9d7d94c.css"];
export const fonts = [];
