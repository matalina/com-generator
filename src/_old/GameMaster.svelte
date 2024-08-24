<script lang="ts">
  import { DiceRoll } from "@dice-roller/rpg-dice-roller";
  import ToggleContent from '../components/ui/ToggleContent.svelte';
  import { getRandomKeywords } from '../lib/keywords';
  import { getRandomCyphers, printCypher } from "../lib/cypher/cyphers";

  const gamemaster = [
    {
      status: 'Very Likely',
      target: 3,
      guidance: 'Almost certain that the answer will be a yes'
    },
    {
      status: 'Likely',
      target: 6,
      guidance: 'Good chance but don’t take it for granted'
    },
    {
      status: 'Average',
      target: 9,
      guidance: 'The Game Master is just as likely to say no'
    },
    {
      status: 'Unlikely',
      target: 12,
      guidance: 'Players will need a bit of luck for a yes'
    },
    {
      status: 'Very Unlikely',
      target: 15,
      guidance: 'Players are starting to push their luck'
    },
    {
      status: 'Improbable',
      target: 18,
      guidance: 'Start praying for a yes'
    },
  ];
  let status = 2;
  let question = '';
  let oldQuestion = '';
  let roll = undefined;
  let answer = '';
  let keywords = null;

  const developer = [
    () => { keywords = getRandomKeywords(3); return '<strong>Fail, And...</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>Fail, And...</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>Fail, And...</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>Fail, And...</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>Fail, But...</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>Fail, But...</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>Fail, But...</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>Fail, But...</strong>';},
    randomCyphers,
    randomCyphers,
    () => '<strong>Automatic Success</strong>',
    () => '<strong>Automatic Failure</strong>',
    () => { keywords = getRandomKeywords(3); return '<strong>PC Inhibitor</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>PC Inhibitor</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>PC Enabler</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>PC Enabler</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>NPC Inhibitor</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>NPC Inhibitor</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>NPC Enabler</strong>';},
    () => { keywords = getRandomKeywords(3); return '<strong>NPC Enabler</strong>';},
  ];

  function randomCyphers(): string {
    let roll = new DiceRoll('1d6');
    let cyphers = getRandomCyphers(roll.total);
    let output = `<strong>Find 1d6 Cyphers</strong><br/>`;
    output += `<small class="font-normal text-xs text-blue-500">${roll.output}</small><br/>`;
    output += `<ol class="list-decimal list-inside font-normal text-xs text-justify">`
    for(let i in cyphers) {
      output += `<li>${printCypher(cyphers[i])}</li>`;
    }
    output += `</ol>`;
    return output;
  }

  function answerQuestion(value: number) {
    let  target = gamemaster[status].target;
    if (value - target > 0) {
      return '<strong>Success</strong>';
    }
    if (value - target === 0) {
      keywords = getRandomKeywords(3);
      return '<strong>GM Intrusion</strong>';
    }
    let dev = new DiceRoll('1d20');
    const output = developer[dev.total - 1]();
    return `<strong>Developer:</strong> ${output}<br/><small class="font-normal text-xs text-blue-500">(${dev.output})</small>`;
  }

  function generate() {
    answer = '';
    keywords = null;
    oldQuestion = question;
    roll = new DiceRoll('1d20');
    answer = answerQuestion(roll.total);
    question = '';
  }

</script>


<ToggleContent>
  <span slot="title">Chaos Game Master</span>
  <form class="flex justify-center flex-col" on:submit|preventDefault={generate}>
    <label for="likelyhood">
      <select bind:value={status} class="border py-2 px-3 w-full mb-2 capitalize">
        {#each gamemaster as mod, i}
        <option value={i}>{mod.status} (target: {mod.target})</option>
        {/each}
      </select>
    </label>
    <label for="question">
      <input type="text" id="question" bind:value={question} class="border py-2 px-3 w-full mb-2" />
    </label>
    <button
      type="submit"
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >Answer</button>
  </form>

  {#if answer}
    <div class="w-full h-full bg-blue-300 text-blue-900 border-blue-900 text-center py-2 px-3 mb-2">
      <em><strong>Q:</strong> {oldQuestion}</em><br/>
      <small class="text-xs text-blue-500">({roll.output})</small><br/>
      {@html answer}<br/>
      {#if keywords}
        {keywords.join(', ')}<br/>
      {/if}
    </div>
  {/if}
</ToggleContent>
