<script>
  import BaseInputItem from "../BaseInputItem.svelte"
  import BaseInputField from "../BaseInputField.svelte"
  import InputGroupImage from "./InputGroupImage.svelte"

  export let item
</script>

<BaseInputItem id={item.id} on:delete>
  <svelte:fragment slot="title"
    ><span
      ><b>Bild&emsp;</b>{@html item.imageAltText.length
        ? item.imageAltText
        : "<span style='color: tomato;'>kein Alt-text</span>"}</span
    ></svelte:fragment
  >
  <svelte:fragment slot="content">
    <InputGroupImage imgUrl={item.imageUrl} />
    <BaseInputField label="Image Alt Text" bind:value={item.imageAltText} />
    <BaseInputField
      type="url"
      label="Image Link to"
      bind:value={item.imageLinkTo}
    />
  </svelte:fragment>
</BaseInputItem>
