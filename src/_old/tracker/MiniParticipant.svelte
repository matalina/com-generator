<script>
  import { createEventDispatcher } from 'svelte';
  import HealDamage from './HealDamage.svelte';

  export let participant;
  export let active;

  const dispatch = createEventDispatcher();
  let character;
  let creature;

  let dead = false;
  let saving = false;

  $: {
    if (participant.participant?.tier)
      character = getCharacter(participant.participant);
    else creature = participant.participant;
  }

  let initiative = participant.initiative;

  $: hp = creature?.hp || 0;

  $: if (creature && hp <= 0 && active) {
    dispatch('dead');
    dead = true;
  }

  $: if (character && character.damage[3] && active) {
    dead = true;
    dispatch('dead');
  }

  function healCreature(event) {
    hp += parseInt(event.detail);
    if (hp > 0) dead = false;
  }

  function damageCreature(event) {
    console.log(event.detail);
    hp -= parseInt(event.detail);
    if (hp <= 0) dead = true;
  }

  function getCharacter(participant) {
    const characters = JSON.parse(localStorage.getItem('characters'));
    const thisCharacterIndex = characters.findIndex(
      a => a.name === participant.name
    );
    return characters[thisCharacterIndex];
  }

  function saveCharacter() {
    if (!character) return;
    saving = true;
    setTimeout(() => {
      const characters = JSON.parse(localStorage.getItem('characters'));
      const thisCharacterIndex = characters.findIndex(
        a => a.name === character.name
      );
      characters[thisCharacterIndex] = character;

      localStorage.setItem('characters', JSON.stringify(characters));

      saving = false;
    }, 300);
  }

  function damageCharacter(event) {
    let damage = event.detail;
    if ((damage = damagePool('might', damage))) {
      if ((damage = damagePool('speed', damage))) {
        damagePool('intellect', damage);
      }
    }
  }
  function damagePool(pool, damage) {
    if (character[pool][0] === 0) return damage;

    if (character[pool][0] > 0 && character[pool][0] >= damage) {
      character[pool][0] -= damage;
      if (character[pool][0] === 0) downTrack();
      return 0;
    }

    let extra = damage - character[pool][0];
    character[pool][0] = 0;
    downTrack();
    return extra;
  }

  function downTrack() {
    let i = 0;
    while (character.damage[i]) i++;
    character.damage[i] = true;
    if (i === 3) dead = true;
  }
</script>

<div class="border p-3 mb-2" class:active class:dead>
  {#if creature}
    <div class="flex">
      <div class="w-3/4">
        <div class="flex">
          <div class="w-1/4">
            {initiative}
          </div>
          <div class="flex-grow">
            L{creature.level}
            {creature.name}
          </div>
        </div>
        <div class="flex">
          <div class="w-1/2">
            HP: {hp} / {creature.hp}
          </div>
          <div class="w-1/2">
            Damage: {creature.damage}
          </div>
        </div>
      </div>
      <div class="w-1/4 flex">
        <HealDamage on:heal={healCreature} on:damage={damageCreature} />
      </div>
    </div>
  {/if}
  {#if character}
    <div class="flex">
      <div class="w-3/4">
        <div class="flex">
          <div class="w-1/4">
            {initiative}
          </div>
          <div class="flex-grow">
            {character.name}
          </div>
        </div>
      </div>
      <div class="w-1/4 flex">
        <HealDamage on:damage={damageCharacter} noHeal={true} />
      </div>
    </div>
    <div class="flex">
      <div class="w-1/3">
        Might: {character.might[0]} / {character.might[1]}
      </div>
      <div class="w-1/3">
        Speed: {character.speed[0]} / {character.speed[1]}
      </div>
      <div class="w-1/3">
        Intellect: {character.intellect[0]} / {character.intellect[1]}
      </div>
    </div>
    <div class="flex">
      <div class="flex justify-center items-center flex-grow">
        <span class="mr-2">Damage Track:</span>
        {#each character.damage as d}
          {#if d}
            <span class="mr-2"><i class="fa-solid fa-square" /></span>
          {:else}
            <span class="mr-2"><i class="fa-regular fa-square" /></span>
          {/if}
        {/each}
      </div>
      <div>
        <button
          class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
          on:click={saveCharacter}
        >
          {#if !saving}
            <i class="fa-solid fa-check" />
          {:else}
            <i class="fa-duotone fa-spinner fa-spin" />
          {/if}
        </button>
      </div>
    </div>
  {/if}
</div>

<style>
  .active {
    @apply border-l-4 border-l-purple-400;
  }
  .dead {
    @apply bg-gray-300 text-gray-500 border-red-700;
  }
</style>
