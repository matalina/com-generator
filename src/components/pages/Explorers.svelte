<script lang="ts">
  import Oracle from '../generators/Oracle.svelte';
  import Keywords from '../generators/Keywords.svelte';
  import DiceRoller from '../generators/DiceRoller.svelte';
  import CypherNpc from '../generators/cypher/CypherNPC.svelte';
  import Tasks from '../generators/cypher/Tasks.svelte';
  import Status from '../generators/cypher/Status.svelte';
  import Cypher from '../generators/cypher/Cypher.svelte';
  import Developer from '../generators/cypher/Developer.svelte';
  import ExplorersRandomTables from '../generators/home/ExplorersRandomTables.svelte';
</script>

<main class="md:flex">
  <div class="mx-auto w-full">

    <Oracle />
    <DiceRoller />
    <Tasks />
    <ExplorersRandomTables/>
    <CypherNpc />
    <Cypher />
    <Status/>
    <Developer />
    <Keywords />
  </div>
</main>
