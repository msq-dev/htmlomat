<script>
  import {
    mailTitle,
    offerPage,
    heroImgSrc,
    heroImgAlt,
  } from "../stores/newsletter"
  import BaseInputField from "./BaseInputField.svelte"
  import InputFieldset from "./inputs/InputFieldset.svelte"
  import InputGroupImage from "./inputs/InputGroupImage.svelte"
</script>

<InputFieldset legend="Header">
  <BaseInputField label="Mail Title" bind:value={$mailTitle} />
  <BaseInputField type="url" label="Offer Page" bind:value={$offerPage} />
  <InputGroupImage imgUrl={$heroImgSrc} label="Hero" />
  <BaseInputField label="Hero Image Alt Text" bind:value={$heroImgAlt} />
</InputFieldset>
