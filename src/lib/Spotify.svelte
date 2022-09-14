<script>
  import SpotifyElement from "./SpotifyElement.svelte";
  const spotify = [
    {
      title: "On repeat",
      text: "Songs on repeat",
      link: "https://open.spotify.com/playlist/37i9dQZF1EpvetUckj3tCR?si=a301af74651841ff",
      img: "https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat2_LARGE-it.jpg",
    },
    {
      title: "Dance",
      text: "Dance stuff I like",
      link: "https://open.spotify.com/playlist/5sJKFpmtThNDwxUPQfgMbY?si=b7b2d14c5b074f90",
      img: "https://mosaic.scdn.co/300/ab67616d0000b273210e19d835bb0af6620256cfab67616d0000b2736005923c24a82bdd11ed8344ab67616d0000b273633c6eebb369c82c73c101b9ab67616d0000b27374b0013d9cefeb665d6e65e7",
    },
    {
      title: "raphaf",
      text: "Rap I love",
      link: "https://open.spotify.com/playlist/53VdDxIChQmnFy3oImPfb4?si=fe9c1fa13497465c",
      img: "https://mosaic.scdn.co/640/ab67616d0000b27326279b9515b543980f285a64ab67616d0000b273a29bd588f4caf84bd4cd6f8bab67616d0000b273b4b2f31921c8665026be4fd4ab67616d0000b273f833fe7b50fa9b2d9427e2c0",
    },
    {
      title: "Workout",
      text: "Workout playlist",
      link: "https://open.spotify.com/playlist/2YvLAkZodn3sKsp3k3v1lP?si=374fd00c8068433d",
      img: "https://mosaic.scdn.co/300/ab67616d0000b2731f542026a0d2d0a2d3e5b2eeab67616d0000b2739395c17791d868238377273aab67616d0000b273e27dfef438562f2ecb98a642ab67616d0000b273e88a1b90870837f8f376457a",
    },
  ];
</script>

<div class="spotify">
  <div class="container">
    <h2>Music</h2>
    <div class="grid">
      {#each spotify as playlist}
        <SpotifyElement {...playlist} />
      {/each}
    </div>
  </div>
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
