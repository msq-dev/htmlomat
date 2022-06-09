<script>
  import BaseInputGroup from "../BaseInputGroup.svelte"

  export let label = ""
  export let value = ""
  export let unit = ""
  export let class_ = ""
</script>

<BaseInputGroup {label} classes={class_}>
  <span class="input-wrapper" data-unit={unit}>
    <input
      class={class_}
      type="number"
      bind:value
      on:focus={(e) => e.target.select()}
    />
  </span>
</BaseInputGroup>

<style>
  .bold {
    font-weight: 700;
  }
</style>
