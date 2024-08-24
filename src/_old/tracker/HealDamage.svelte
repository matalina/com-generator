<script>
  import { createEventDispatcher } from 'svelte';

  export let noHeal = false;

  const dispatch = createEventDispatcher();
  let value = 1;
  function damage() {
    dispatch('damage', value);
  }
  function heal() {
    dispatch('heal', value);
  }
</script>

<input type="text" bind:value class="border p-0.5 w-2/3 text-center" />
<div class="flex flex-col">
  <button
    class="py-0.5 px-2 border border-red-700 text-red-700"
    on:click={damage}
  >
    <i class="fa-solid fa-minus" />
  </button>
  {#if !noHeal}
    <button
      class="py-0.5 px-2 border border-green-700 text-green-700"
      on:click={heal}
    >
      <i class="fa-solid fa-plus" />
    </button>
  {/if}
</div>

<style>
</style>
