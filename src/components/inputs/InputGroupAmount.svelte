<script>
  import { baseDiscount } from "../../stores/newsletter"
  import BaseInputField from "../BaseInputField.svelte"
  import { prettyPrice } from "../../helpers/utils"

  export let item = {}

  $: priceDiscount =
    item?.priceFull *
    (1 -
      (item?.hasIndividualDiscount ? item?.individualDiscount : $baseDiscount) /
        100)
  $: pricePerHundred = (priceDiscount / item?.amount) * 100
</script>

<div class="amount-group">
  <BaseInputField
    classes="inline | mt-1"
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
</div>

<div class="output-group | mt-1">
  <div class="output-price-item">
    <span>Preis rabattiert:</span>
    <span class="pretty-price">{prettyPrice(priceDiscount)}</span>
  </div>
  <div class="output-price-item">
    <span>Preis pro 100&thinsp;{item.amountUnit}:</span>
    <span class="pretty-price">{prettyPrice(pricePerHundred)}</span>
  </div>
</div>

<style>
  .amount-group {
    grid-column: 1;
  }

  .output-group {
    grid-column: 2;
    align-self: end;
  }

  .output-group > div {
    display: grid;
    grid-template-columns: 15ch 5ch;
    gap: 0.5em;
    font-size: 70%;
  }

  .pretty-price {
    place-self: end;
    font-variant-numeric: slashed-zero tabular-nums;
  }
</style>
