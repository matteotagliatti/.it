<script>
  import Header from "./lib/Header.svelte";
  import Spotify from "./lib/Spotify/Index.svelte";
  import Works from "./lib/Works/Index.svelte";
  import Activity from "./lib/Activity/Index.svelte";
  import Navbar from "./lib/Navbar.svelte";
</script>

<div
  class="children:w-full children:mx-auto children:px-4 space-y-10 sm:space-y-20 dark:bg-zinc-900"
>
  <Header />
  <Works />
  <Spotify />
  <Activity />
  <div class="block h-20 sm:h-26" />
  <Navbar />
</div>
