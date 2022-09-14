<script>
  const movies = [
    {
      title: "Moonlight",
      img: "https://a.ltrbxd.com/resized/sm/upload/90/gn/c7/9k/qAwFbszz0kRyTuXmMeKQZCX3Q2O-0-230-0-345-crop.jpg",
      link: "https://www.imdb.com/title/tt4975722/",
    },
    {
      title: "Goodfellas",
      img: "https://a.ltrbxd.com/resized/film-poster/5/1/3/8/3/51383-goodfellas-0-230-0-345-crop.jpg",
      link: "https://www.imdb.com/title/tt0099685/",
    },
    {
      title: "Once Upon a Time in America",
      img: "https://a.ltrbxd.com/resized/film-poster/5/1/7/4/8/51748-once-upon-a-time-in-america-0-230-0-345-crop.jpg",
      link: "https://www.imdb.com/title/tt0087843/",
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
      img: "https://pad.mymovies.it/filmclub/2019/05/191/locandina.jpg",
      link: "https://www.imdb.com/title/tt8772296/",
    },
  ];
</script>

<div>
  <p>Film or tv serie to watch? Here's some of the ones I like the most.</p>
  <div class="movies">
    {#each movies as { title, img, link }}
      <a href={link} target="_blank">
        <img src={img} alt={title} />
      </a>
    {/each}
  </div>
</div>

<style lang="scss">
  p {
    margin-bottom: $base-mb;
  }

  .movies {
    @include grid(4);
    grid-template-rows: repeat(2, minmax(0, 1fr));
    gap: 0.5rem;

    img {
      width: 100%;
      height: 100%;
      border-radius: 0.3rem;
    }
  }
</style>
