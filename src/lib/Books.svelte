<script>
  const nonfiction = [
    {
      title: "The Warmth of Other Suns",
      author: "Isabel Wilkerson",
      link: "https://www.goodreads.com/book/show/8171378-the-warmth-of-other-suns",
    },
    {
      title: "Questa è l'America",
      author: "Francesco Costa",
      link: "https://www.goodreads.com/book/show/49402100-questa-l-america",
    },
    {
      title: "Grand Central Winter: Stories from the Street",
      author: "Lee Stringer",
      link: "https://www.goodreads.com/book/show/63651.Grand_Central_Winter",
    },
  ];

  const fiction = [
    {
      title: "East of Eden",
      author: "John Steinbeck",
      link: "https://www.goodreads.com/book/show/4406.East_of_Eden",
    },
    {
      title: "Brothers",
      author: "Yu Hua",
      link: "https://www.goodreads.com/book/show/3920295-brothers",
    },
  ];
</script>

<div>
  <p>Looking for a new book to read? Check out some of my favorites.</p>
  <!-- Novels -->
  <div>
    <p class="status nonfiction">Non-fiction</p>
    {#each nonfiction as { title, author, link }}
      <a href={link} class="book" target="_blank">
        <h3>{title}</h3>
        <small>{author}</small>
      </a>
    {/each}
  </div>
  <!-- Read -->
  <div>
    <p class="status fiction">Fiction</p>
    {#each fiction as { title, author, link }}
      <a href={link} class="book" target="_blank">
        <h3>{title}</h3>
        <small>{author}</small>
      </a>
    {/each}
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

    &.nonfiction {
      color: $reading-text;
      background-color: $reading-background;
    }

    &.fiction {
      color: $read-text;
      background-color: $read-background;
    }
  }
</style>
