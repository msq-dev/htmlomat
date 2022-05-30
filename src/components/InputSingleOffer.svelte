<script>
  import BaseInputItem from "./BaseInputItem.svelte"
  import BaseInputField from "./BaseInputField.svelte"
  import { prettyPrice } from "../utils/utils"

  const brRegex = /<br\s?\/?>/g

  export let item

  $: productNameNoBrTags = item.productName.replace(brRegex, " ")
  $: priceDiscount = item?.priceFull * (1 - item?.individualDiscount / 100)
  $: pricePerHundred = (priceDiscount / item?.amount) * 100
</script>

<BaseInputItem id={item.id} on:delete>
  <svelte:fragment slot="title">
    <span><b>Angebot&emsp;</b>{productNameNoBrTags}</span>
  </svelte:fragment>
  <svelte:fragment slot="content">
    <BaseInputField label="Product Name" bind:value={item.productName} />
    <BaseInputField
      type="url"
      label="Product Link"
      bind:value={item.productLink}
    />
    <BaseInputField
      type="imgUrl"
      label="Product Image"
      bind:value={item.productImgSrc}
    />
    <BaseInputField
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
    <BaseInputField
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
    <BaseInputField
      classes="inline mt-1"
      type="number"
      label="Menge"
      bind:value={item.amount}
    />
    <label class="inline">
      <input type="radio" bind:group={item.amountUnit} value={"ml"} />
      Milliliter
    </label>
    <label class="inline">
      <input type="radio" bind:group={item.amountUnit} value={"g"} />
      Gramm
    </label>
    <BaseInputField label="CTA Button Text" bind:value={item.ctaButtonText} />
    <div class="output-group mt-1">
      <span>Preis rabattiert:</span>
      <span style="color: darkmagenta;">{prettyPrice(priceDiscount)}</span>
    </div>
    <div class="output-group">
      <span>Preis pro 100&thinsp;{item.amountUnit}:</span>
      <span style="color: teal;">{prettyPrice(pricePerHundred)}</span>
    </div>
  </svelte:fragment>
</BaseInputItem>

<style>
  .output-group {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 0.5em;
    width: 30%;
    font-size: 70%;
  }
</style>
