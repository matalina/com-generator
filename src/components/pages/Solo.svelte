<script lang="ts">
  import DiceRoller from '../generators/DiceRoller.svelte';
  import CypherNpc from '../generators/cypher/CypherNPC.svelte';
  import Cypher from '../generators/cypher/Cypher.svelte';
  import SimpleOracle from '../generators/SimpleOracle.svelte';
  import SimpleTasks from '../generators/cypher/SimpleTasks.svelte';
  import SoloRandom from '../generators/SoloRandom.svelte';
</script>

<main class="md:flex">
  <div class="mx-auto w-full">
    <SimpleOracle />
    <SimpleTasks />
    <DiceRoller />
    <CypherNpc />
    <Cypher />
    <SoloRandom />
  </div>
</main>
