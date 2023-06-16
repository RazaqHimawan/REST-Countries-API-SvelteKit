import { c as create_ssr_component, e as escape, a as add_attribute, d as each } from "../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{display:grid;margin:1.5rem}span.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{font-weight:700}.back.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{display:flex;justify-content:center;width:120px;background-color:var(--color-elem);margin-top:2rem;margin-bottom:4rem;margin-inline:1.5rem;box-shadow:1px 1px 5px 0 rgba(0, 0, 0, 0.2)}i.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{margin-right:0.7rem}.back.svelte-17efnl6>a.svelte-17efnl6.svelte-17efnl6{flex-grow:1;padding:0.5rem 1rem}a.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{color:inherit;text-decoration:none;text-align:center}img.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{width:100%;background-color:var(--color-text)}h2.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{padding-block-start:2rem;padding-block-end:0.5rem}.country__data.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{margin-block:0.5rem}.border__title.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{font-size:1.2rem}.border.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{display:flex;flex-direction:column}.border.svelte-17efnl6>div.svelte-17efnl6.svelte-17efnl6{display:grid;grid-template-columns:repeat(auto-fill, minmax(120px, 1fr));gap:0.8rem;align-items:center;margin-block:1.5rem}.border.svelte-17efnl6>div.svelte-17efnl6>a.svelte-17efnl6{width:120px;padding:0.5rem 2rem;background-color:var(--color-elem);box-shadow:1px 1px 5px 0 rgba(0, 0, 0, 0.2)}.second-part.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{margin-block:2.5rem}.back.svelte-17efnl6>a.svelte-17efnl6.svelte-17efnl6:hover,.border.svelte-17efnl6>div.svelte-17efnl6>a.svelte-17efnl6:hover{background-color:var(--color-background)}@media(min-width: 1440px){section.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{grid-template-columns:800px 1fr;margin:5rem}.desktop.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{display:flex;flex-direction:column;justify-content:center;margin-inline:auto}.country.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{display:flex;gap:5rem;margin-block:1rem}.second-part.svelte-17efnl6.svelte-17efnl6.svelte-17efnl6{margin:0}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { country } = data;
  function specificData() {
    for (let i = 0; i < country.length; i++) {
      const languageCode = Object.keys(country[i].name.nativeName)[0];
      const nativeName = country[i].name.nativeName[languageCode].common;
      const currenciesCode = Object.keys(country[i].currencies);
      const currencies = country[i].currencies[currenciesCode]?.name || "-";
      const languages = country[i].languages[languageCode];
      return { nativeName, currencies, languages };
    }
  }
  specificData();
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-13aw7cd_START -->${$$result.title = `<title>${escape(country[0].name.common)}</title>`, ""}<!-- HEAD_svelte-13aw7cd_END -->`, ""}

<div class="back svelte-17efnl6"><a href="/" class="svelte-17efnl6"><i class="fa fa-chevron-left svelte-17efnl6"></i>Back</a></div>

<section class="svelte-17efnl6"><div><img${add_attribute("src", country[0].flags.png || "", 0)}${add_attribute("alt", country[0].flags.alt || country[0].name.common, 0)} class="svelte-17efnl6"></div>
  <div class="desktop svelte-17efnl6"><h2 class="svelte-17efnl6">${escape(country[0].name.common)}</h2>
    <div class="country svelte-17efnl6"><div class="first-part"><div class="country__data svelte-17efnl6"><span class="svelte-17efnl6">Native Name:</span>
          ${escape(specificData().nativeName)}</div>
        <div class="country__data svelte-17efnl6"><span class="svelte-17efnl6">Population:</span>
          ${escape(country[0].population.toLocaleString())}</div>
        <div class="country__data svelte-17efnl6"><span class="svelte-17efnl6">Region:</span>
          ${escape(country[0].region)}</div>
        <div class="country__data svelte-17efnl6"><span class="svelte-17efnl6">Sub Region:</span>
          ${escape(country[0].subregion)}</div>
        <div class="country__data svelte-17efnl6"><span class="svelte-17efnl6">Capital:</span>
          ${escape(country[0].capital.join(", "))}</div></div>

      <div class="second-part svelte-17efnl6"><div class="country__data svelte-17efnl6"><span class="svelte-17efnl6">Top Level Domain:</span>
          ${escape(country[0].tld[0])}</div>
        <div class="country__data svelte-17efnl6"><span class="svelte-17efnl6">Currencies:</span>
          ${escape(specificData().currencies)}</div>
        <div class="country__data svelte-17efnl6"><span class="svelte-17efnl6">Languages:</span>
          ${escape(specificData().languages)}</div></div></div>

    <div class="border svelte-17efnl6"><span class="border__title svelte-17efnl6">Border Countries:</span>
      <div class="svelte-17efnl6">${country[0].borders ? `${each(country[0].borders, (border) => {
    return `<a href="${"/" + escape(border, true)}" class="svelte-17efnl6">${escape(border)}</a>`;
  })}` : ``}</div></div></div>
</section>`;
});
export {
  Page as default
};
