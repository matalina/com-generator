<script lang="ts">
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";
  import ToggleContent from '../../ui/ToggleContent.svelte';
  import { daysWeek, moonPhases, rollOnTable, timeDay, season, weather } from "../../../lib/tables";
  import Answer from "../../ui/Answer.svelte";

  const statuses = [
    {
      status: 'Solid',
      target: 3,
      guidance: 'Scene situation is dull, nothing interesting is happening'
    },
    {
      status: 'Stable',
      target: 6,
      guidance: 'Events are underway and are proceeding as expected'
    },
    {
      status: 'Average',
      target: 9,
      guidance: 'Situation has the potential for the unexpected'
    },
    {
      status: 'Unstable',
      target: 12,
      guidance: 'Events require players to be on high alert'
    },
    {
      status: 'Insane',
      target: 15,
      guidance: 'Players in constant danger, anything could happen'
    },
    {
      status: 'Chaos',
      target: 18,
      guidance: 'Situation is beyond all control'
    },
  ];
  let status: number | null = null;
  let roll;
  let day;
  let time;
  let seasons;
  let moon;
  let weathers;
  let moonDay;

  function generate() {
    roll = new DiceRoll('1d6');
    status = roll.total;
    /* day = rollOnTable(daysWeek);
    time = rollOnTable(timeDay);
    seasons = rollOnTable(season);
    moon = rollOnTable(moonPhases);
    moonDay = new DiceRoll('1d4'); */
    weathers = rollOnTable(weather);

    while (moonDay.total === 4) {
      moonDay = new DiceRoll('1d4');
    }
  }

</script>


<ToggleContent>
  <span slot="title">Adventure Setup</span>
  <div class="flex justify-center">
    <button
      on:click={generate}
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Generate</button>
  </div>
  {#if status}
  <Answer answer={`<em class="text-xs italic">${statuses[status-1].guidance}</em><br/>
    <strong>Adventure Status:</strong> ${statuses[status-1].status} ${status} (${statuses[status-1].target}) <span class="text-xs italic">${roll.output}</span><br/>
    <strong>Weather:</strong> ${weathers.description} <span class="text-xs italic">${weathers.roll.output}</span><br/>`} />
  {/if}
</ToggleContent>
