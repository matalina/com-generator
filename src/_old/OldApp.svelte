<script lang="ts">
import Calendar from './components/widgets/Calendar.svelte';
import RandomEncounters from "./realm/RandomEncounters.svelte";
import Oracle from "../components/generators/Oracle.svelte";
import Today from "./components/widgets/Today.svelte";
import RealmDate from './realm/RealmDate.svelte';
import Keywords from '../components/generators/Keywords.svelte';
import Campaign from './realm/Campaign.svelte';
import { onMount } from 'svelte';

let tab = "random";

function setTab(tabName: string) {
  tab = tabName;
  localStorage.setItem('tab', tab);
}

onMount(() => {
  if(localStorage.getItem('tab')) {
    tab = localStorage.getItem('tab');
  }
});
</script>

<main class="md:flex">
  <div class="flex flex-col md:w-1/4">
    <Keywords />
    <Oracle />
    <h2 class="text-3xl font-bold text-center mb-3">Today</h2>
    <Today />
    <Calendar />
    <RealmDate />
  </div>
  <div class="md:w-3-4 flex flex-col">
    <div class="ml-3 mt-3">
      <button class="py-1 px-3 border mr-3 hover:bg-purple-100" on:click={() => setTab('random')}>Random</button>
      <button class="py-1 px-3 border hover:bg-purple-100"  on:click={() => setTab('campaign')}>Campaign</button>
    </div>
    {#if tab === 'random'}
    <RandomEncounters />
    {/if}
    {#if tab === 'campaign'}
    <Campaign />
    {/if}
  </div>

</main>




<style lang="postcss">

</style>
