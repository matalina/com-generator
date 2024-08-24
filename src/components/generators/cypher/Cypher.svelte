<script lang="ts">
  import ToggleContent from '../../ui/ToggleContent.svelte';
  import { getRandomCypher, printCypher } from "../../../lib/cypher/cyphers";
  import Answer from '../../ui/Answer.svelte';

  let cypher = '';
  let type = 'all';

  function generate() {
    cypher = '';

    cypher = printCypher(getRandomCypher(type));
  }

</script>


<ToggleContent>
  <span slot="title">Random Cypher</span>

  <label>
    <select bind:value={type} class="border py-2 px-3 w-full mb-2 capitalize">
      <option value="all">All</option>
      <option value="subtle">Subtle</option>
      <option value="manifest">Manifest</option>
      <option value="rune">Rune</option>
    </select>
  </label>

  <div class="flex justify-center">
    <button
      on:click={generate}
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Generate</button>
  </div>

  <Answer answer={cypher} />
</ToggleContent>
