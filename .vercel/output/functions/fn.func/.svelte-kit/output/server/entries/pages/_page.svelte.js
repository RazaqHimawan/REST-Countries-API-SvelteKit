import { c as create_ssr_component, e as escape, a as add_attribute, b as subscribe, v as validate_component, d as each } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
const Card_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "a.svelte-d2v4x{color:inherit;text-decoration:none}.card.svelte-d2v4x{width:325px;height:450px;background-color:var(--color-elem);color:var(--color-text);box-shadow:1px 1px 5px 0 rgba(0, 0, 0, 0.1);border-radius:12px;overflow:hidden}",
  map: null
};
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { countryCode } = $$props;
  if ($$props.countryCode === void 0 && $$bindings.countryCode && countryCode !== void 0)
    $$bindings.countryCode(countryCode);
  $$result.css.add(css$4);
  return `<a href="${"/" + escape(countryCode, true)}" class="card svelte-d2v4x">${slots.default ? slots.default({}) : ``}
</a>`;
});
const Search_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-1ypzxe0{display:flex;justify-content:center;margin-block:2rem}.search.svelte-1ypzxe0{display:flex;width:100%;background-color:var(--color-elem);border-radius:8px;box-shadow:1px 1px 5px 0 rgba(0, 0, 0, 0.1);margin-inline:2rem;min-height:48px}label.svelte-1ypzxe0{display:grid;place-items:center;flex-basis:100px;border:none;background:none}input.svelte-1ypzxe0{flex-grow:1;border:none;background:none;color:var(--color-input)}.svelte-1ypzxe0::placeholder{color:var(--color-text)}@media(min-width: 1440px){div.svelte-1ypzxe0{margin:0}.search.svelte-1ypzxe0{margin:0}input.svelte-1ypzxe0{width:500px}}",
  map: null
};
const Search = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { searchInput } = $$props;
  if ($$props.searchInput === void 0 && $$bindings.searchInput && searchInput !== void 0)
    $$bindings.searchInput(searchInput);
  $$result.css.add(css$3);
  return `<div class="svelte-1ypzxe0"><div class="search svelte-1ypzxe0"><label for="search" class="svelte-1ypzxe0"><i class="fa fa-search svelte-1ypzxe0"></i></label>
    <input id="search" type="search" placeholder="Search for a country..." class="svelte-1ypzxe0"${add_attribute("value", searchInput, 0)}></div>
</div>`;
});
const Selection_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".container.svelte-1cfvd5s.svelte-1cfvd5s{display:flex;justify-content:space-between;margin:1rem 0 2.5rem 2rem}.select.svelte-1cfvd5s.svelte-1cfvd5s,.option.svelte-1cfvd5s.svelte-1cfvd5s{text-align:start;background-color:var(--color-elem);color:var(--color-text);padding:1rem;width:230px;border:none;border-radius:8px;box-shadow:1px 1px 5px 0 rgba(0, 0, 0, 0.1)}.select.svelte-1cfvd5s.svelte-1cfvd5s{display:flex;justify-content:space-between;align-items:center;cursor:pointer;text-align:start}.option.svelte-1cfvd5s.svelte-1cfvd5s{margin-top:0.3rem;position:absolute}button.svelte-1cfvd5s.svelte-1cfvd5s{display:flex;width:100%;color:var(--color-text);border:none;background:none}.option.svelte-1cfvd5s>button.svelte-1cfvd5s{line-height:1.6rem;cursor:pointer;border-radius:8px;padding:0.3rem}.option.svelte-1cfvd5s>button.svelte-1cfvd5s:hover{background-color:var(--color-background)}@media(min-width: 1440px){.container.svelte-1cfvd5s.svelte-1cfvd5s{margin:0}}",
  map: null
};
const Selection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showAll } = $$props;
  let { africa } = $$props;
  let { america } = $$props;
  let { asia } = $$props;
  let { europe } = $$props;
  let { oceania } = $$props;
  if ($$props.showAll === void 0 && $$bindings.showAll && showAll !== void 0)
    $$bindings.showAll(showAll);
  if ($$props.africa === void 0 && $$bindings.africa && africa !== void 0)
    $$bindings.africa(africa);
  if ($$props.america === void 0 && $$bindings.america && america !== void 0)
    $$bindings.america(america);
  if ($$props.asia === void 0 && $$bindings.asia && asia !== void 0)
    $$bindings.asia(asia);
  if ($$props.europe === void 0 && $$bindings.europe && europe !== void 0)
    $$bindings.europe(europe);
  if ($$props.oceania === void 0 && $$bindings.oceania && oceania !== void 0)
    $$bindings.oceania(oceania);
  $$result.css.add(css$2);
  return `

<div class="container svelte-1cfvd5s"><div class="selection__content"><button class="select svelte-1cfvd5s">Filter by Region <i class="fa fa-caret-down"></i></button>
    ${``}</div>
</div>`;
});
const CountryData_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "img.svelte-1o06g63{width:100%;box-shadow:0 1px 0 0 rgba(0, 0, 0, 0.1);height:200px;object-fit:fill}.country.svelte-1o06g63{padding:1.5rem}.country__data.svelte-1o06g63{margin-block:0.75rem}span.svelte-1o06g63{font-weight:700}h2.svelte-1o06g63{margin-block:1rem}",
  map: null
};
const CountryData = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { flag } = $$props;
  let { alt } = $$props;
  let { name } = $$props;
  let { population } = $$props;
  let { region } = $$props;
  let { capital } = $$props;
  if ($$props.flag === void 0 && $$bindings.flag && flag !== void 0)
    $$bindings.flag(flag);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.population === void 0 && $$bindings.population && population !== void 0)
    $$bindings.population(population);
  if ($$props.region === void 0 && $$bindings.region && region !== void 0)
    $$bindings.region(region);
  if ($$props.capital === void 0 && $$bindings.capital && capital !== void 0)
    $$bindings.capital(capital);
  $$result.css.add(css$1);
  return `<img${add_attribute("src", flag, 0)}${add_attribute("alt", alt, 0)} class="svelte-1o06g63">

<div class="country svelte-1o06g63"><h2 class="svelte-1o06g63">${escape(name)}</h2>

  <div class="country__data svelte-1o06g63"><span class="svelte-1o06g63">Population:</span>
    ${escape(population)}</div>
  <div class="country__data svelte-1o06g63"><span class="svelte-1o06g63">Region:</span>
    ${escape(region)}</div>
  <div class="country__data svelte-1o06g63"><span class="svelte-1o06g63">Capital:</span>
    ${escape(capital)}</div>
</div>`;
});
const countryList = writable([]);
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-r4c6zi{display:grid;grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));place-items:center;justify-content:center;gap:5rem;font-size:var(--font-size-home)}@media(min-width: 1440px){section.svelte-r4c6zi{margin:5rem 8rem}div.svelte-r4c6zi{display:flex;justify-content:space-between;align-items:center;margin:2rem 8.8rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $countryList, $$unsubscribe_countryList;
  $$unsubscribe_countryList = subscribe(countryList, (value) => $countryList = value);
  let { data } = $$props;
  const { countries, africa, americas, asia, europe, oceania } = data;
  let searchInput = "";
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${$$result.head += `<!-- HEAD_svelte-1uiy4hr_START -->${$$result.title = `<title>Countries</title>`, ""}<!-- HEAD_svelte-1uiy4hr_END -->`, ""}

<div class="svelte-r4c6zi">${validate_component(Search, "Search").$$render(
      $$result,
      { searchInput },
      {
        searchInput: ($$value) => {
          searchInput = $$value;
          $$settled = false;
        }
      },
      {}
    )}
  ${validate_component(Selection, "Selection").$$render(
      $$result,
      {
        showAll: () => countryList.set(countries),
        africa: () => countryList.set(africa),
        america: () => countryList.set(americas),
        asia: () => countryList.set(asia),
        europe: () => countryList.set(europe),
        oceania: () => countryList.set(oceania)
      },
      {},
      {}
    )}</div>

<section class="svelte-r4c6zi">${each($countryList, (country) => {
      return `${country.name.common.toLowerCase().includes(searchInput) ? `${validate_component(Card, "Card").$$render($$result, { countryCode: country.cca3 }, {}, {
        default: () => {
          return `${validate_component(CountryData, "CountryData").$$render(
            $$result,
            {
              flag: country.flags.png,
              alt: country.flags.alt,
              name: country.name.common,
              population: country.population.toLocaleString(),
              region: country.region,
              capital: country.capital
            },
            {},
            {}
          )}
      `;
        }
      })}` : ``}`;
    })}
</section>`;
  } while (!$$settled);
  $$unsubscribe_countryList();
  return $$rendered;
});
export {
  Page as default
};
