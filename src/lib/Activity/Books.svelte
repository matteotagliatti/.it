<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import Loader from "../Loader.svelte";

  const XMLtoApi = "https://rss-to-json-serverless-api.vercel.app/api?feedURL=";
  const OkuRSSLink = "https://oku.club/rss/collection/75aEs";
  let books;

  onMount(async () => {
    try {
      books = await axios
        .get(XMLtoApi + OkuRSSLink)
        .then((res) => res.data.items);
      if (books.length > 5) {
        books = books.slice(0, 6);
      }
    } catch (error) {
      console.log(error);
    }
  });
</script>

<section class="flex flex-col gap-4 sm:basis-2/5">
  <p>
    Looking for a book to read? Check out the last few I've finished pulled from
    my <a
      href="https://oku.club/user/mattetgl"
      class="underline text-indigo-600 dark:text-indigo-400"
      rel="noopener noreferrer"
      target="_blank">Oku</a
    > feed.
  </p>
  {#if books}
    <div class="flex flex-col gap-4">
      {#each books as book}
        <a
          href={book.link}
          target="_blank"
          class="group"
          rel="noopener noreferrer"
        >
          <h2 class="group-hover:underline font-semibold">{book.title}</h2>
          <p class="text-slate-500 text-sm dark:text-gray-400">
            {book.author.$t}
          </p>
        </a>
      {/each}
    </div>
  {:else}
    <Loader />
  {/if}
</section>
