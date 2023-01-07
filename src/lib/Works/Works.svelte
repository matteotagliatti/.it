<script>
  const works = [
    {
      title: "DeliveBoo",
      subtitle: "Laravel, Vue.js",
      date: 2022,
      link: "https://github.com/matteotagliatti/deliveboo",
    },
    {
      title: "Arcade Games",
      subtitle: "JavaScript, Jekyll",
      date: 2022,
      link: "https://github.com/matteotagliatti/arcade-games",
    },
    {
      title: "matteotagliatti.it (Old)",
      subtitle: "JQuery, Jekyll",
      date: 2021,
      link: "https://github.com/matteotagliatti/matteotagliatti.it-v1",
    },
    {
      title: "Studio Acqua",
      subtitle: "WordPress",
      date: 2021,
      link: "https://studioacquatortona.it/",
    },
    {
      title: "Centro Sposi Paradiso",
      subtitle: "WordPress",
      date: 2020,
      link: "https://centrosposiparadiso.it/",
    },
  ];
</script>

{#each works as work}
  <a href={work.link} class="block group" target="_blank">
    <h3 class="text-md font-semibold group-hover:underline leading-none">
      {work.title}
    </h3>
    <small class="text-slate-500">
      {work.subtitle} - {work.date}
    </small>
  </a>
{/each}
