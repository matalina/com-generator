<script>
  import ToggleContent from '../../components/ui/ToggleContent.svelte';
  import MiniCreateCreature from './MiniCreateCreature.svelte';
  import MiniParticipant from './MiniParticipant.svelte';

  let step = 1;
  let newCreature = false;
  let creature = '-1';
  let character = '-1';
  $: creatures = JSON.parse(localStorage.getItem('creatures')) || [];
  $: characters = JSON.parse(localStorage.getItem('characters')) || [];
  $: participants = JSON.parse(localStorage.getItem('participants')) || [];
  let active = 0;
  let round = 1;

  function sortParticipants(a, b) {
    if (a.initiative > b.initiative) return -1;
    if (a.initiative < b.initiative) return 1;
    return 0;
  }

  function openCreatureCreation() {
    newCreature = true;
  }

  function addParticipant(participant) {
    participants = [
      ...participants,
      {
        participant,
        initiative: 0,
      },
    ];
    localStorage.setItem('participants', JSON.stringify(participants));
  }

  function saveParticipant() {
    localStorage.setItem('participants', JSON.stringify(participants));
    participants = [...participants];
  }

  function next() {
    if (active + 1 === participants.length) {
      active = 0;
      round++;
    } else active++;
  }

  function clearParticipants() {
    localStorage.removeItem('participants');
    participants = [];
    active = 0;
    round = 1;
    step = 1;
  }
  function close() {
    newCreature = false;
    creatures = JSON.parse(localStorage.getItem('creatures'));
  }
</script>

<ToggleContent hide={false}>
  <span slot="title">Combat Tracker</span>

  {#if step === 1}
    <button
      on:click={openCreatureCreation}
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >
      <i class="fa-solid fa-plus" />
      Create NPC/Creature
    </button>

    <label for="saved" class="flex">
      <select bind:value={creature} class="border py-2 px-3 w-full mb-2">
        <option value="-1">Saved NPC/Creature</option>
        {#each creatures as value, i}
          <option value={i}>{value.name}</option>
        {/each}
      </select>
      <button
        class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
        on:click={() => addParticipant(creatures[creature])}
      >
        <i class="fa-solid fa-plus" />
      </button>
    </label>

    <label for="saved" class="flex">
      <select bind:value={character} class="border py-2 px-3 w-full mb-2">
        <option value="-1">Saved Character</option>
        {#each characters as value, i}
          <option value={i}>{value.name}</option>
        {/each}
      </select>
      <button
        class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
        on:click={() => addParticipant(characters[character])}
      >
        <i class="fa-solid fa-plus" />
      </button>
    </label>

    {#if newCreature}
      <MiniCreateCreature on:close-creature={close} />
    {/if}

    {#if participants.length > 0}
      {#each participants as p}
        <label class="flex items-center">
          <span class="mr-1 flex-grow"
            >{p.participant.level ? `L${p.participant.level} ` : ''}{p
              .participant.name}</span
          >
          <input
            type="number"
            bind:value={p.initiative}
            class="border py-2 px-3 w-1/4 mb-2"
            on:input={saveParticipant}
          />
        </label>
      {/each}
      <button
        on:click={() => (step = 2)}
        class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
        >Start</button
      >
    {/if}
  {/if}

  {#if step === 2}
    <strong>Round {round}</strong>
    {#each [...participants].sort(sortParticipants) as order, index}
      <MiniParticipant
        participant={order}
        active={index === active}
        on:dead={next}
      />
    {/each}
    <div class="flex">
      <button
        class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
        on:click={next}
      >
        Next
      </button>
      <button
        on:click={clearParticipants}
        class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
      >
        Done/Clear
      </button>
    </div>
  {/if}
</ToggleContent>
