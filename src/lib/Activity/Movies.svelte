<script>
  import Loader from "../Loader.svelte";
  import { onMount } from "svelte";
  import axios from "axios";

  const XMLtoApi = "https://rss-to-json-serverless-api.vercel.app/api?feedURL=";
  const LetterboxdRSSLink = "https://letterboxd.com/mattetgl/rss/";
  let movies;

  onMount(async () => {
    try {
      movies = await axios
        .get(XMLtoApi + LetterboxdRSSLink)
        .then((res) => res.data.items)
        .then((movies) =>
          movies.map((movie) => ({
            title: movie.title,
            // img inside description only img src
            img: movie.description.match(/src="([^"]*)"/)[1],
            link: movie.link,
          }))
        );
      if (movies.length > 8) {
        movies = movies.slice(0, 8);
      }
    } catch (error) {
      console.log(error);
    }
  });
</script>

<section class="flex flex-col gap-4 sm:basis-3/5">
  <p>
    Film or tv serie to watch? Here's the latest from my <a
      href="https://letterboxd.com/mattetgl"
      class="underline text-indigo-600"
      target="_blank">Letterboxd</a
    >.
  </p>
  <div class="grid grid-cols-4 gap-2">
    {#if movies}
      {#each movies as movie}
        <a
          href={movie.link}
          class="block overflow-hidden rounded relative w-full"
        >
          <div class="block pt-[150%]">
            <img
              src={movie.img}
              alt={movie.title}
              class="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </a>
      {/each}
    {:else}
      <Loader />
    {/if}
  </div>
</section>
