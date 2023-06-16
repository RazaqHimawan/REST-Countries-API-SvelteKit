<script>
export let showAll;
export let africa;
export let america;
export let asia;
export let europe;
export let oceania;

let isOpen = false;
</script>

<svelte:window on:click={() => (isOpen = false)} />

<div class="container">
  <div class="selection__content">
    <button
      on:click|stopPropagation={() => (isOpen = !isOpen)}
      class="select"
    >
      Filter by Region <i class="fa fa-caret-down" />
    </button>
    {#if isOpen}
      <div class="option">
        <button on:click={showAll}>Show all</button>
        <button on:click={africa}>Africa</button>
        <button on:click={america}>America</button>
        <button on:click={asia}>Asia</button>
        <button on:click={europe}>Europe</button>
        <button on:click={oceania}>Oceania</button>
      </div>
    {/if}
  </div>
</div>

<style>
.container {
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 2.5rem 2rem;
}

.select,
.option {
  text-align: start;
  background-color: var(--color-elem);
  color: var(--color-text);
  padding: 1rem;
  width: 230px;
  border: none;
  border-radius: 8px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
}

.select {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: start;
}

.option {
  margin-top: 0.3rem;
  position: absolute;
}

button {
  display: flex;
  width: 100%;
  color: var(--color-text);
  border: none;
  background: none;
}

.option > button {
  line-height: 1.6rem;
  cursor: pointer;
  border-radius: 8px;
  padding: 0.3rem;
}

.option > button:hover {
  background-color: var(--color-background);
}

@media (min-width: 1440px) {
  .container {
    margin: 0;
  }
}
</style>
