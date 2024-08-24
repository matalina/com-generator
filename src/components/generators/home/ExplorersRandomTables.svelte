<script type="ts">
  import { flexPoI, flexTerrain, flexTerrainTile, flexWeather } from '../../../lib/home/flex';


  import {
    rollOnTable,
    dispositionTable,
    loot,
    questTypes,
    RandomTable,
    types,
    descriptors,
    focusVerb,
    focusNoun,
    creatures,
    motivations,
  } from '../../../lib/tables';
  import Answer from '../../ui/Answer.svelte';
  import ToggleContent from '../../ui/ToggleContent.svelte';

  const options: { [key: string]: RandomTable } = {
    [questTypes.name]: questTypes,
    [loot.name]: loot,

    [flexWeather.name]: flexWeather,
    [flexTerrainTile.name]: flexTerrainTile,
    [flexTerrain.name]: flexTerrain,
    [flexPoI.name]: flexPoI,

    [types.name]: types,
    [descriptors.name]: descriptors,
    [focusVerb.name]: focusVerb,
    [focusNoun.name]:focusNoun,
    [creatures.name]: creatures,
    [motivations.name]: motivations,
    [dispositionTable.name]: dispositionTable,
  };

  let selectedTable = '';
  let table: RandomTable;
  let total;
  let roll;
  let description;

  function loadTable() {
    table = options[selectedTable];
    total = undefined;
    roll = undefined;
    description = undefined;
  }

  function getRandom() {
    const result = rollOnTable(table);
    description = result.description;
    roll = result.roll;
  }
</script>

<ToggleContent>
  <span slot="title">Random Tables</span>

  <select
    bind:value={selectedTable}
    on:change={loadTable}
    class="border py-2 px-3 w-full mb-2 capitalize"
  >
    <option value="">Select a Random Table</option>
    {#each Object.keys(options) as option}
      <option value={option}>{option}</option>
    {/each}
  </select>

  {#if table}
    <h3 class="text-2xl font-bold text-center mb-3">{table.name}</h3>
    <p class="mb-3">{table.description}</p>
    <div class="flex justify-center my-5">
      <button
        on:click={getRandom}
        class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
        >Roll {table.diceFormula}</button
      >
    </div>
    {#if roll}
    <Answer answer={`<small class="text-xs text-blue-500">(${roll.output})</small><br />
        ${description}`} />
    {/if}
  {/if}
</ToggleContent>
