<script>
export let countryCode;
</script>

<a
  href="/{countryCode}"
  class="card"
>
  <slot />
</a>

<style>
a {
  color: inherit;
  text-decoration: none;
}

.card {
  width: 325px;
  height: 450px;
  background-color: var(--color-elem);
  color: var(--color-text);
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
}
</style>
