const BASE_URL = 'https://restcountries.com/v3.1';

export const API_ENDPOINT = {
  ALL: `${BASE_URL}/all`,
  REGION: (region) => `${BASE_URL}/region/${region}`,
  DETAIL: (code) => `${BASE_URL}/alpha/${code}`,
};
