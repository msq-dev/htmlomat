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
  <label for={labelId}
    >{label}{#if info}&nbsp;<span class="info">({info})</span>{/if}</label
  >
  {#if type === "text"}
    <input
      type="text"
      id={labelId}
      class="text-input"
      bind:value
      on:focus={(e) => handleFocus(e)}
    />
  {:else if type === "url"}
    <input
      type="url"
      id={labelId}
      class="url-input"
      bind:value
      on:focus={(e) => handleFocus(e)}
    />
  {:else if type === "number"}
    <span class="input-wrapper" data-unit={unit}>
      <input
        type="number"
        id={labelId}
        class="number-input"
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
  {:else if type === "imgUrl"}
    <div class="image-and-preview">
      <input
        type="url"
        id={labelId}
        class="product-img-input"
        bind:value
        on:focus={(e) => handleFocus(e)}
      />
      <div class="product-img-preview" style:background-image="url({value})" />
    </div>
  {/if}
</div>
