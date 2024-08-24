<script>
  import { createCanvas, loadImage } from 'canvas';

  $: characters = JSON.parse(localStorage.getItem('characters')) || [];

  const emptyCharacter = {
    name: '',
    type: '',
    descriptor: '',
    focus: '',
    flavor: '',
    tier: 1,
    effort: 1,
    armor: 0,
    xp: 0,
    might: [0, 0, 0],
    speed: [0, 0, 0],
    intellect: [0, 0, 0],
    recovery: [4, 0, false, false, false, false],
    damage: [true, false, false, false],
  };

  $: data = { ...emptyCharacter };

  let value = -1;
  $: article = ['a', 'e', 'i', 'o', 'u'].includes(data?.descriptor[0])
    ? 'an'
    : 'a';

  let url = null;

  function getArticle(descriptor) {
    if (['a', 'e', 'i', 'o', 'u'].includes(descriptor[0])) {
      return 'an';
    }
    return 'a';
  }

  const WIDTH = 500;
  const HEIGHT = 300;

  function deleteCharacter() {
    characters = characters.splice(value, 1);
    value = -1;
    data = { ...emptyCharacter };
    characters = [...characters];
    localStorage.setItem('characters', JSON.stringify(characters));
  }

  function save() {
    characters = [...characters, data];
    localStorage.setItem('characters', JSON.stringify(characters));
    value = characters.length - 1;
  }

  function overwrite() {
    characters[value] = { ...data };
    localStorage.setItem('characters', JSON.stringify(characters));
  }

  function clear() {
    localStorage.removeItem('characters');
    characters = [];
  }

  function clearData() {
    data = { ...emptyCharacter };
    value = -1;
  }

  function getCharacter() {
    if (value === -1) data = { ...emptyCharacter };
    data = characters[value];
  }

  async function generate() {
    if (value !== -1) overwrite();
    const bg = await loadImage('./scroll.png');

    const canvas = createCanvas(WIDTH, HEIGHT);
    const ctx = canvas.getContext('2d');

    ctx.drawImage(bg, 0, 0, WIDTH, HEIGHT);

    let flavor = '';
    if (data.flavor) flavor = `with ${data.flavor} `;

    ctx.font = '24px "Satisfy"';
    ctx.textAlign = 'center';
    ctx.fillText(`${data.name}`, WIDTH / 2, 62);
    ctx.fillText(
      `is ${getArticle(data.descriptor)} ${data.descriptor} ${data.type}`,
      WIDTH / 2,
      90
    );
    ctx.fillText(`${flavor}who ${data.focus}`, WIDTH / 2, 118);

    let LEFT = 130;
    ctx.textAlign = 'right';
    ctx.fillText('Tier:', LEFT, 166);
    ctx.fillText('Effort:', LEFT, 194);
    ctx.fillText('Armor:', LEFT, 222);
    ctx.fillText('XP:', LEFT, 250);

    LEFT = LEFT + 4;
    ctx.textAlign = 'left';
    ctx.fillText(data.tier.toString(), LEFT, 166);
    ctx.fillText(data.effort.toString(), LEFT, 194);
    ctx.fillText(data.armor.toString(), LEFT, 222);
    ctx.fillText(data.xp.toString(), LEFT, 250);

    let CENTER = 250 - 2;
    ctx.textAlign = 'right';
    ctx.fillText('Might:', CENTER, 166);
    ctx.fillText('Speed:', CENTER, 194);
    ctx.fillText('Intellect:', CENTER, 222);

    CENTER = 250 + 2;
    ctx.textAlign = 'left';
    ctx.fillText(
      `${data.might[0]}/${data.might[1]} (${data.might[2]})`,
      CENTER,
      166
    );
    ctx.fillText(
      `${data.speed[0]}/${data.speed[1]} (${data.speed[2]})`,
      CENTER,
      194
    );
    ctx.fillText(
      `${data.intellect[0]}/${data.intellect[1]} (${data.intellect[2]})`,
      CENTER,
      222
    );

    const RIGHT = 340;
    const add = parseInt(data.recovery[1].toString()) + data.tier;
    const recovery = parseInt(data.recovery[0].toString());
    ctx.textAlign = 'left';
    ctx.fillText(`Recovery: 1d6+${add}`, RIGHT, 166);
    ctx.fillText('Damage Track', RIGHT, 222);
    const SQUARE = 20;
    let ROW = 177;
    ctx.strokeStyle = 'black';
    for (let i = 0; i < recovery; i++) {
      ctx.strokeRect(RIGHT + i * (SQUARE + 4), ROW, SQUARE, SQUARE);
      if (data.recovery[i + 2])
        ctx.fillRect(RIGHT + i * (SQUARE + 4), ROW, SQUARE, SQUARE);
    }
    ROW = 234;
    ctx.strokeStyle = 'black';
    for (let i = 0; i < 4; i++) {
      ctx.strokeRect(RIGHT + i * (SQUARE + 4), ROW, SQUARE, SQUARE);
      if (data.damage[i])
        ctx.fillRect(RIGHT + i * (SQUARE + 4), ROW, SQUARE, SQUARE);
    }

    url = canvas.toDataURL();
  }
