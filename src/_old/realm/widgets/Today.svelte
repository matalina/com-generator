<script type="ts">
import { onMount, tick } from 'svelte';
import { today } from '../lib/date-time';
import DateComponent from './Date.svelte';

$: data = today();

onMount(() => {
  setInterval(() => {
    data = today();
    tick();
  }, 1000);
});

</script>

<div class="m-3">
  <div class="rounded-lg border border-purple-800">
    <DateComponent data={data} />
  </div>
</div>

<div class="text-xs px-3 text-center">There 32 hours in a day, 100 minutes in an hour and 100 seconds in a minute.</div>