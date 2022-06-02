<script>
  import { createEventDispatcher } from "svelte"

  export let classes = ""

  const dispatch = createEventDispatcher()

  function emitClick() {
    dispatch("btnClick")
  }
</script>

<span class="btn {classes} | rounded" on:click={() => emitClick()}>
  <slot />
</span>

<style>
  .btn {
    cursor: pointer;
    padding: 0.35em 0.75em;
    width: fit-content;
    font-size: 70%;
  }

  .btn-nav {
    color: #fff;
    background-color: #4597ff;
  }

  .btn-add {
    background-color: hsl(0, 0%, 91%);
    color: #000;
  }

  .btn-add.single {
    position: absolute;
    top: 0;
    right: 1em;
  }

  .btn-icon {
    background-color: hsl(0, 0%, 91%);
    color: #000;
    padding: 0.2em 0.5em;
  }

  .btn-icon.active {
    background-color: #ccc;
  }

  .first-btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 1px solid #ccc;
  }

  .middle-btn {
    border-radius: 0;
  }

  .last-btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 1px solid #ccc;
  }
</style>
