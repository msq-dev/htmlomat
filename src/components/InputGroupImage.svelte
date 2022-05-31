<script>
  export let imgUrl = ""
  export let product = false

  function handleFocus(e) {
    e.target.select()
  }
</script>

<div class="input-group">
  <label for="productimage">{product ? "Product " : ""}Image Url</label>
  <div class="image-and-preview">
    <input
      type="url"
      id="productimage"
      bind:value={imgUrl}
      on:focus={(e) => handleFocus(e)}
    />
    <div class="product-img-preview" style:background-image="url({imgUrl})" />
  </div>
</div>

<style>
  .image-and-preview {
    display: grid;
    grid-template-columns: auto 10%;
    gap: 1em;
  }

  .product-img-preview {
    aspect-ratio: 1;
    height: 215%;
    width: fit-content;
    place-self: center;
    border: 1px solid #ccc;
    border-radius: 0.5em;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #fff;
    justify-self: end;
  }
</style>
