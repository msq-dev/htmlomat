<script>
  import BaseInputItem from "./BaseInputItem.svelte"
  import BaseInputField from "./BaseInputField.svelte"

  export let item
</script>

<BaseInputItem id={item.id} on:delete>
  <svelte:fragment slot="title"><b>Textblock</b></svelte:fragment>
  <svelte:fragment slot="content">
    <BaseInputField label="Headline" bind:value={item.headline} />
    <textarea
      rows="5"
      bind:value={item.text}
      on:focus={(e) => e.target.select()}
    />
  </svelte:fragment>
</BaseInputItem>
