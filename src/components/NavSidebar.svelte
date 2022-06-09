<script>
  import NavSidebarItem from "./NavSidebarItem.svelte"

  const navItems = [
    { name: "Header", link: "header" },
    { name: "Intro", link: "intro" },
    { name: "Main Content", link: "mainContent" },
    { name: "Angebote", link: "offers" },
  ]
</script>

<div class="sidebar">
  <ol>
    {#each navItems as nav}
      <NavSidebarItem link={nav.link} name={nav.name} />
    {/each}
  </ol>
</div>

<style>
  .sidebar > ol {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
</style>
