<script>
export let flag;
export let alt;
export let name;
export let population;
export let region;
export let capital;
</script>

<img
  src={flag}
  {alt}
/>

<div class="country">
  <h2>{name}</h2>

  <div class="country__data">
    <span>Population:</span>
    {population}
  </div>
  <div class="country__data">
    <span>Region:</span>
    {region}
  </div>
  <div class="country__data">
    <span>Capital:</span>
    {capital}
  </div>
</div>

<style>
img {
  width: 100%;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  height: 200px;
  object-fit: fill;
}

.country {
  padding: 1.5rem;
}

.country__data {
  margin-block: 0.75rem;
}

span {
  font-weight: 700;
}

h2 {
  margin-block: 1rem;
}
</style>
