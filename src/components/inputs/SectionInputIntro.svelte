<script>
  import { introHeadline, introParagraphs } from "../../stores/newsletter"
  import BaseButton from "../BaseButton.svelte"
  import InputText from "./InputText.svelte"
  import InputFieldset from "./InputFieldset.svelte"
  import InputGroupTextarea from "./InputGroupTextarea.svelte"

  function addIntroParagraph() {
    $introParagraphs = [...$introParagraphs, { text: "", align: "center" }]
  }
</script>

<InputFieldset legend="Intro">
  <BaseButton
    on:btnClick={() => addIntroParagraph()}
    classes="btn btn-add single | rounded">Absatz</BaseButton
  >
  <InputText class_="bold" label="Intro Headline" bind:value={$introHeadline} />
  {#each $introParagraphs as p}
    <InputGroupTextarea bind:value={p} isIntro />
  {/each}
</InputFieldset>
