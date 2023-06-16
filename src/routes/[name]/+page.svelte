<script>
export let data;

const { country } = data;

function specificData() {
  for (let i = 0; i < country.length; i++) {
    const languageCode = Object.keys(country[i].name.nativeName)[0];
    const nativeName = country[i].name.nativeName[languageCode].common;
    const currenciesCode = Object.keys(country[i].currencies);
    const currencies = country[i].currencies[currenciesCode]?.name || '-';

    const languages = country[i].languages[languageCode];

    return { nativeName, currencies, languages };
  }
}
</script>

<svelte:head>
  <title>{country[0].name.common}</title>
</svelte:head>

<div class="back">
  <a href="/"><i class="fa fa-chevron-left" />Back</a>
</div>

<section>
  <div>
    <img
      src={country[0].flags.png || ''}
      alt={country[0].flags.alt || country[0].name.common}
    />
  </div>
  <div class="desktop">
    <h2>{country[0].name.common}</h2>
    <div class="country">
      <div class="first-part">
        <div class="country__data">
          <span>Native Name:</span>
          {specificData().nativeName}
        </div>
        <div class="country__data">
          <span>Population:</span>
          {country[0].population.toLocaleString()}
        </div>
        <div class="country__data">
          <span>Region:</span>
          {country[0].region}
        </div>
        <div class="country__data">
          <span>Sub Region:</span>
          {country[0].subregion}
        </div>
        <div class="country__data">
          <span>Capital:</span>
          {country[0].capital.join(', ')}
        </div>
      </div>

      <div class="second-part">
        <div class="country__data">
          <span>Top Level Domain:</span>
          {country[0].tld[0]}
        </div>
        <div class="country__data">
          <span>Currencies:</span>
          {specificData().currencies}
        </div>
        <div class="country__data">
          <span>Languages:</span>
          {specificData().languages}
        </div>
      </div>
    </div>

    <div class="border">
      <span class="border__title">Border Countries:</span>
      <div>
        {#if country[0].borders}
          {#each country[0].borders as border}
            <a href="/{border}">{border}</a>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</section>

<style>
section {
  display: grid;
  margin: 1.5rem;
}

span {
  font-weight: 700;
}

.back {
  display: flex;
  justify-content: center;
  width: 120px;
  background-color: var(--color-elem);
  margin-top: 2rem;
  margin-bottom: 4rem;
  margin-inline: 1.5rem;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.2);
}

i {
  margin-right: 0.7rem;
}

.back > a {
  flex-grow: 1;
  padding: 0.5rem 1rem;
}

a {
  color: inherit;
  text-decoration: none;
  text-align: center;
}

img {
  width: 100%;
  background-color: var(--color-text);
}

h2 {
  padding-block-start: 2rem;
  padding-block-end: 0.5rem;
}

.country__data {
  margin-block: 0.5rem;
}

.border__title {
  font-size: 1.2rem;
}

.border {
  display: flex;
  flex-direction: column;
}

.border > div {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.8rem;
  align-items: center;
  margin-block: 1.5rem;
}

.border > div > a {
  width: 120px;
  padding: 0.5rem 2rem;
  background-color: var(--color-elem);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.2);
}

.second-part {
  margin-block: 2.5rem;
}

.back > a:hover,
.border > div > a:hover {
  background-color: var(--color-background);
}
@media (min-width: 1440px) {
  section {
    grid-template-columns: 800px 1fr;
    margin: 5rem;
  }

  .desktop {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-inline: auto;
  }

  .country {
    display: flex;
    gap: 5rem;
    margin-block: 1rem;
  }

  .second-part {
    margin: 0;
  }
}
</style>
