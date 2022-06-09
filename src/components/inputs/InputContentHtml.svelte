<script>
  import BaseInputItem from "../BaseInputItem.svelte"

  export let item
</script>

<BaseInputItem id={item.id} on:delete>
  <svelte:fragment slot="title"><span><b>HTML&emsp;</b></span></svelte:fragment>
  <svelte:fragment slot="content">
    <textarea
      class="html"
      rows="7"
      bind:value={item.content}
      on:focus={(e) => e.target.setSelectionRange(4, 4)}
    />
  </svelte:fragment>
</BaseInputItem>

<style>
  .html {
    font-family: monospace;
    font-size: 70%;
    color: #ddd;
    background-color: #222;
    width: 100%;
    font-size: 75%;
    padding: 0.5em 0.75em;
    margin-top: 0.5em;
    border: none;
    outline: none;
  }
</style>
