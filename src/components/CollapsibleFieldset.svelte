<script>
  export let legend = "Section"
  let open = true

  function toggleCollapse() {
    open = !open
  }
</script>

<fieldset class="collapsible">
  <legend class="no-select" on:click={() => toggleCollapse()}
    >{legend}&emsp;{@html open ? "&minus;" : "&plus;"}&emsp;</legend
  >
  {#if open}
    <span>
      <slot />
    </span>
  {/if}
</fieldset>

<style>
  fieldset {
    grid-column: span 2;
    position: relative;
    min-height: 5rem;
  }

  legend {
    font-size: 80%;
    font-weight: 700;
  }

  .collapsible legend {
    cursor: pointer;
  }
</style>
