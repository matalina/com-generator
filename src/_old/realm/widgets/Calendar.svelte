<script type="ts">
import { moonPhase, today, moons } from '../lib/date-time';
    import Moon from './Moon.svelte';

$: data = today();
</script>

<div class="m-3">
  <table class="w-full">
    <thead>
      <tr>
        <th colspan="8">{moons[parseInt(data.month) -1]} {data.year} LC</th>
      </tr>
    </thead>
    <tbody>
    {#each Array(5) as _,i}
      <tr>
        {#each Array(8) as _,j}
          <td
          class:active={parseInt(data.day) === (i*8)+j+1}
          class:rest={j%4 === 3}
          class="text-center relative border"
          >
            <div class="p-0 m-0 text-xs">{(i*8)+j+1}</div>
            <Moon moon={moonPhase((i*8)+j)} width={40}/>
          </td>
        {/each}
      </tr>
    {/each}
    </tbody>
  </table>
</div>

<style lang="postcss">
  .active {
    @apply bg-purple-300;
  }

  .rest {
    @apply bg-purple-100;
  }
</style>