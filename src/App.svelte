<script>
  import Header from "./lib/Header.svelte";
  import Works from "./lib/Works.svelte";
  import Spotify from "./lib/Spotify.svelte";
  import Books from "./lib/Books.svelte";
  import Movies from "./lib/Movies.svelte";
  import Links from "./lib/Links.svelte";
</script>

<main>
  <Header />
  <Works />
  <section class="no-mw">
    <Spotify />
  </section>
  <section class="container">
    <h2>Books & Movies</h2>
    <div class="activity">
      <Books />
      <Movies />
    </div>
  </section>
  <Links />
</main>

<style global lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: Inter, sans-serif;
    background-color: white;
    color: $text-color;
    font-weight: 450;
  }

  h1,
  h2,
  h3 {
    font-weight: 600;
  }

  h1 {
    margin-bottom: $base-mb;
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  h2 {
    margin-bottom: 1.35rem;
    font-size: 1.25rem;
    line-height: 1.75rem;

    a.link {
      display: inline !important;
      color: $text-color;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  h3,
  p {
    font-size: 1rem;
  }

  p {
    line-height: 1.5rem;

    a {
      color: blue;
      text-decoration: underline;
    }
  }

  a {
    text-decoration: none;

    h3 {
      color: $text-color;
    }

    small {
      color: $grey-color;
    }

    &:hover {
      cursor: pointer;

      h3 {
        text-decoration: underline;
      }
    }
  }

  header,
  section {
    margin: 0 auto;
  }

  header {
    max-width: 42rem;
    padding-top: 6rem;
    padding-bottom: 6rem;

    p {
      font-size: 1.125rem;
      line-height: 1.75rem;
    }

    p:first-of-type {
      margin-bottom: 0.5rem;
    }
  }

  section {
    max-width: 64rem;
  }

  .no-mw {
    max-width: unset;
  }

  .strong {
    font-weight: 600;
  }

  .container {
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 0 auto;
  }

  .activity {
    margin-bottom: 6rem;
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
    gap: 4rem;
  }

  @include mobile {
    header {
      padding-top: 3rem;
      padding-bottom: 3rem;
    }

    .activity {
      @include grid(1);
      gap: 2rem;
    }
  }
</style>
