<script>
  import { baseDiscount } from "../stores/newsletter"
  import BaseInputItem from "./BaseInputItem.svelte"
  import BaseInputField from "./BaseInputField.svelte"
  import { prettyPrice } from "../utils/utils"

  export let offer

  $: priceDiscount =
    offer?.priceFull *
    (1 -
      (offer?.hasIndividualDiscount
        ? offer?.individualDiscount
        : $baseDiscount) /
        100)

  $: pricePerHundred = (priceDiscount / offer?.amount) * 100
</script>

<BaseInputItem id={offer.id} on:delete>
  <svelte:fragment slot="title">
    {offer.productName}
  </svelte:fragment>
  <svelte:fragment slot="content">
    <BaseInputField label="Product Name" bind:value={offer.productName} />
    <BaseInputField
      type="url"
      label="Product Link"
      bind:value={offer.productLink}
    />
    <BaseInputField
      type="imgUrl"
      label="Product Image"
      bind:value={offer.productImgSrc}
    />
    <BaseInputField
      label="Product Image Alt Text"
      bind:value={offer.productImgAlt}
    />
    <BaseInputField
      type="number"
      label="Voller Preis"
      unit="€"
      bind:value={offer.priceFull}
    />

    <div class="input-group input-checkbox">
      <input
        type="checkbox"
        id="hasIndividualDiscount"
        bind:checked={offer.hasIndividualDiscount}
      />
      <label for="hasIndividualDiscount" class="inline"
        >{offer.hasIndividualDiscount
          ? "Ja, es gibt einen eigenen Rabatt"
          : "Gibt es einen eigenen Rabatt?"}</label
      >
    </div>
    <BaseInputField
      classes={!offer.hasIndividualDiscount ? "transparent" : ""}
      type="number"
      label="Eigener Rabatt"
      unit="%"
      bind:value={offer.individualDiscount}
    />
    <BaseInputField
      classes="inline mt-1"
      type="number"
      label="Menge"
      bind:value={offer.amount}
    />
    <label class="inline">
      <input type="radio" bind:group={offer.amountUnit} value={"ml"} />
      Milliliter
    </label>
    <label class="inline">
      <input type="radio" bind:group={offer.amountUnit} value={"g"} />
      Gramm
    </label>
    <div class="output-group mt-1">
      <span>Preis rabattiert:</span>
      <span style="color: darkmagenta;">{prettyPrice(priceDiscount)}</span>
    </div>
    <div class="output-group">
      <span>Preis pro 100&thinsp;{offer.amountUnit}:</span>
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
