<script>
  import { fade } from "svelte/transition"
  export let legend = "Section"
</script>

<fieldset in:fade={{ duration: 400, delay: 100 }} out:fade={{ duration: 100 }}>
  <legend class="no-select">{legend}</legend>
  <slot />
</fieldset>

<style>
  fieldset {
    position: relative;
    border: 1px solid #ccc;
  }

  legend {
    font-size: 80%;
  }
</style>
