<script>
  import { introHeadline, introParagraphs } from "../stores/newsletter"
  import BaseInputField from "./BaseInputField.svelte"
  import BaseButton from "./BaseButton.svelte"
  import InputFieldset from "./inputs/InputFieldset.svelte"
  import InputGroupTextarea from "./inputs/InputGroupTextarea.svelte"

  function addIntroParagraph() {
    $introParagraphs = [...$introParagraphs, { text: "", align: "center" }]
  }
</script>

<InputFieldset legend="Intro">
  <BaseButton on:btnClick={() => addIntroParagraph()} classes="btn-add single"
    >+ Absatz</BaseButton
  >

  <BaseInputField
    classes="bold-text"
    label="Intro Headline"
    bind:value={$introHeadline}
  />
  {#each $introParagraphs as p}
    <InputGroupTextarea bind:value={p} />
  {/each}
</InputFieldset>
