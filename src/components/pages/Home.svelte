<script lang="ts">
  import Oracle from '../generators/Oracle.svelte';
  import Keywords from '../generators/Keywords.svelte';
  import DiceRoller from '../generators/DiceRoller.svelte';
  import RandomTables from '../generators/RandomTables.svelte';
  import CypherNpc from '../generators/cypher/CypherNPC.svelte';
  import Tasks from '../generators/cypher/Tasks.svelte';
  import Status from '../generators/cypher/Status.svelte';
  import Cypher from '../generators/cypher/Cypher.svelte';
  import Developer from '../generators/cypher/Developer.svelte';
  import Decks from '../generators/Decks.svelte';
  import MapTile from '../generators/MapTile.svelte';
</script>

<main class="md:flex">
  <div class="mx-auto w-full">
    <Oracle />
    <DiceRoller />
    <Decks />
    <Tasks />
    <Developer />
    <Status />
    <CypherNpc />
    <Cypher />
    <MapTile />
    <RandomTables />
    <Keywords />
  </div>
</main>
