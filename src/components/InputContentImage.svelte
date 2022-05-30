<script>
  import BaseInputItem from "./BaseInputItem.svelte"
  import BaseInputField from "./BaseInputField.svelte"

  export let item
</script>

<BaseInputItem id={item.id} on:delete>
  <svelte:fragment slot="title"><b>Bild</b></svelte:fragment>
  <svelte:fragment slot="content">
    <BaseInputField
      type="imgUrl"
      label="Image Url"
      bind:value={item.imageUrl}
    />
    <BaseInputField label="Image Alt Text" bind:value={item.imageAltText} />
    <BaseInputField
      type="url"
      label="Image Link to"
      bind:value={item.imageLinkTo}
    />
  </svelte:fragment>
</BaseInputItem>
