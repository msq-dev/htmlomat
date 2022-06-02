<script>
  import { introParagraphs } from "../../stores/newsletter"
  import IconAlignLeft from "../icons/IconAlignLeft.svelte"
  import IconAlignCenter from "../icons/IconAlignCenter.svelte"
  import IconAlignRight from "../icons/IconAlignRight.svelte"
  import BaseButton from "../BaseButton.svelte"

  export let label = ""
  export let value = {}
  export let rows = 5

  const iconSize = 20
  const iconStroke = 1

  $: labelId = label.replaceAll(" ", "").toLowerCase()

  function setAlignment(newAlign) {
    value.align = newAlign
  }

  function handleEmptyParagraph(e) {
    if (!e.target.value) {
      $introParagraphs = $introParagraphs.filter((p) => p !== "")
    }
  }
</script>

{#if label}
  <label for={labelId} class="mt-1">{label}</label>
{/if}

<div class="button-group | rounded mt-1">
  <BaseButton
    on:btnClick={() => setAlignment("left")}
    classes="btn-icon first-btn {value.align === 'left' ? 'active' : ''}"
    ><IconAlignLeft size={iconSize} stroke={iconStroke} /></BaseButton
  >
  <BaseButton
    on:btnClick={() => setAlignment("center")}
    classes="btn-icon middle-btn {value.align === 'center' ? 'active' : ''}"
    ><IconAlignCenter size={iconSize} stroke={iconStroke} /></BaseButton
  >
  <BaseButton
    on:btnClick={() => setAlignment("right")}
    classes="btn-icon last-btn {value.align === 'right' ? 'active' : ''}"
    ><IconAlignRight size={iconSize} stroke={iconStroke} /></BaseButton
  >
</div>

<textarea
  id={labelId || ""}
  style:text-align={value.align}
  {rows}
  bind:value={value.text}
  on:focus={(e) => e.target.select()}
  on:blur={(e) => handleEmptyParagraph(e)}
/>

<style>
  textarea {
    width: 100%;
    font-size: 75%;
    padding: 0.5em 0.75em;
    margin-top: 0.5em;
    border: none;
    outline: none;
    border: 1px dotted #666;
  }

  .button-group {
    --border: 1px solid #ccc;
    --br-size: 0.2rem;

    display: flex;
    border: var(--border);
    width: fit-content;
  }
</style>
