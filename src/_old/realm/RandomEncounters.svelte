<script type="ts">
import { onMount } from "svelte";
import { maps } from '../pages/maps';

$: width = maps[map].width;
$: length = maps[map].length;
$: count = 10;

$: encounters = [];
$: mapUrl = maps[map].url;

$: twidth = 30;
$: wheight = width * twidth;
$: lheight = length * twidth;
$: hasEncounter = encounters.length !== 0;
$: map = 'map-carver-sphere';

function save() {
  localStorage.setItem('encounters', JSON.stringify(encounters));
  localStorage.setItem('count', count.toString());
  localStorage.setItem('map',map);
}

function generate() {
  encounters = [];
  for (let i = 0; i < count; i++) {
    let index = randomCoordinate();
    if (!encounters[index[0]]) encounters[index[0]] = [];

    encounters[index[0]][index[1]] = true;
  }
}

function clear() {
  encounters = [];
  save();
}

function randomCoordinate() {
  let w = Math.floor((Math.random() * 1000) % (width-2));
  let l = Math.floor((Math.random() * 1000) % (length-2));

  return [w,l];
}

onMount(() => {
  encounters = JSON.parse(localStorage.getItem('encounters')) || [];
  if (encounters.length) {
    count = parseInt(localStorage.getItem('count'));
    map = localStorage.getItem('map');

    width = maps[map].width;
    length = maps[map].length;
  }
  else {
    generate();
  }
});
</script>

<div class="w-full flex flex-col p-3 border m-3">
  <h2 class="text-3xl font-bold text-center mb-3">Random Encounters</h2>
    <label class="flex">
    <span class="w-1/3">Number of Encounters</span>
    <input bind:value={count} on:change={generate} class="border py-2 px-3 w-2/3 mb-2"/>
  </label>
  <label class="flex">
    <span class="w-1/3">Map Url</span>
    <select bind:value={map} class="border py-2 px-3 w-2/3 mb-2" on:change={generate}>
      {#each Object.keys(maps) as key}
        <option value={key}>{maps[key].name}</option>
      {/each}
    </select>
  </label>
  <div>
    <button class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800" on:click={generate}>Regenerate</button>
    <button class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800 {`${!hasEncounter?'disabled text-purple-400 border-purple-400 cursor-not-allowed':''}`}" on:click={save} disabled={!hasEncounter}>Save</button>
    <button class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800" on:click={clear}>Clear</button>
  </div>


  <div class="h-fit">
    {#if encounters}
    <h3 class="text-2xl font-bold text-center mb-3">Encounters</h3>
    <ul class="flex justify-between flex-wrap mb-5">
      {#each Array(width) as _,i}
      {#each Array(length) as _,j}
      {#if encounters?.[i]?.[j]}
      <li>{`[${j+2},${i+2}]`}</li>
      {/if}
      {/each}
      {/each}
    </ul>
    {/if}
  </div>


  <table width={wheight} height={lheight} class="text-white mx-auto border bg-origin-border bg-contain"  style={`background-image: url(${mapUrl})`}>
    <thead>
      <tr>
        <th class="border">01</th>
        {#each Array(length-1) as _,h}
        <th class="border">{(h+2).toString().padStart(2,'0')}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each Array(width-1) as _,i}
      <tr>
        <th class="border">{(i+2).toString().padStart(2,'0')}</th>
        {#each Array(length-1) as _,j}
        <td class="border text-center text-red-700 font-bold {`w-{[px]`}">
          {#if encounters?.[i]?.[j]}
           <span style="background-color: rgba(255,255,255,.4)" class="rounded-xl py-1 px-1" >X</span>
          {/if}
        </td>
        {/each}
      </tr>
      {/each}
    </tbody>
  </table>
</div>