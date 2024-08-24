<script type="ts">
import { moons } from '../lib/date-time';
import Moon from "./Moon.svelte";

export let data;

function now() {
  return new Date(data.now)
}
</script>

<div class="flex items-center  p-3">
  <div class="moonType flex flex-col mr-5 w-1/3 items-center">
    <div class="phase grow text-4xl font-bold">
      <Moon moon={data.phase} width={50}/>
    </div>
    <div class="dayType text-center p-1">
      {#if data.type}
      <span class:rest={data.type}>rest day</span>
      {:else}
      <span>work day</span>
      {/if}
    </div>
  </div>
  <div class="date w-2/3 flex flex-col">
    <div class="monthDay flex  items-center">
      <div class="day flex flex-col w-1/3 items-center">
        <div class="text-xs text-center uppercase">Day</div>
        <div class="text-4xl text-center">{data.day}</div>
      </div>
      <div  class="month flex flex-col w-2/3 items-center px-4">
        <div class="text-xs text-center uppercase">Moon</div>
        <div class="text-3xl uppercase text-center">{moons[parseInt(data.month) -1]}</div>
      </div>
    </div>
    <div class=" year flex flex-col items-center">
      <div class="text-xs text-center uppercase">Year</div>
      <div class="flex text-4xl">
        <div>{data.year}</div>
        <strong class="ml-3">LC</strong>
      </div>
    </div>
  </div>
</div>
<div class="text-4xl text-center">
  <span>{data.hour}</span>:<span>{data.min}</span>:<span>{data.sec}</span>
</div>
<div class="text-xs text-center italic bg-purple-50 p-1 rounded-b-lg"><span>{now()}</span></div>