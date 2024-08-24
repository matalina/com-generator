<script lang="ts">
  import Markdown from '../ui/Markdown.svelte';
</script>

<div class="prose border p-3 mb-3 rounded-xl">
  <h3>Change Log</h3>

  <Markdown
    small={true}
    markdown={`
#### 1.230525.02
* added version and change log
* added Markdown block
* added tailwind typography for easier formatting of text
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.230525.03
* fixed loot cypher description output
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.230525.04
* moved version to top
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.230527.01
* changed change log to page
* added button menu to top of page
* added combat page
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.230527.02
* Turned into installable PWA via vite plugin
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.230527.03
* Updated Character sheet for narrow display
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.230529.01
* Added a Combat Tracker
* Fixed delete character
* Added update charater
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.230612.01
* Added pwa icons
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.230628.01
* Added playing card and tarot decks
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.230713.01
* Added type to cypher listings
* Started fantastic cypher file (not implemented yet)
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.230726.01
* Moved Homebrew tables to own location
* Added Chaos Aura table
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.231009.01
* Updated Adventure status to generate more adventure information
* Removed character gen and combat tracker
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.231009.02
* Added runes to cyphers
  `}
  />
  <Markdown
  small={true}
  markdown={`
#### 1.231009.03
* Made Answers widget
* Added copy to markdown button on Answers widget
`}
/>
<Markdown
small={true}
markdown={`
#### 1.231009.04
* Added Map Tile generation
`}
/>
<Markdown
small={true}
markdown={`
#### 1.231101.01
* Fixed Subtle Random Cypher Generation
* Added New Everlight tables
* Removed Random Table table display to save room
`}
/>
<Markdown
small={true}
markdown={`
#### 1.231205.01
* Updated Developer output
* Updated Adventure Status output
* Removed Everlight and added Explorers
`}
/>
<Markdown
    small={true}
    markdown={`
#### 1.240522.01
* added Solo tab with simple task and oracle
  `}
  />
  <Markdown
    small={true}
    markdown={`
#### 1.240621.01
* added Story Mode
  `}
  />
  <Markdown
  small={true}
  markdown={`
#### 1.240621.02
* removed timestamp from Content
* added delete entry
`}
/>
<Markdown
small={true}
markdown={`
#### 1.240711.01
* fixed simple oracle question display
* start session to new day & always clickable
* added keyword generator with a question
* allow markdown, and links in question/input box
* updated icons to work offline
* defaults to story mode
* removed explores mode
* renamed solo to simple
* renamed the original home to all 
`}
/>
</div>
