<script>
  const books = [
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
    {
      title: "The Warmth of Other Suns",
      author: "Isabel Wilkerson",
      link: "https://www.goodreads.com/book/show/8171378-the-warmth-of-other-suns",
    },
    {
      title: "Grand Central Winter: Stories from the Street",
      author: "Lee Stringer",
      link: "https://www.goodreads.com/book/show/63651.Grand_Central_Winter",
    },
    {
      title: "KLF: Chaos Magic Music Money",
      author: "John Higgs",
      link: "https://www.goodreads.com/book/show/16166062-klf",
    },
    {
      title: "The Stories of Breece D'J Pancake",
      author: "Breece D'J Pancake",
      link: "https://www.goodreads.com/book/show/52762.The_Stories_of_Breece_D_J_Pancake",
    },
  ];
</script>

<section class="flex flex-col gap-4 sm:basis-2/5">
  <p>Looking for a book to read? Check out some of my favorites below.</p>
  <div class="flex flex-col gap-4">
    {#each books as book}
      <a
        href={book.link}
        target="_blank"
        class="group"
        rel="noopener noreferrer"
      >
        <h2 class="group-hover:underline font-semibold">{book.title}</h2>
        <p class="text-slate-500 text-sm">
          {book.author}
        </p>
      </a>
    {/each}
  </div>
</section>
