<script>
  const links = [
    {
      name: "GitHub",
      icon: "/github.svg",
      url: "https://github.com/matteotagliatti",
    },
    {
      name: "LinkedIn",
      icon: "/linkedin.svg",
      url: "https://www.linkedin.com/in/matteotagliatti/",
    },
    {
      name: "LinkedIn",
      icon: "/instagram.svg",
      url: "https://www.instagram.com/matteotagliatti/",
    },
  ];
</script>

<nav>
  <a href="mailto:matteotagliatti@gmail.com">
    <img src="email.svg" alt="Email" />
  </a>
  <div class="line" />
  {#each links as { name, icon, url }}
    <a href={url} target="_blank">
      <img src={icon} alt={name} />
    </a>
  {/each}
</nav>

<style lang="scss">
  nav {
    width: fit-content;
    position: fixed;
    left: 50%;
    transform: translate(-50%, 0);
    bottom: 2rem;
    background-color: #e7e9ed;
    @include flex(row, center, center);
    gap: 1rem;
    padding: 1rem;
    border-radius: 0.5rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 12px;
    transition: box-shadow 0.5s;
    z-index: 2;
    &:hover {
      box-shadow: rgba(149, 157, 165, 0.5) 0px 8px 12px;
    }

    a {
      width: 20px;
      height: 20px;
    }

    img {
      width: 100%;
    }

    .line {
      height: 20px;
      border: 1px solid #a1a1aa;
    }
  }

  @include mobile {
    nav {
      bottom: 1rem;
    }
  }
</style>
