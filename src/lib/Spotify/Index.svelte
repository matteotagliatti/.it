<script>
  import axios from "axios";
  import { onMount } from "svelte";
  import Loader from "../Loader.svelte";
  import Element from "./Element.svelte";

  const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;
  const redirect_uri = "http://localhost:5173/";
  const token_endpoint = `https://accounts.spotify.com/api/token`;
  const top_tracks_endpoint = `https://api.spotify.com/v1/me/top/tracks`;

  let songs;

  onMount(async () => {
    const access_token = await axios.post(
      token_endpoint,
      {
        grant_type: "refresh_token",
        refresh_token,
        redirect_uri,
        client_id,
        client_secret,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    const data = await axios.get(top_tracks_endpoint, {
      headers: {
        Authorization: `Bearer ${access_token.data.access_token}`,
      },
    });
    const items = data.data.items;
    // add songs.name, songs.artists.name, songs.album.images[0].url to spotify for 12 songs
    songs = items.map((song) => {
      return {
        title: song.name,
        artist: song.artists[0].name,
        img: song.album.images[1].url,
        link: song.external_urls.spotify,
      };
    });
    // only 12 items in spotify
    songs = songs.splice(0, 12);
    console.log(songs);
  });
</script>

<section class="w-full bg-gradient-to-t from-zinc-100 to-gray-50">
  <div class="mx-auto space-y-4 max-w-7xl py-4 sm:py-12 sm:px-8">
    <a href="https://open.spotify.com/user/matteotagliatti" target="_blank">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 4 1"
        class="h-[24px]"
        ><path
          fill="#1ED760"
          d="M.5 0a.5.5 0 100 1 .5.5 0 000-1zm.23.721a.031.031 0 01-.044.01C.57.66.421.644.247.683a.031.031 0 01-.014-.06C.423.579.587.598.72.678c.015.01.02.028.01.043zM.79.585a.039.039 0 01-.053.013A.656.656 0 00.239.54.039.039 0 01.216.465a.73.73 0 01.562.066.039.039 0 01.013.054zM.797.443C.635.348.369.34.215.385a.047.047 0 11-.027-.09C.364.243.658.254.843.364a.047.047 0 11-.047.08zm.564.019C1.274.44 1.26.427 1.26.396c0-.029.027-.048.067-.048.039 0 .077.015.118.045l.004.001a.006.006 0 00.004-.002l.042-.06a.006.006 0 00-.001-.007.255.255 0 00-.166-.058c-.093 0-.158.056-.158.136 0 .086.056.116.153.14.083.019.097.035.097.063 0 .032-.029.052-.074.052A.199.199 0 011.208.6a.006.006 0 00-.005-.002L1.2.601l-.048.057a.006.006 0 000 .007c.054.048.12.073.191.073.1 0 .165-.054.165-.14 0-.071-.042-.11-.147-.136zm.376-.086a.136.136 0 00-.11.053v-.04a.006.006 0 00-.005-.005h-.077a.006.006 0 00-.006.005v.44c0 .003.003.005.006.005h.077A.006.006 0 001.627.83V.69a.14.14 0 00.109.05c.08 0 .163-.062.163-.181 0-.12-.082-.182-.163-.182zm.073.182c0 .06-.038.103-.091.103S1.625.616 1.625.558c0-.059.04-.103.093-.103.052 0 .09.043.09.103zm.3-.182a.182.182 0 00-.186.183c0 .101.08.18.184.18.105 0 .187-.08.187-.181a.181.181 0 00-.186-.182zm0 .285c-.056 0-.098-.044-.098-.103 0-.06.04-.103.096-.103s.098.045.098.104c0 .06-.04.102-.097.102zm.407-.277h-.085V.297A.006.006 0 002.425.29h-.077a.006.006 0 00-.006.006v.087h-.037A.006.006 0 002.3.389v.067c0 .003.002.005.005.005h.037v.172c0 .07.035.105.103.105A.14.14 0 002.517.72.006.006 0 002.52.715V.652a.006.006 0 00-.002-.005.005.005 0 00-.006 0 .098.098 0 01-.045.01c-.025 0-.036-.01-.036-.036v-.16h.085a.006.006 0 00.006-.005V.389a.005.005 0 00-.006-.005zm.296 0v-.01c0-.032.012-.046.04-.046a.13.13 0 01.043.008L2.9.335A.006.006 0 002.902.33V.265A.006.006 0 002.898.26a.212.212 0 00-.064-.01c-.071 0-.109.04-.109.117v.016h-.037a.006.006 0 00-.006.006v.067c0 .003.003.005.006.005h.037v.265c0 .004.003.006.006.006h.077a.006.006 0 00.006-.006V.461h.072l.11.265c-.012.028-.024.034-.041.034a.089.089 0 01-.043-.012h-.004a.006.006 0 00-.004.002l-.026.058a.006.006 0 00.002.007.163.163 0 00.083.021c.057 0 .089-.026.116-.098l.134-.346V.386a.006.006 0 00-.005-.002h-.08a.006.006 0 00-.006.004L3.04.623 2.95.388a.006.006 0 00-.006-.004h-.132zm-.171 0h-.078a.006.006 0 00-.005.005v.337c0 .004.002.006.005.006h.078a.006.006 0 00.005-.006V.39a.006.006 0 00-.005-.005zM2.602.23a.055.055 0 100 .11.055.055 0 000-.11zm.678.262a.054.054 0 01-.055-.054c0-.03.024-.055.055-.055a.055.055 0 010 .109zm0-.104a.049.049 0 00-.05.05c0 .027.022.048.05.048a.049.049 0 00.049-.049.048.048 0 00-.05-.049zm.012.055l.015.021h-.013L3.28.444h-.01v.02h-.011V.407h.025c.013 0 .022.007.022.018 0 .01-.005.016-.013.018zm-.01-.026H3.27v.018h.014c.007 0 .011-.003.011-.009 0-.006-.004-.009-.011-.009z"
        />
      </svg>
    </a>
    {#if songs}
      <div
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 sm:pt-4"
      >
        {#each songs as song}
          <Element {song} />
        {/each}
      </div>
    {:else}
      <Loader />
    {/if}
  </div>
</section>
