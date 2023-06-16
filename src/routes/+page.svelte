<script>
import Card from '$lib/components/Card.svelte';
import Search from '$lib/components/Search.svelte';
import Selection from '$lib/components/Selection.svelte';
import CountryData from '$lib/components/CountryData.svelte';

import { countryList } from '$lib/store/countryStore.js';
import { onMount } from 'svelte';

export let data;

const { countries, africa, americas, asia, europe, oceania } = data;

onMount(() => {
  countryList.set(countries);
});

let searchInput = '';
</script>

<svelte:head>
  <title>Countries</title>
</svelte:head>

<div>
  <Search
    bind:searchInput
    on:input={() => (searchInput = searchInput.toLowerCase())}
  />
  <Selection
    showAll={() => countryList.set(countries)}
    africa={() => countryList.set(africa)}
    america={() => countryList.set(americas)}
    asia={() => countryList.set(asia)}
    europe={() => countryList.set(europe)}
    oceania={() => countryList.set(oceania)}
  />
</div>

<section>
  {#each $countryList as country (country.name.common)}
    {#if country.name.common.toLowerCase().includes(searchInput)}
      <Card countryCode={country.cca3}>
        <CountryData
          flag={country.flags.png}
          alt={country.flags.alt}
          name={country.name.common}
          population={country.population.toLocaleString()}
          region={country.region}
          capital={country.capital}
        />
      </Card>
    {/if}
  {/each}
</section>

<style>
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  place-items: center;
  justify-content: center;
  gap: 5rem;
  font-size: var(--font-size-home);
}

@media (min-width: 1440px) {
  section {
    margin: 5rem 8rem;
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 8.8rem;
  }
}
</style>
