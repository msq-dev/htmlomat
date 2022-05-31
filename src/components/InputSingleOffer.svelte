<script>
  import BaseInputItem from "./BaseInputItem.svelte"
  import BaseInputField from "./BaseInputField.svelte"
  import InputGroupImage from "./InputGroupImage.svelte"
  import InputGroupAmount from "./InputGroupAmount.svelte"
  import { noBrTags } from "../other/utils"

  export let item

  $: productNameNoBr = noBrTags(item.productName)
</script>

<BaseInputItem id={item.id} on:delete>
  <svelte:fragment slot="title">
    <span><b>Angebot&emsp;</b>{productNameNoBr}</span>
  </svelte:fragment>
  <svelte:fragment slot="content">
    <BaseInputField label="Product Name" bind:value={item.productName} />
    <BaseInputField
      type="url"
      label="Product Link"
      bind:value={item.productLink}
    />

    <InputGroupImage imgUrl={item.productImgSrc} product />
    <BaseInputField
      classes="input-alt-text"
      label="Product Image Alt Text"
      bind:value={item.productImgAlt}
    />

    <label for="productDescription" class="mt-1">Product Description</label>
    <textarea
      id="productDescription"
      rows="5"
      bind:value={item.productDesc}
      on:focus={(e) => e.target.select()}
    />

    <div class="price-grid">
      <BaseInputField
        classes="bold-text"
        type="number"
        label="Voller Preis"
        unit="€"
        bind:value={item.priceFull}
      />
      <BaseInputField
        type="number"
        label="Rabatt"
        unit="%"
        bind:value={item.individualDiscount}
      />
      <InputGroupAmount {item} />
    </div>
    <BaseInputField label="CTA Button Text" bind:value={item.ctaButtonText} />
  </svelte:fragment>
</BaseInputItem>

<style>
  .price-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 0.5em;
  }
</style>
