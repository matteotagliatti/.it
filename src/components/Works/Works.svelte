<script>
  const works = [
    {
      title: "bklst",
      subtitle: "React, Supabase",
      date: 2023,
      link: "https://github.com/matteotagliatti/bklst",
    },
    {
      title: "Dilla Drums",
      subtitle: "React",
      date: 2023,
      link: "https://github.com/matteotagliatti/dilla-drums",
    },
    {
      title: "Kindle Clippings Parser",
      subtitle: "Node.js",
      date: 2023,
      link: "https://github.com/matteotagliatti/kindle-clippings-parser",
    },
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
  ];
</script>

{#each works as work}
  <a
    href={work.link}
    class="block group"
    target="_blank"
    rel="noopener noreferrer"
  >
    <h3 class="text-md font-semibold group-hover:underline leading-none">
      {work.title}
    </h3>
    <small class="text-slate-500">
      {work.subtitle} - {work.date}
    </small>
  </a>
{/each}
