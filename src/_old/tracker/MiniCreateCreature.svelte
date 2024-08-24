<script>
  import { createEventDispatcher } from 'svelte';

  let dispatch = createEventDispatcher();

  const emptyCreature = {
    level: 1,
    name: '',
    hp: 0,
    damage: 2,
    movement: 'short',
    combat: '',
    interaction: '',
  };

  let creature = {
    level: 1,
    name: '',
    hp: 0,
    damage: 2,
    movement: 'short',
    combat: '',
    interaction: '',
  };

  let creatures = JSON.parse(localStorage.getItem('creatures')) || [];

  function saveCreature() {
    creatures.push(creature);
    creatures = [...creatures];
    localStorage.setItem('creatures', JSON.stringify(creatures));
    creature = emptyCreature;
    dispatch('close-creature');
  }
  function close() {
    dispatch('close-creature');
  }
</script>

<div>
  <label for="name">
    NPC/Creature name:
    <input
      type="text"
      id="name"
      bind:value={creature.name}
      class="border py-2 px-3 w-full mb-2"
    />
  </label>
  <label for="level">
    Level:
    <input
      type="number"
      id="level"
      bind:value={creature.level}
      class="border py-2 px-3 w-full mb-2"
    />
  </label>
  <label for="hp">
    HP:
    <input
      type="number"
      id="hp"
      bind:value={creature.hp}
      class="border py-2 px-3 w-full mb-2"
    />
  </label>
  <label for="damage">
    Damage:
    <input
      type="number"
      id="damage"
      bind:value={creature.damage}
      class="border py-2 px-3 w-full mb-2"
    />
  </label>
  <label for="saved" class="flex-grow mr-1">
    <span>Movement</span>
    <select
      id="select"
      bind:value={creature.movement}
      class="border py-2 px-3 w-full mb-2"
    >
      <option value="immediate">immediate</option>
      <option value="short">short</option>
      <option value="long">long</option>
      <option value="very long">very long</option>
    </select>
  </label>
  <label for="combant">
    Combat:
    <textarea
      bind:value={creature.combat}
      class="border py-2 px-3 w-full mb-2"
    />
    {creature.combat}
  </label>
  <label for="interactions">
    Interaction:
    <textarea
      bind:value={creature.interaction}
      class="border py-2 px-3 w-full mb-2"
    />
    {creature.interaction}
  </label>
  <div>
    <button
      on:click={saveCreature}
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >
      Save
    </button>
    <button
      on:click={close}
      class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
    >
      Close
    </button>
  </div>
</div>
