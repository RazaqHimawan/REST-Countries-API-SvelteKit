import * as server from '../entries/pages/_page.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.554e9a93.js","_app/immutable/chunks/index.62ec8c34.js","_app/immutable/chunks/index.bd632bad.js"];
export const stylesheets = ["_app/immutable/assets/2.1ccd88f2.css"];
export const fonts = [];
