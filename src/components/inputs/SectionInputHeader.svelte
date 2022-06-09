<script>
  import {
    mailTitle,
    landingpage,
    heroImgSrc,
    heroImgAlt,
  } from "../../stores/newsletter"
  import InputText from "./InputText.svelte"
  import InputUrl from "./InputUrl.svelte"
  import InputFieldset from "./InputFieldset.svelte"
  import InputGroupImage from "./InputGroupImage.svelte"
</script>

<InputFieldset legend="Header">
  <InputText label="Mail Title" bind:value={$mailTitle} />
  <InputUrl label="Landingpage" bind:value={$landingpage} />
  <InputGroupImage label="Hero Image" bind:value={$heroImgSrc} />
  <InputText label="Hero Image Alt Text" bind:value={$heroImgAlt} />
</InputFieldset>
