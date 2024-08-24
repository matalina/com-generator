<script type="ts">
import { onMount } from 'svelte';
import { getDate } from './lib/date-time';
import DateComponent from './widgets/Date.svelte';


let data = {};
let calculated = false;

let hour;
let mins;
let date;
let seconds;

function calculateRealmDate() {
  const value = `${date.value} ${hour.value.padStart(2,'0')}:${mins.value.padStart(2,'0')}:${seconds.value.padStart(2,'0')}`;
  const realDate = new Date(value);
  data = getDate(realDate);
  calculated = true;
}

onMount(() => {
  hour.value = 12;
  mins.value = '00';
  seconds.value = '00';
});
</script>

<div class="m-3">
  <h2 class="text-3xl font-bold text-center mb-3">Real > Realm Date</h2>
  <div class="flex">
    <input
      class="border py-2 px-3 w-1/2 mb-2"
      type="date"
      bind:this={date}
    />
    <div class="flex w-1/2">
      <input
        class="border py-2 px-3 w-1/3 mb-2"
        bind:this={hour}
        type="text"
      />
      <span class="py-2">:</span>
      <input
        class="border py-2 px-3 w-1/3 mb-2"
        bind:this={mins}
        type="text"
      />
      <span class="py-2">:</span>
      <input
        class="border py-2 px-3 w-1/3 mb-2"
        bind:this={seconds}
        type="text"
      />
    </div>
  </div>
  <p class="text-xs text-center mb-2">Use 24 hour time.</p>
  <div class="flex justify-center">
    <button
      class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
      on:click={calculateRealmDate}
    >
      Calculate
    </button>
  </div>
  {#if calculated}
  <hr class="mt-3" />
  <DateComponent data={data} />
  {/if}
</div>
