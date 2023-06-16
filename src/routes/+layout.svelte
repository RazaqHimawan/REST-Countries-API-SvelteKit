<script>
import '../app.css';

import Navbar from '../lib/components/Navbar.svelte';
import { navigating } from '$app/stores';
</script>

<header>
  <Navbar />
</header>

{#if $navigating}
  <h2>Loading...</h2>
{:else}
  <main>
    <slot />
  </main>
{/if}

<style>
h2 {
  text-align: center;
  font-size: 32px;
  margin-top: 5rem;
}
</style>
