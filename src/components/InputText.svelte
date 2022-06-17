<script>
  export let id = ""
  export let text = ""
  export let fontSize = 14
  export let paddingTop = 0
  export let paddingBottom = 0
</script>

<label for={id + "text"}>Text</label>
<input type="text" id={id + "text"} bind:value={text} />
<label for={id + "fs"}>Font Size</label>
<input type="number" id={id + "fs"} bind:value={fontSize} />
<label for={id + "pt"}>Padding Top</label>
<input type="number" id={id + "pt"} bind:value={paddingTop} />
<label for={id + "pb"}>Padding Bottom</label>
<input type="number" id={id + "pb"} bind:value={paddingBottom} />

<style>
  label {
    display: block;
  }

  input[type="text"] {
    width: 100%;
  }
</style>
