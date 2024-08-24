<script>
  import { Router, Route, Link } from 'svelte-routing';
  import Disclaimer from './components/ui/Disclaimer.svelte';
  import ChangeLog from './components/pages/ChangeLog.svelte';
  import Story from './components/pages/Story.svelte';
  import Tarot from './components/pages/Tarot.svelte';

  import openBook from './assets/open-book.svg';
  
  import cards from './assets/cards.svg';

  export let url = '';
</script>

<div id="app" class="lg:w-1/3 mx-auto">
  <Router {url}>
    <nav class="flex items-center w-full p-3">
      <div class="flex-grow flex text-lg">
        <Link to="/">
          <div
            class="py-2 px-3 border border-gray-900 text-gray-900 mr-2 focus:bg-gray-200 hover:bg-gray-200"
          >
          <img src={openBook} alt="Story Mode" class="h-4"/>
          </div>
        </Link>
        <Link to="/tarot">
          <div
            class="py-2 px-3 border border-gray-900 text-gray-900 mr-2 focus:bg-gray-200 hover:bg-gray-200"
          >
          <img src={cards} alt="Tarot Cards" class="h-4"/>
          </div>
        </Link>
        
      </div>
      <Link class="text-xs text-gray-500 p-2" to="/change-log">
        v0.240824.01
      </Link>
    </nav>
    <section>
      <Route path="/" component={Story} />
      <Route path="/simple" component={Tarot} />
      <Route path="/change-log" component={ChangeLog} />
    </section>
    <Disclaimer />
  </Router>
</div>

<style lang="postcss">
  .active {
    @apply bg-gray-700 text-gray-100 border-gray-100;
  }
</style>
