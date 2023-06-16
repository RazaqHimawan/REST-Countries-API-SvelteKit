import { c as create_ssr_component, a as add_attribute, e as escape, b as subscribe, v as validate_component } from "../../chunks/index2.js";
import { n as navigating } from "../../chunks/stores.js";
const app = "";
const Navbar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-1y0grg5.svelte-1y0grg5{display:flex;justify-content:space-between;align-items:center;background-color:var(--color-elem);padding:1rem;font-size:var(--font-size-home);box-shadow:0 1px 0 0 rgba(0, 0, 0, 0.1)}h1.svelte-1y0grg5.svelte-1y0grg5{user-select:none}button.svelte-1y0grg5.svelte-1y0grg5{cursor:pointer;border:none;background:none;font-size:var(--font-size-home);color:var(--color-text);font-weight:600;min-height:48px}button.svelte-1y0grg5 span.svelte-1y0grg5:last-child{margin-left:0.3rem}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icon = "fa fa-moon-o";
  let text = "Dark";
  $$result.css.add(css$1);
  return `<nav class="svelte-1y0grg5"><h1 class="svelte-1y0grg5">Where in the world?</h1>
  <button class="svelte-1y0grg5"><i${add_attribute("class", icon, 0)}></i>
    <span class="svelte-1y0grg5">${escape(text)} Mode </span></button>
</nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-txizsx{text-align:center;font-size:32px;margin-top:5rem}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navigating, $$unsubscribe_navigating;
  $$unsubscribe_navigating = subscribe(navigating, (value) => $navigating = value);
  $$result.css.add(css);
  $$unsubscribe_navigating();
  return `<header>${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}</header>

${$navigating ? `<h2 class="svelte-txizsx">Loading...</h2>` : `<main>${slots.default ? slots.default({}) : ``}</main>`}`;
});
export {
  Layout as default
};
