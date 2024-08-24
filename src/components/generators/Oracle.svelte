<script lang="ts">
import { getRandomKeywords } from "../../lib/keywords";
import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import ToggleContent from "../ui/ToggleContent.svelte";
import Answer from "../ui/Answer.svelte";

const modifier = [
  { likelihood: 'impossible', mod: '-8' },
  { likelihood: 'highly unlikely', mod: '-5' },
  { likelihood: 'unlikely', mod: '-3' },
  { likelihood: 'possible', mod: '+0' },
  { likelihood: 'likely', mod: '+3' },
  { likelihood: 'highly likely', mod: '+5' },
  { likelihood: 'a certainty', mod: '+8' },
];

let gmIntrusion = true;
let isGMIntrusion = false;

const oracle = [
  [1, 2, 'No, and'],
  [3, 7, 'No'],
  [8, 9, 'No, but'],
  [10, 10, 'Maybe'],
  [11, 12, 'Yes, but'],
  [13, 18, 'Yes'],
  [19, 20, 'Yes, and'],
];

let question = '';
let oldQuestion = question;
let likelihood = 3;
let answer = '';
let roll;
let ask;
$: isAndOrBut = answer.includes('and') || answer.includes('but');
let keywords = [];

function getAnswer() {
  isGMIntrusion = false;
  oldQuestion = question;
  question = '';
  const mod =  modifier[likelihood].mod;
  const notation = `1d20${mod}`;
  roll = new DiceRoll(notation);
  ask = roll.total;
  if (ask < 0) {
    return 'No, and';
  }
  if (ask > 20) return 'Yes, and';
  for (let i in oracle) {
    const range = oracle[i];
    if(ask >= range[0] && ask <= range[1]) answer = range[2].toString();
  }
  if (answer.includes('and') || answer.includes('but') || answer.toLowerCase().includes('maybe')) {
    keywords = [...getRandomKeywords()];
    if (gmIntrusion) {
      const intrusion = new DiceRoll('1d20');
      if (intrusion.total === 1 || intrusion.total === 20) {
        isGMIntrusion = true;
      }
    }
  }
  return answer;
}

function reset() {
  likelihood = 3;
  answer = '';
  question = '';
  oldQuestion = '';
  roll = 0;
  ask = 0;
  keywords = [];
  isGMIntrusion = false;
}
</script>

<ToggleContent hide={false}>
  <span slot="title">Oracle</span>

  <form on:submit|preventDefault={getAnswer} class="flex flex-col">
    <label for="likelyhood">
      <select bind:value={likelihood} class="border py-2 px-3 w-full mb-2 capitalize">
        {#each modifier as mod, i}
        <option value={i}>{mod.likelihood}</option>
        {/each}
      </select>
    </label>
    <label for="intrusion" class="mb-2">
      <input type="checkbox" id="intrusion" checked={gmIntrusion} on:click={() => gmIntrusion = !gmIntrusion }/>
      <span>Use GM Intrusions?</span>
    </label>
    <label for="question">
      <input type="text" id="question" bind:value={question} class="border py-2 px-3 w-full mb-2" />
    </label>
  </form>

  <div class="justify-center w-full">
    {#if answer}
    <Answer answer={`<em><strong>Q:</strong> ${oldQuestion}</em><br/>
      <small class="text-xs text-blue-500">(${roll.output})</small><br/>
      <strong>${answer}</strong>
      ${isAndOrBut ? `${keywords.join(', ')}<br/>`: ''}
      ${isAndOrBut && isGMIntrusion ? `<strong>GM Intrusion: +1XP</strong>`: ''}`} />
    {/if}
  </div>
  <div class="flex justify-center">
    <button on:click={getAnswer} class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">Generate</button>
    <button on:click={reset} class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">Reset</button>
  </div>
</ToggleContent>
