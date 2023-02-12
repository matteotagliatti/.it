<script>
  const movies = [
    {
      title: "Once Upon a Time in America",
      img: "https://a.ltrbxd.com/resized/film-poster/5/1/7/4/8/51748-once-upon-a-time-in-america-0-230-0-345-crop.jpg",
      link: "https://www.imdb.com/title/tt0087843/",
    },
    {
      title: "Moonlight",
      img: "https://a.ltrbxd.com/resized/sm/upload/90/gn/c7/9k/qAwFbszz0kRyTuXmMeKQZCX3Q2O-0-230-0-345-crop.jpg",
      link: "https://www.imdb.com/title/tt4975722/",
    },
    {
      title: "Mad Max: Fury Road",
      img: "https://a.ltrbxd.com/resized/film-poster/6/2/7/8/0/62780-mad-max-fury-road-0-460-0-690-crop.jpg",
      link: "https://www.imdb.com/title/tt1392190/",
    },
    {
      title: "There Will Be Blood",
      img: "https://a.ltrbxd.com/resized/sm/upload/jg/cd/7y/f5/there%20will%20be%20blood-0-230-0-345-crop.jpg",
      link: "https://www.imdb.com/title/tt0469494/",
    },
    {
      title: "Raging Bull",
      img: "https://a.ltrbxd.com/resized/film-poster/5/0/9/5/6/50956-raging-bull-0-230-0-345-crop.jpg",
      link: "https://www.imdb.com/title/tt0081398/",
    },
    {
      title: "The Sopranos",
      img: "https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UY562_CR8,0,380,562_.jpg",
      link: "https://www.imdb.com/title/tt0141842/",
    },
    {
      title: "The Wire",
      img: "https://m.media-amazon.com/images/M/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_QL75_UX380_CR0,4,380,562_.jpg",
      link: "https://www.imdb.com/title/tt0306414/",
    },
    {
      title: "Euphoria",
      img: "https://m.media-amazon.com/images/M/MV5BMDMzZDkyNzEtYTY5Ni00NzlhLWI4MzUtY2UzNjNmMjI1YzIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
      link: "https://www.imdb.com/title/tt8772296/",
    },
  ];
</script>

<section class="flex flex-col gap-4 sm:basis-3/5">
  <p>Film or tv serie to watch? Here's some of what I liked the most.</p>
  <div class="grid grid-cols-4 gap-2">
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
  </div>
</section>
