import { API_ENDPOINT } from '$lib/server/api-endpoint.js';

export async function load({ fetch, params }) {
  const res = await fetch(API_ENDPOINT.DETAIL(params.name));

  return {
    country: res.json(),
  };
}
