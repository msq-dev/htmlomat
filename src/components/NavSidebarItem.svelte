<script>
  import { currentInputSection } from "../stores/editor"

  export let link = ""
  export let name = ""

  $: active = $currentInputSection === link

  function setCurrentInputSection(link) {
    $currentInputSection = link
  }
</script>

<li class="nav-item" class:active on:click={() => setCurrentInputSection(link)}>
  {name}
</li>

<style>
  .nav-item {
    cursor: pointer;
  }

  .active {
    color: #4597ff;
  }
</style>
