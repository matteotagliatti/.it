<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import Loader from "./Loader.svelte";

  const RSS_URL =
    "https://rss-to-json-serverless-api.vercel.app/api?feedURL=https://oku.club/rss/collection/";
  const reading = "NDdVp";
  const read = "lHlql";

  let readingBooks = [];
  let readBooks = [];
  onMount(async () => {
    const response = await axios.get(RSS_URL + reading);
    const response2 = await axios.get(RSS_URL + read);
    readingBooks = response.data.items;
    readingBooks = readingBooks.slice(0, 2);
    readBooks = response2.data.items;
    readBooks = readBooks.slice(0, 3);
  });
</script>

<div>
  <p>
    Looking for book to read? Check out some pulled from my <a
      href="https://oku.club/user/mattetgl"
      target="_blank">Oku.club</a
    > feed.
  </p>
  <!-- Novels -->
  <div>
    <p class="status reading">
      <img src="/reading.svg" alt="reading" /> Reading...
    </p>
    {#if readingBooks.length > 0}
      {#each readingBooks as book}
        <a href={book.link} class="book" target="_blank">
          <h3>{book.title}</h3>
          <small>{book.author.$t}</small>
        </a>
      {/each}
    {:else}
      <Loader />
    {/if}
  </div>
  <!-- Read -->
  <div>
    <p class="status read">
      <img src="/read.svg" alt="read" /> Last finished
    </p>
    {#if readBooks.length > 0}
      {#each readBooks as book}
        <a href={book.link} class="book" target="_blank">
          <h3>{book.title}</h3>
          <small>{book.author.$t}</small>
        </a>
      {/each}
    {:else}
      <Loader />
    {/if}
  </div>
</div>

<style lang="scss">
  p {
    margin-bottom: $base-mb;
  }

  .book {
    display: block;
    margin-bottom: $base-mb;
  }

  .status {
    width: fit-content;
    padding: 0.25rem 0.5rem;
    @include flex(row, center, center);
    font-size: 0.875rem;
    gap: 0.25rem;
    border-radius: 0.25rem;

    &.reading {
      color: $reading-text;
      background-color: $reading-background;
    }

    &.read {
      color: $read-text;
      background-color: $read-background;
    }
  }
</style>
