<script>
  export let song;
</script>

<a
  class="w-full flex items-start"
  href={song.link}
  target="_blank"
  rel="noreferrer noopener"
>
  <div class="overflow-hidden shadow-lg basis-16 sm:basis-20 shrink-0">
    <img class="rounded w-full" src={song.img} alt={song.title} />
  </div>
  <div class="p-2 space-y-0.5">
    <h3
      class="text-sm font-semibold sm:text-base leading-4 sm:leading-5 line-clamp-2"
    >
      {song.title}
    </h3>
    <p class="text-xs line-clamp-1">{song.artist}</p>
  </div>
</a>
