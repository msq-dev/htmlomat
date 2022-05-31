<script>
  import { createEventDispatcher } from "svelte"

  export let label = ""
  export let value = ""
  export let type = "text"
  export let unit = ""
  export let info = ""
  export let classes = ""

  $: labelId = label.replaceAll(" ", "").toLowerCase()

  const dispatch = createEventDispatcher()

  function gimmePreview() {
    dispatch("hoverStart")
  }

  function getridPreview() {
    dispatch("hoverEnd")
  }

  function handleFocus(e) {
    e.target.select()
  }
</script>

<div class="input-group {classes}">
  <label for={labelId} class="no-select"
    >{label}{#if info}&nbsp;<span class="info">({info})</span>{/if}</label
  >
  {#if type === "text"}
    <input
      type="text"
      id={labelId}
      placeholder={label}
      bind:value
      on:focus={(e) => handleFocus(e)}
    />
  {:else if type === "url"}
    <input
      type="url"
      id={labelId}
      bind:value
      on:focus={(e) => handleFocus(e)}
    />
  {:else if type === "number"}
    <span class="input-wrapper" data-unit={unit}>
      <input
        type="number"
        id={labelId}
        bind:value
        on:focus={(e) => handleFocus(e)}
      />
    </span>
  {:else if type === "heroImgUrl"}
    <input
      type="url"
      id={labelId}
      bind:value
      on:focus={(e) => handleFocus(e)}
      on:mouseenter={() => gimmePreview()}
      on:mouseleave={() => getridPreview()}
    />
  {/if}
</div>

<style>
  input::placeholder {
    color: transparent;
  }

  .input-group.bold-text input {
    font-weight: 700;
  }

  .input-group.input-alt-text input:placeholder-shown {
    border-color: tomato;
  }
</style>
