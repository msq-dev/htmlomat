<script>
  import BaseInputItem from "../BaseInputItem.svelte"
  import InputText from "./InputText.svelte"
  import InputUrl from "./InputUrl.svelte"
  import InputNumber from "./InputNumber.svelte"
  import InputGroupImage from "./InputGroupImage.svelte"
  import InputGroupAmount from "./InputGroupAmount.svelte"

  export let item
</script>

<BaseInputItem id={item.id} on:delete>
  <svelte:fragment slot="title">
    {item.productName}
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

    <div class="price-grid">
      <div class="discount-group">
        <div class="input-group input-checkbox">
          <input
            type="checkbox"
            id="hasIndividualDiscount"
            bind:checked={item.hasIndividualDiscount}
          />
          <label for="hasIndividualDiscount" class="inline"
            >{item.hasIndividualDiscount
              ? "Ja, es gibt einen eigenen Rabatt"
              : "Gibt es einen eigenen Rabatt?"}</label
          >
        </div>
        <InputNumber
          label="Eigener Rabatt"
          unit="%"
          class_={!item.hasIndividualDiscount ? "transparent" : ""}
          bind:value={item.individualDiscount}
        />
      </div>

      <InputNumber
        label="Voller Preis"
        unit="€"
        class_="bold"
        bind:value={item.priceFull}
      />
      <InputGroupAmount {item} />
    </div>
  </svelte:fragment>
</BaseInputItem>

<style>
  .price-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 0.5em;
  }
</style>
