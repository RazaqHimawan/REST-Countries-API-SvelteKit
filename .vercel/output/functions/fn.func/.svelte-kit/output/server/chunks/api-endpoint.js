const BASE_URL = "https://restcountries.com/v3.1";
const API_ENDPOINT = {
  ALL: `${BASE_URL}/all`,
  REGION: (region) => `${BASE_URL}/region/${region}`,
  DETAIL: (code) => `${BASE_URL}/alpha/${code}`
};
export {
  API_ENDPOINT as A
};
