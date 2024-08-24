<script type="ts">
  import TurndownService from 'turndown';
  TurndownService.prototype.escape = (text) => text;
  const turndown= new TurndownService();

  export let answer = '';
  function copyAnswer() {
    if (navigator.clipboard) {
      const copy = turndown.turndown(answer, {
        headingStyle: 'atx',
        bulletListMarker: '*',
        codeBlockedStyle: 'fenced',
        emDelilmiter: '_',
        strongDelimiter: '**',
      });
      navigator.clipboard.writeText(copy);
    }
  }

</script>

{#if answer}
  <div class="h-full w-full bg-blue-300 text-blue-900 border-blue-900 text-center py-2 px-3 mb-2 border relative">
    {#if navigator.clipboard}
    <button class="absolute bottom-0 right-0 py-2 px-3 text-slate-500 hover:text-blue-900 focus:text-blue-900" on:click|preventDefault={copyAnswer}  >
      <i class="fa-thin fa-copy"></i>
    </button>
    {/if}
    {@html answer}
  </div>
{:else}
  <div class="py-2 px-3 mb-2">&nbsp;</div>
{/if}
