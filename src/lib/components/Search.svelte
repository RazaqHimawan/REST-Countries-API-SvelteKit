<script>
export let searchInput;
</script>

<div>
  <div class="search">
    <label for="search">
      <i class="fa fa-search" />
    </label>
    <input
      bind:value={searchInput}
      on:input
      id="search"
      type="search"
      placeholder="Search for a country..."
    />
  </div>
</div>

<style>
div {
  display: flex;
  justify-content: center;
  margin-block: 2rem;
}

.search {
  display: flex;
  width: 100%;
  background-color: var(--color-elem);
  border-radius: 8px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
  margin-inline: 2rem;
  min-height: 48px;
}

label {
  display: grid;
  place-items: center;
  flex-basis: 100px;
  border: none;
  background: none;
}

input {
  flex-grow: 1;
  border: none;
  background: none;
  color: var(--color-input);
}

::placeholder {
  color: var(--color-text);
}

@media (min-width: 1440px) {
  div {
    margin: 0;
  }

  .search {
    margin: 0;
  }

  input {
    width: 500px;
  }
}
</style>
