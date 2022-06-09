<script>
  export let label = ""
  export let product = false
  export let value = ""
</script>

<div class="input-group">
  <label for="image">{product ? "Product " : `${label} `}Image Url</label>
  <div class="image-and-preview">
    <input
      class="url-input"
      type="url"
      id="image"
      bind:value
      on:focus={(e) => e.target.select()}
    />
    <div class="product-img-preview" style:background-image="url({value})" />
  </div>
</div>

<style>
  .image-and-preview {
    display: grid;
    grid-template-columns: auto 10%;
    gap: 1em;
  }

  .url-input {
    height: 2rem;
    place-self: center;
  }

  .product-img-preview {
    aspect-ratio: 1;
    height: 5rem;
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
