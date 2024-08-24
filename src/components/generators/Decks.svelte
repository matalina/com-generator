<script>
  import { majorArcana, playingCards, shuffle, tarotDeck } from './../../lib/decks';
  import ToggleContent from "../ui/ToggleContent.svelte";
  import Answer from '../ui/Answer.svelte';


  let decks = [
    {name: 'Playing Cards', cards: playingCards},
    {name: 'Major Arcana', cards: majorArcana},
    {name: 'Full Tarot', cards: tarotDeck}
  ];

  let choice = 0;

  let shuffled = shuffle(decks[choice].cards);
  let card = null;
  $: count = shuffled.length;

  function draw() {
    if(count === 0) return;
    card = shuffled.shift();
    shuffled = [...shuffled];
  }

  function shuffleAll() {
    card = null;
    shuffled = shuffle(decks[choice].cards);
  }

  function changeDeck() {
    const cards = [...decks[choice].cards];
    shuffled = [...shuffle(cards)];
  }
</script>

<ToggleContent>
  <span slot="title">Decks</span>
  <div class="w-full block">
    <select on:click={() => changeDeck()} bind:value={choice}  class="border py-2 px-3 w-full mb-2 capitalize">
      {#each decks as deck, index}
        <option value={index}>{deck.name}</option>
      {/each}
    </select>
    <div class="mb-2">
      <strong>Number of Cards:</strong> {count}
    </div>
  </div>

  <button on:click={draw} class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">
    Draw
  </button>
  <button on:click={shuffleAll} class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800">
    Reshuffle All
  </button>
  {#if card}
    <Answer answer={card.number !== '' ? `${card.number} of ${card.suit}` : card.suit }/>
  {/if}
</ToggleContent>
