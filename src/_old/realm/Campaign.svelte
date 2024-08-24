<script type="ts">
  import { onMount } from 'svelte';
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

  });
  </script>

  <div class="w-full flex flex-col p-3 border m-3">
    <h2 class="text-3xl font-bold text-center mb-3">Campaign</h2>

    <table width={wheight} height={lheight} class="text-white mx-auto border border-gray-500 bg-origin-border bg-contain"  style={`background-image: url(${mapUrl})`}>
      <thead>
        <tr>
          <th class="border border-gray-500">01</th>
          {#each Array(length-1) as _,h}
          <th class="border border-gray-500">{(h+2).toString().padStart(2,'0')}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each Array(width-1) as _,i}
        <tr>
          <th class="border border-gray-500">{(i+2).toString().padStart(2,'0')}</th>
          {#each Array(length-1) as _,j}
          <td class="border text-center text-red-700 font-bold {`w-{[px]`} border-gray-500">
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