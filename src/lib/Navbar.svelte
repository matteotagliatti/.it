<script>
  const socials = [
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

<section class="fixed bottom-8 flex justify-center z-10">
  <nav
    class="flex items-center p-4 gap-3 sm:gap-4 rounded-lg w-fit shadow-md z-10 bg-gray-200 bg-opacity-90 backdrop-filter backdrop-blur-sm"
  >
    <a href="mailto:matteotagliatti@gmail.com">
      <img class="w-6" src="/email.svg" alt="Email" />
    </a>
    <div class="w-[1px] h-[20px] bg-zinc-400" />
    {#each socials as link}
      <a
        aria-label={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img class="w-6" src={link.icon} alt={link.name} />
      </a>
    {/each}
  </nav>
</section>
