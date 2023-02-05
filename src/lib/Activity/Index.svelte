<script>
  import Books from "./Books.svelte";
  import Movies from "./Movies.svelte";
</script>

<div class="max-w-5xl flex-col space-y-4 dark:text-white">
  <h2 class="text-xl font-semibold">Books & Movies</h2>
  <div class="flex flex-col md:flex-row gap-8 sm:gap-16">
    <Books />
    <Movies />
  </div>
</div>
