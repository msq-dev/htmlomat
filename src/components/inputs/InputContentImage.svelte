<script>
  import BaseInputItem from "../BaseInputItem.svelte"
  import InputText from "./InputText.svelte"
  import InputUrl from "./InputUrl.svelte"
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
    <InputGroupImage bind:value={item.imageUrl} />
    <InputText label="Image Alt Text" bind:value={item.imageAltText} />
    <InputUrl label="Image Link to" bind:value={item.imageLinkTo} />
  </svelte:fragment>
</BaseInputItem>
