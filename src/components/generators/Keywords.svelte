<script type="ts">
import { getRandomKeywords } from '../../lib/keywords';
  import Answer from '../ui/Answer.svelte';
import ToggleContent from '../ui/ToggleContent.svelte';


let count;
$: keywords = [];

function generate() {
    keywords = getRandomKeywords(count.value);
}
</script>

<ToggleContent>
  <span slot="title">Keywords</span>

  <form on:submit|preventDefault={generate} class="flex flex-col">
    <input bind:this={count} class="border py-2 px-3 w-full mb-2" value="3"/>
    <div class="flex justify-center">
      <button type="submit" class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">
        Generate
      </button>
    </div>
    <Answer answer={keywords.join(', ')} />
  </form>
</ToggleContent>
