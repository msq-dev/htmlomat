<script>
  import BaseInputItem from "../BaseInputItem.svelte"
  import InputText from "./InputText.svelte"
  import InputGroupTextarea from "./InputGroupTextarea.svelte"

  export let item
</script>

<BaseInputItem id={item.id} on:delete>
  <svelte:fragment slot="title"
    ><span><b>Textblock&emsp;</b>{item.headline}</span></svelte:fragment
  >
  <svelte:fragment slot="content">
    <InputText label="Headline" class_="bold" bind:value={item.headline} />
    <InputGroupTextarea bind:value={item.body} />
  </svelte:fragment>
</BaseInputItem>
