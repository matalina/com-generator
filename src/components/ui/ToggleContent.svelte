<script lang="ts">
  export let hide = true;
</script>


<div class="md:full flex flex-col p-3 border m-3">
  <div
    class="flex justify-between cursor-pointer"
    on:click={() => hide = !hide}
    on:keydown={() => hide = !hide}
  >
    <h2 class="text-3xl font-bold text-center mb-3">
      <slot name="title"></slot>
    </h2>
    <div class="text-3xl ">
      {#if hide}
      <i class="fa-solid fa-arrow-down-to-line"></i>
      {:else}
      <i class="fa-solid fa-arrow-up-to-line"></i>
      {/if}
    </div>
  </div>
  <div
    class=""
    class:hide
  >
    <slot></slot>
  </div>
</div>

<style lang="postcss">
  .hide {
    @apply hidden;
  }
</style>