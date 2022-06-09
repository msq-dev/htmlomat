<script>
  export let label = ""
  export let info = ""
  export let classes = ""
</script>

<div class="input-group {classes}">
  <label for="" class="no-select"
    >{label}{#if info}&nbsp;<span class="info">({info})</span>{/if}</label
  >
  <slot />
</div>

<style>
  .transparent {
    opacity: 0;
  }
</style>
