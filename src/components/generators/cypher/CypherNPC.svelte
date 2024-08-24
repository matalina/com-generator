<script lang="ts">
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";
  import ToggleContent from '../../ui/ToggleContent.svelte';
  import { types, creatures, descriptors, loot, motivations, rollOnTable, focusVerb, focusNoun, dispositionTable } from "../../../lib/tables";
  import Answer from "../../ui/Answer.svelte";

  let npc = '';
  let level:undefined | number = null;
  let type = 'npc';
  let details = 'basic';
  let selected = undefined;


  function generate() {
    npc = '';

    if (!selected) level = new DiceRoll('1d10').total;
    else level = selected;

    const hp = new DiceRoll(`3 * ${level - 1} + 1d20`).total;
    const damage = new DiceRoll(`1d4 + ${level}`).total;
    const drops = rollOnTable(loot);

    if (details === 'basic') {
      npc = `L${level} HP ${hp}, damage ${damage}<br/><strong>loot:</strong> ${drops.description}`;
      return;
    }

    if (type === 'creature') {
      npc = `L${level} ${rollOnTable(creatures).description}<br/>` +
        `HP ${hp}, damage ${damage}<br/>` +
        `<strong>motivation:</strong> ${
          rollOnTable(motivations).description
        }<br/><strong>loot:</strong> ${drops.description}`;
      return;
    }

    npc = `L${level} ${rollOnTable(descriptors).description} ${
        rollOnTable(types).description
      } ` +
      `who ${rollOnTable(focusVerb).description} ${
        rollOnTable(focusNoun).description
      }<br/>` +
      `HP ${hp}, damage ${damage}<br/>` +
      `<strong>disposition:</strong> ${
        rollOnTable(dispositionTable).description
      }<br/><strong>loot:</strong> ${drops.description}`;
  }

</script>


<ToggleContent>
  <span slot="title">Cypher NPC/Creatures</span>
  <div class="flex justify-center">
    <a
      target="_blank" rel="noreferrer"
      href="https://www.fakenamegenerator.com/"
      class="text-xs border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >
      Fake Name Generator
    </a>
    <a
      target="_blank" rel="noreferrer"
      href="https://www.rangen.co.uk/chars/appgen.php"
      class="text-xs border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >
      Description Generator
    </a>
  </div>
  <label>
    <select bind:value={selected} class="border py-2 px-3 w-full mb-2 capitalize">
      <option value={undefined}>Random</option>
      {#each Array(10) as mod, i}
      <option value={i+1}>Level {i+1}</option>
      {/each}
    </select>
  </label>
  <label>
    <select bind:value={type} class="border py-2 px-3 w-full mb-2 capitalize">
      <option value="npc">NPC</option>
      <option value="creature">Creature</option>
    </select>
  </label>
  <label>
    <select bind:value={details} class="border py-2 px-3 w-full mb-2 capitalize">
      <option value="basic">Basic</option>
      <option value="details">Details</option>
    </select>
  </label>
  <div class="flex justify-center">
    <button
      on:click={generate}
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Generate</button>
  </div>

  <Answer answer={npc} />
</ToggleContent>
