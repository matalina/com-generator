<script type="ts">
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";
  import ToggleContent from "../ui/ToggleContent.svelte";
  import { outerSpace, rollOnTable, urbanDistricts, wildness } from "../../lib/tables";
  import Answer from "../ui/Answer.svelte";
  import { getRandomKeywords } from "../../lib/keywords";


  let gridTypes = [
    {name: 'Hex', value:6, diceFormula: '1d6'},
    {name: 'Square', value:4, diceFormula: '1d4'}
  ];
  let terrainTypes = [
    {name: 'Wilderness', value: 1, table: wildness},
    {name: 'Urban', value: 2, table: urbanDistricts},
    {name: 'Outer Space', value: 1, table: outerSpace}
  ];

  let answer;

  let terrain = terrainTypes[0];;
  let grid = gridTypes[0];
  let entrance = 1

  function generate() {
    const exits = [entrance];
    const exit = new DiceRoll(grid.diceFormula).total;
    for(let i = 0; i < exit; i++) {
      let roll = new DiceRoll(grid.diceFormula).total;
      if(!exits.includes(roll)) exits.push(roll);
    }
    if(exits.length === 1) {
      exits.push(new DiceRoll(grid.diceFormula).total);
    }

    const detail = rollOnTable(terrain.table);

    const landmark = new DiceRoll('1d20').total;

    answer = `This ${grid.name.toLowerCase()} tile is <strong>${detail.description.toLowerCase()}</strong> with exits at ${exits.join(', ')}.`

    if(landmark > 13) answer += `<br/>This tile has an important landmark.<br/>[${getRandomKeywords().join(', ')}]`;

    if(landmark === 1) answer += `<br/>There is a <strong>hazard</strong> present on this tile.<br/>[${getRandomKeywords().join(', ')}]`;

    if(landmark === 20) answer += `<br/><strong>GM Intrusion +1XP</strong><br/>[${getRandomKeywords().join(', ')}]`

  }
</script>

<ToggleContent hide={false}>
  <span slot="title">Map Tile</span>

  <form on:submit|preventDefault={generate} class="flex flex-col">
    <label for="grid">
      <select bind:value={grid} class="border py-2 px-3 w-full mb-2 capitalize">
        {#each gridTypes as type}
        <option value={type}>{type.name}</option>
        {/each}
      </select>
    </label>
    <label for="terrain">
      <select bind:value={terrain} class="border py-2 px-3 w-full mb-2 capitalize">
        {#each terrainTypes as type}
        <option value={type}>{type.name}</option>
        {/each}
      </select>
    </label>
    <label for="entrance" class="flex items-center">
      <div class="pr-3 pb-3 font-bold">Entrance:</div>
      <select bind:value={entrance} class="border py-2 px-3 w-full mb-2 capitalize">
        {#each Array(grid) as _, e}
        <option value={e+1}>{e+1}</option>
        {/each}
      </select>
    </label>
    <button type="submit" class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">
      Generate
    </button>

    <Answer {answer} />
</ToggleContent>
