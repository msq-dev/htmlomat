<script>
  import BaseInputGroup from "../BaseInputGroup.svelte"

  export let label = ""
  export let value = ""
  export let class_ = ""
</script>

<BaseInputGroup {label}>
  <input
    class={class_}
    type="text"
    placeholder={label}
    bind:value
    on:focus={(e) => e.target.select()}
  />
</BaseInputGroup>

<style>
  input::placeholder {
    color: transparent;
  }

  .input-alt-text:placeholder-shown {
    border-color: tomato;
  }

  .bold {
    font-weight: 700;
  }
</style>
