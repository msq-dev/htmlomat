<script>
  import BaseInputGroup from "../BaseInputGroup.svelte"

  export let label = ""
  export let value = ""
</script>

<BaseInputGroup {label}>
  <input type="url" bind:value on:focus={(e) => e.target.select()} />
</BaseInputGroup>
