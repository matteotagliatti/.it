<script>
  import Works from "./Works.svelte";
  import Now from "./Now.svelte";
</script>

<section
  class="max-w-5xl flex flex-col-reverse sm:flex-row gap-8 sm:gap-16 sm:children:basis-1/2 sm:children:p-8 dark:text-white"
>
  <div
    class="space-y-6 sm:border sm:border-dashed sm:rounded-xl sm:border-gray-600"
  >
    <h2 class="text-xl font-semibold">Works</h2>
    <div class="space-y-4">
      <Works />
    </div>
  </div>
  <div class="space-y-6">
    <h2 class="text-xl font-semibold">Now</h2>
    <div class="space-y-4">
      <Now />
    </div>
  </div>
</section>
