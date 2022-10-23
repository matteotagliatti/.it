<script>
  import SpotifyElement from "./SpotifyElement.svelte";
  import Loader from "./Loader.svelte";

  import { onMount } from "svelte";
  import axios from "axios";

  const client_id = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const client_secret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;
  const refresh_token = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN;
  const redirect_uri = "http://localhost:5173/";
  const token_endpoint = `https://accounts.spotify.com/api/token`;
  const top_tracks_endpoint = `https://api.spotify.com/v1/me/top/tracks`;

  let songs;
  let spotify;

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
    songs = data.data.items;
    // add songs.name, songs.artists.name, songs.album.images[0].url to spotify for 12 songs
    spotify = songs.map((song) => {
      return {
        title: song.name,
        artist: song.artists[0].name,
        img: song.album.images[1].url,
        link: song.external_urls.spotify,
      };
    });
    // only 12 items in spotify
    spotify = spotify.splice(0, 12);
  });
</script>

<div class="spotify">
  {#if spotify}
    <div class="container">
      <h2>Music</h2>
      <div class="grid">
        {#each spotify as song}
          <SpotifyElement {...song} />
        {/each}
      </div>
    </div>
  {:else}
    <Loader />
  {/if}
</div>

<style lang="scss">
  .spotify {
    background-color: #f8f9fa;
    padding: 3rem 2rem;
    margin-bottom: 6rem;

    .container {
      max-width: 80rem;
    }
  }

  .grid {
    @include grid(4);
    grid-template-rows: repeat(1, minmax(0, 1fr));
    gap: 2rem;
  }

  @include tablet {
    .spotify {
      padding: 3rem 0rem;
    }

    .grid {
      @include grid(3);
    }
  }

  @include mobile {
    .spotify {
      margin-bottom: 3rem;
    }

    .grid {
      @include grid(2);
      gap: 1rem;
    }
  }
</style>
