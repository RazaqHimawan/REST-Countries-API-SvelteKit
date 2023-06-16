import { API_ENDPOINT } from '../lib/server/api-endpoint.js';

export async function load({ fetch }) {
  const resAllCountries = await fetch(API_ENDPOINT.ALL);
  const resAfrica = await fetch(API_ENDPOINT.REGION('africa'));
  const resAmericas = await fetch(API_ENDPOINT.REGION('americas'));
  const resAsia = await fetch(API_ENDPOINT.REGION('asia'));
  const resEurope = await fetch(API_ENDPOINT.REGION('europe'));
  const resOceania = await fetch(API_ENDPOINT.REGION('oceania'));

  return {
    countries: resAllCountries.json(),
    africa: resAfrica.json(),
    americas: resAmericas.json(),
    asia: resAsia.json(),
    europe: resEurope.json(),
    oceania: resOceania.json(),
  };
}
