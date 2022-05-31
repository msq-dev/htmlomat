<script>
  import { createEventDispatcher } from "svelte"
  import { scale } from "svelte/transition"

  export let id = ""

  const dispatch = createEventDispatcher()

  function deleteItem() {
    dispatch("delete", {
      itemId: id,
    })
  }
</script>

<details class="input-item | rounded" out:scale>
  <summary class="item-title | no-select">
    <slot name="title">Item Title</slot>
    <button class="delete" on:click={() => deleteItem()}>&times;</button>
  </summary>
  <slot name="content">Item Content</slot>
</details>

<style>
  .input-item {
    margin: 0.5em 0;
    padding: 0.5em;
    border: 1px solid #ccc;
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
