<script>
  import BaseInputItem from "../BaseInputItem.svelte"
  import InputText from "./InputText.svelte"
  import InputUrl from "./InputUrl.svelte"
  import InputNumber from "./InputNumber.svelte"
  import InputGroupTextarea from "./InputGroupTextarea.svelte"
  import InputGroupImage from "./InputGroupImage.svelte"
  import InputGroupAmount from "./InputGroupAmount.svelte"
  import { noBrTags } from "../../helpers/utils"

  export let item

  $: productNameNoBr = noBrTags(item.productName)
</script>

<BaseInputItem id={item.id} on:delete>
  <svelte:fragment slot="title">
    <span><b>Angebot&emsp;</b>{productNameNoBr}</span>
  </svelte:fragment>
  <svelte:fragment slot="content">
    <InputText label="Product Name" bind:value={item.productName} />
    <InputUrl label="Product Link" bind:value={item.productLink} />
    <InputGroupImage bind:value={item.productImgSrc} product />
    <InputText
      class_="input-alt-text"
      label="Product Image Alt Text"
      bind:value={item.productImgAlt}
    />

    <InputGroupTextarea
      label="Product Description"
      bind:value={item.productDesc}
    />

    <div class="price-grid">
      <InputNumber
        label="Voller Preis"
        unit="€"
        class_="bold"
        bind:value={item.priceFull}
      />
      <InputNumber
        label="Rabatt"
        unit="%"
        class_={!item.hasIndividualDiscount ? "transparent" : ""}
        bind:value={item.individualDiscount}
      />
      <InputGroupAmount {item} />
    </div>
    <InputText label="CTA" bind:value={item.ctaText} />
  </svelte:fragment>
</BaseInputItem>

<style>
  .price-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 0.5em;
  }
</style>
