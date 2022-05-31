<script>
  import BaseInputItem from "./BaseInputItem.svelte"
  import BaseInputField from "./BaseInputField.svelte"

  export let item
</script>

<BaseInputItem id={item.id} on:delete>
  <svelte:fragment slot="title"
    ><span><b>Textblock&emsp;</b>{item.headline}</span></svelte:fragment
  >
  <svelte:fragment slot="content">
    <BaseInputField
      classes="bold-text"
      label="Headline"
      bind:value={item.headline}
    />
    <textarea
      rows="5"
      bind:value={item.text}
      on:focus={(e) => e.target.select()}
    />
  </svelte:fragment>
</BaseInputItem>
