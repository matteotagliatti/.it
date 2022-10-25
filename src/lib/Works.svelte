<script>
  const infos = [
    {
      title: "HTML, CSS",
      tech: "SCSS, Tailwind",
    },
    {
      title: "JavaScript",
      tech: "Vue.js, Svelte.js, Node.js, Express.js",
    },
    {
      title: "PHP & DB",
      tech: "Laravel, MySQL, NoSQL",
    },
    {
      title: "Static Site Generators",
      tech: "Astro",
    },
    {
      title: "Design",
      tech: "Figma",
    },
  ];

  const works = [
    {
      title: "DeliveBoo",
      tech: "Laravel, Vue.js",
      date: "2022",
      link: "https://github.com/matteotagliatti/deliveboo",
    },
    {
      title: "Arcade Games",
      tech: "JavaScript, Jekyll",
      date: "2022",
      link: "https://github.com/matteotagliatti/arcade-games",
    },
    {
      title: "matteotagliatti.it (Old)",
      tech: "JQuery, Jekyll",
      date: "2021",
      link: "https://github.com/matteotagliatti/matteotagliatti.it-v1",
    },
    {
      title: "Studio Acqua",
      tech: "WordPress",
      date: "2021",
      link: "https://studioacquatortona.it/",
    },
    {
      title: "Centro Sposi Paradiso",
      tech: "WordPress",
      date: "2020",
      link: "https://centrosposiparadiso.it/",
    },
  ];
</script>

<section>
  <div class="container works">
    <div class="dotted">
      <h2>Favorite tech</h2>
      <div>
        {#each infos as { title, tech }}
          <div class="info">
            <h3>{title}</h3>
            <small>{tech}</small>
          </div>
        {/each}
      </div>
    </div>
    <div>
      <h2>Works</h2>
      <div>
        {#each works as { title, tech, link, date }}
          <a href={link} target="_blank">
            <h3>{title}</h3>
            <small>{tech} - {date}</small>
          </a>
        {/each}
      </div>
    </div>
  </div>
</section>

<style lang="scss">
  .works {
    margin-bottom: 6rem;
    @include grid(2);
    gap: 4rem;

    & > div {
      padding: 2rem;

      a,
      div.info {
        display: block;
        margin-bottom: $base-mb;
      }

      div.info {
        h3 {
          font-weight: 450;
        }
      }
    }

    .dotted {
      border: 1px dashed var(--text-color);
      border-radius: 0.75rem;
    }
  }

  @include mobile {
    .works {
      margin-bottom: 0;
      @include grid(1);
      gap: 0;
    }
  }
</style>
