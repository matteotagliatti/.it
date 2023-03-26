<script>
  import Header from "./components/Header.svelte";
  import Spotify from "./components/Spotify/Index.svelte";
  import Works from "./components/Works/Index.svelte";
  import Activity from "./components/Activity/Index.svelte";
  import Navbar from "./components/Navbar.svelte";
</script>

<div
  class="children:w-full children:mx-auto children:px-4 space-y-10 sm:space-y-20 dark:bg-zinc-900"
>
  <Header />
  <Works />
  <Spotify />
  <Activity />
  <div class="block h-14 sm:h-26" />
  <Navbar />
</div>
