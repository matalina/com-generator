<script>
import { createEventDispatcher } from "svelte";

const dispatch = createEventDispatcher();
const width = {
  tiny: 'md:w-1/4',
  small: 'md:w-1/3',
  medium: 'md:w-1/2',
  large: 'md:w-2/3',
  'x-large': 'md:w-11/12'
}

export let open = false;
export let name = 'modal';
export let size = 'medium';

function close() {
  open = false;
  dispatch('close', { name });
}
</script>

{#if open}
<div class="absolute top-0 left-0 inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" on:click={close}></div>

<div class="flex">
  <div
    class={`relative md:mx-auto p-5 border ${width[size]} w-full shadow-lg rounded-md bg-white`}
  >
    <header class="flex justify-between border-b pb-2 mb-2">
      <div><slot name="header"></slot></div>
      <div class="text-lg">
        <button on:click={close}><i class="fa-thin fa-circle-xmark"></i></button>
      </div>
    </header>
    <main><slot></slot></main>
    <footer class="border-t mt-2 pt-2"><slot name="footer"></slot></footer>
  </div>
</div>
{/if}