</script>

<div class="md:flex">
  <div class="mx-auto w-full">
    <div class="md:full flex flex-col p-3 border m-3">
      <h2 class="text-3xl font-bold text-center mb-3">
        Character Sheet Generator
      </h2>

      <div class="border p-3 mb-3">
        <div class="flex flex-col">
          <label for="saved" class="flex-grow mr-1">
            <span>Locally Saved Characters</span>
            <select
              id="select"
              bind:value
              class="border py-2 px-3 w-full mb-2"
              on:change={getCharacter}
            >
              <option value="0">-- none --</option>
              {#each characters as value, i}
                <option value={i}>{value.name}</option>
              {/each}
            </select>
          </label>
          <label for="name" class="flex-grow">
            <span>Name</span>
            <input
              type="text"
              id="name"
              bind:value={data.name}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
        </div>

        <div class="flex w-full items-center">
          <div class="p-3 pl-0 flex-shrink-0">is {article}</div>
          <label for="descriptor" class="flex-grow">
            <span>Descriptor</span>
            <input
              type="text"
              id="descriptor"
              bind:value={data.descriptor}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
        </div>
        <label for="type" class="flex-grow">
          <span>Type</span>
          <input
            type="text"
            id="type"
            bind:value={data.type}
            class="border py-2 px-3 w-full mb-2"
          />
        </label>
        <div class="flex items-center">
          <div class="p-3 pl-0">with</div>
          <label for="flavor" class="flex-grow">
            <span>Flavor</span>
            <input
              type="text"
              id="flavor"
              bind:value={data.flavor}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
        </div>
        <div class="flex items-center">
          <div class="p-3">who</div>
          <label for="focus" class="flex-grow">
            <span>Focus</span>
            <input
              type="text"
              id="focus"
              bind:value={data.focus}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
        </div>
      </div>

      <div class="border p-3 mb-3 md:flex mr-1 flex-grow items-center">
        <label for="recovery">
          <span>Recovery (count)</span>
          <input
            type="number"
            id="recovery"
            bind:value={data.recovery[0]}
            class="border py-2 px-3 w-full mb-2"
          />
        </label>
        <label for="extra">
          <span>Recovery (xtra pts)</span>
          <input
            type="number"
            id="extra"
            bind:value={data.recovery[1]}
            class="border py-2 px-3 w-full mb-2"
          />
        </label>
      </div>
      <div class="border p-3 mb-3 md:flex mr-1 flex-grow items-center">
        <label for="taken" class="min-w-fit px-3">
          <div>Recovery (taken)</div>
          {#each Array(data.recovery[0]) as value, i}
            <input
              type="checkbox"
              value={data.recovery[i + 2]}
              checked={data.recovery[i + 2] ? true : undefined}
              on:click={() => (data.recovery[i + 2] = !data.recovery[i + 2])}
            />
          {/each}
        </label>
        <label for="damage">
          <div>Damage Track</div>
          {#each data.damage as value, i}
            <input
              type="checkbox"
              value={data.damage[i]}
              checked={data.damage[i] ? true : undefined}
              on:click={() => (data.damage[i] = !data.damage[i])}
            />
          {/each}
        </label>
      </div>

      <div class="border p-3 mb-3 flex">
        <label for="tier">
          <span>Tier</span>
          <input
            type="number"
            id="tier"
            bind:value={data.tier}
            class="border py-2 px-3 w-full mb-2"
          />
        </label>&nbsp;
        <label for="effort">
          <span>Effort</span>
          <input
            type="number"
            id="effort"
            bind:value={data.effort}
            class="border py-2 px-3 w-full mb-2"
          />
        </label>&nbsp;
        <label for="armor">
          <span>Armor</span>
          <input
            type="number"
            id="armor"
            bind:value={data.armor}
            class="border py-2 px-3 w-full mb-2"
          />
        </label>&nbsp;
        <label for="xp">
          <span>XP</span>
          <input
            type="number"
            id="xp"
            bind:value={data.xp}
            class="border py-2 px-3 w-full mb-2"
          />
        </label>
      </div>

      <div class="flex">
        <div class="border p-3 mb-3 flex flex-col mr-1 flex-grow">
          <div
            class="w-full text-center uppercase tracking-widestb border-b border-gray-900
           mb-2"
          >
            Might
          </div>
          <label for="might0" class="w-full">
            <span>Current</span>
            <input
              type="number"
              id="might0"
              bind:value={data.might[0]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="might1" class="w-full">
            <span>Pool</span>
            <input
              type="number"
              id="might1"
              bind:value={data.might[1]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="might2" class="w-full">
            <span>Edge</span>
            <input
              type="number"
              id="might2"
              bind:value={data.might[2]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
        </div>
        <div class="border p-3 mb-3 flex flex-col mr-1 flex-grow">
          <div
            class="w-full text-center uppercase tracking-widestb border-b border-gray-900
           mb-2"
          >
            Speed
          </div>
          <label for="speed0" class="w-full">
            <span>Current</span>
            <input
              type="number"
              id="speed0"
              bind:value={data.speed[0]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="speed1" class="w-full">
            <span>Pool</span>
            <input
              type="number"
              id="speed1"
              bind:value={data.speed[1]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="speed2" class="w-full">
            <span>Edge</span>
            <input
              type="number"
              id="speed2"
              bind:value={data.speed[2]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
        </div>
        <div class="border p-3 mb-3 flex flex-col flex-grow">
          <div
            class="w-full text-center uppercase tracking-widestb border-b border-gray-900
           mb-2"
          >
            Intellect
          </div>
          <label for="intellect0" class="w-full">
            <span>Current</span>
            <input
              type="number"
              id="intellect0"
              bind:value={data.intellect[0]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="intellect1" class="w-full">
            <span>Pool</span>
            <input
              type="number"
              id="intellect1"
              bind:value={data.intellect[1]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>&nbsp;
          <label for="intellect2" class="w-full">
            <span>Edge</span>
            <input
              type="number"
              id="intellect2"
              bind:value={data.intellect[2]}
              class="border py-2 px-3 w-full mb-2"
            />
          </label>
        </div>
      </div>

      <div class="flex flex-col justify-center">
        <button
          on:click={generate}
          class="border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
          >Generate Image</button
        >
        <div class="flex w-full">
          <button
            on:click={overwrite}
            class="w-1/2 border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
            >Update Character</button
          >
          <button
            on:click={deleteCharacter}
            class="w-1/2 border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
            >Delete Character</button
          >
        </div>
        <div class="flex w-full">
          <button
            on:click={clearData}
            class="border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
            >Clear Data</button
          >
          <button
            on:click={save}
            class="flex-grow border py-2 px-3 mb-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
            >Save NEW Character Locally</button
          >
        </div>
        <button
          on:click={clear}
          class="w-full border py-2 px-3 mb-2 mr-2 hover:bg-purple-300 bg-purple-200 text-purple-800 border-purple-800"
          >Clear All Saved Characters</button
        >
      </div>

      {#if url}
        <div class="flex flex-col justify-center">
          <div class="flex justify-center">
            <img src={url} alt="" />
          </div>
        </div>
      {/if}
    </div>
  </div>
</div>

<style>
</style>
