<script lang="ts">
  import Answer from '../../ui/Answer.svelte';
import { getDeveloper } from '../../../lib/developer';
  import ToggleContent from '../../ui/ToggleContent.svelte';

  let developer = null;
  let roll = null;

  function generate() {
    const result = getDeveloper();
    developer = result.developer;
    roll = result.roll;
  }
</script>

<ToggleContent>
  <span slot="title">Developer</span>

  <div class="flex justify-center">
    <button
      on:click={generate}
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
      >Generate</button
    >
  </div>

  <Answer answer={developer} />
</ToggleContent>
