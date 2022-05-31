<script>
  import BaseInputItem from "./BaseInputItem.svelte"
  import BaseInputField from "./BaseInputField.svelte"
  import InputGroupImage from "./InputGroupImage.svelte"
  import InputGroupAmount from "./InputGroupAmount.svelte"

  export let item
</script>

<BaseInputItem id={item.id} on:delete>
  <svelte:fragment slot="title">
    {item.productName}
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
        <BaseInputField
          classes={!item.hasIndividualDiscount ? "transparent" : ""}
          type="number"
          label="Eigener Rabatt"
          unit="%"
          bind:value={item.individualDiscount}
        />
      </div>

      <BaseInputField
        classes="bold-text"
        type="number"
        label="Voller Preis"
        unit="€"
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
