<script>
  import { createEventDispatcher } from "svelte"

  export let id = ""
  // export let first = false
  // export let last = false

  const dispatch = createEventDispatcher()

  function deleteItem() {
    dispatch("delete", {
      itemId: id,
    })
  }
</script>

<div class="wrapper">
  <!-- <div class="arrow-group">
    {#if !first}
      <span>&uparrow;</span>
    {/if}
    {#if !last}
      <span>&downarrow;</span>
    {/if}
  </div> -->
  <details class="input-item | rounded">
    <summary class="item-title | no-select">
      <slot name="title">Item Title</slot>
      <button class="delete" on:click={() => deleteItem()}>&times;</button>
    </summary>
    <slot name="content">Item Content</slot>
  </details>
</div>

<style>
  .wrapper {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }

  .arrow-group {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
  }

  .arrow-group > span {
    font-size: 60%;
    padding: 0 0.2em;
    background-color: #ccc;
    border-radius: 0.2em;
  }

  .input-item {
    margin: 0.5em 0;
    padding: 0.5em;
    border: 1px solid #ccc;
    flex: 1;
  }

  details[open] > .item-title {
    color: #ccc;
    font-style: italic;
    padding-bottom: 0.5em;
    border-bottom: 2px dotted #000;
  }

  .item-title {
    font-size: 70%;
    display: flex;
    justify-content: space-between;
  }

  .delete {
    color: darkred;
    font-size: 150%;
    font-weight: 800;
    font-style: normal;
    line-height: 0;
    background: none;
  }
</style>
