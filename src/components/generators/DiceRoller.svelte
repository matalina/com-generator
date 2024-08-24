<script lang="ts">
  import { DiceRoller } from '@dice-roller/rpg-dice-roller';
  import ToggleContent from '../ui/ToggleContent.svelte';
  import Answer from '../ui/Answer.svelte';

  const roller = new DiceRoller();
  let notation = '1d20';
  let result;
  $: log = result?.output ? JSON.parse(roller.export()).log: [];
  let viewLog = false;

  function roll() {
    roller.roll(notation);
    const log = JSON.parse(roller.export());
    result = log.log[log.log.length - 1];
  }
  function view() {
    viewLog = true;
  }
  function clear() {
    roller.clearLog();
    result = undefined;
    viewLog = false;
  }

</script>

<ToggleContent hide={false}>
  <span slot="title">Roll the Bones!</span>

  <form on:submit|preventDefault={roll} class="flex flex-col">
    <input bind:value={notation} class="border py-2 px-3 w-full mb-2" />
    {#if result}
      <Answer answer={result.output}/>
    {/if}

    {#if viewLog}
    <div class="w-full bg-blue-300 text-blue-900 border-blue-900 text-center py-2 px-3 mb-2">
      {#each log as l}
      {l.output}<br/>
      {/each}
    </div>
    {/if}
    <div class="flex justify-center">
      <button type="submit" class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">
        Roll
      </button>
      <button  class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800" on:click|preventDefault={view}>
        View Log
      </button>
      <button  class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800" on:click|preventDefault={clear}>
        Clear
      </button>
    </div>
</form>
<div class="text-xs text-center">
  <a class="hover:text-purple-500" href="https://dice-roller.github.io/documentation/guide/notation/" target="_blank" rel="noreferrer">dice roll notation guide</a>
</div>
</ToggleContent>
