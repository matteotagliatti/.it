<script>
  import Header from "./lib/Header.svelte";
  import Spotify from "./lib/Spotify/Index.svelte";
  import Works from "./lib/Works/Index.svelte";
</script>

<div
  class="children:w-full children:mx-auto children:px-4 space-y-10 sm:space-y-20"
>
  <Header />
  <Works />
  <Spotify />
</div>
