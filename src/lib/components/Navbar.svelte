<script>
import { onMount } from 'svelte';

let colorScheme = 'dark';

let icon = 'fa fa-moon-o';
let text = 'Dark';

onMount(() => {
  document.documentElement.classList.add('dark');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  colorScheme = prefersDarkScheme.matches ? 'dark' : 'light';
});

function toggleColorScheme() {
  if (document.documentElement.classList.contains('light')) {
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    icon = 'fa fa-moon-o';
    text = 'Dark';
  } else {
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    icon = 'fa fa-sun-o';
    text = 'Light';
  }
}
</script>

<nav>
  <h1>Where in the world?</h1>
  <button on:click={toggleColorScheme}>
    <i class={icon} />
    <span> {text} Mode </span>
  </button>
</nav>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-elem);
  padding: 1rem;
  font-size: var(--font-size-home);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
}

h1 {
  user-select: none;
}

button {
  cursor: pointer;
  border: none;
  background: none;
  font-size: var(--font-size-home);
  color: var(--color-text);
  font-weight: 600;
  min-height: 48px;
}

button span:last-child {
  margin-left: 0.3rem;
}
</style>
