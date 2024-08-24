<script lang="ts">
  import { DiceRoll } from '@dice-roller/rpg-dice-roller';
  import ToggleContent from '../../ui/ToggleContent.svelte';
  import { getRandomKeywords } from '../../../lib/keywords';
  import Answer from '../../ui/Answer.svelte';

  let level = 0;
  $: target = level * 3;
  let oldLevel = '0';
  let oldTarget = '0';
  let question = '';
  let oldQuestion = '';
  let roll = undefined;
  let answer = '';

  function answerQuestion(value: number) {
    let string = '';
    if (value - parseInt(target.toString()) >= 0) {
      string += '<strong>Success</strong>';
    } else {
      string += `<strong>Fail</strong>`;
    }
    if (value === 1) {
      string += `<br/><strong>GM Intrusion: No XP</strong>`;
      string += `<br/>${getRandomKeywords(3).join(', ')}`;
    }
    if (value === 17) {
      string += '<br/><strong>Damage +1</strong>';
    }
    if (value === 18) {
      string += '<br/><strong>Damage +2</strong>';
    }
    if (value === 19) {
      string += '<br/><strong>Minor effect or Damage +3</strong>';
    }
    if (value === 20) {
      string += '<br/><strong>Major effect or Damage +4</strong>';
    }

    const gmi = new DiceRoll('1d10');
    const isGMI = value % 10 === gmi.total % 10;
    string += `<br/><small class="text-xs text-blue-500">(${gmi.output})</small><br/>
      ${isGMI && value !== 1 ? `<strong>GM Intrusion: +1XP</strong><br/>`: ''}
      ${isGMI && value !== 1 ? `${getRandomKeywords().join(', ')}<br/>`: ''}`;


    return `${string}`;
  }

  function generate() {
    answer = '';
    oldQuestion = question;
    oldTarget = target.toString();
    oldLevel = level.toString();
    roll = new DiceRoll('1d20');
    answer = answerQuestion(roll.total);
    // clear input fields
    question = '';
  }
</script>

<ToggleContent hide={false}>
  <span slot="title">Tasks</span>
  <form class="flex flex-col" on:submit|preventDefault={generate}>
    <label for="question">
      Task:
      <input
        type="text"
        id="question"
        bind:value={question}
        class="border py-2 px-3 w-full mb-2"
      />
    </label>
    <label for="target">
      Difficulty Level:
      <input
        type="number"
        id="level"
        bind:value={level}
        class="border py-2 px-3 w-full mb-2"
      />
    </label>
    <div class="flex justify-center">
      <button
        type="submit"
        class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
        >Answer</button
      >
    </div>
  </form>

  {#if answer}
  <Answer answer={`<em><strong>Q:</strong> ${oldQuestion} [${oldLevel} (${oldTarget})]</em><br />
    <small class="text-xs text-blue-500">(${roll.output})</small><br />
    ${answer}`}/>
  {/if}
</ToggleContent>
