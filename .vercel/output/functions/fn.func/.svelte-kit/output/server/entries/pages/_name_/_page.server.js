import { A as API_ENDPOINT } from "../../../chunks/api-endpoint.js";
async function load({ fetch, params }) {
  const res = await fetch(API_ENDPOINT.DETAIL(params.name));
  return {
    country: res.json()
  };
}
export {
  load
};
