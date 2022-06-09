<script>
  import { v4 as uuidv4 } from "uuid"
  import { baseDiscount, mailOffers } from "../../stores/newsletter"
  import InputNumber from "./InputNumber.svelte"
  import InputFieldset from "./InputFieldset.svelte"
  import InputMultiOffer from "./InputMultiOffer.svelte"
  import { singleOffer } from "../../helpers/blueprints"

  function addOffer() {
    const newOffer = structuredClone(singleOffer)
    $mailOffers = [...$mailOffers, { ...newOffer, id: uuidv4() }]
  }

  function deleteOffer(e) {
    if (window.confirm("Wirklich löschen?")) {
      $mailOffers = $mailOffers.filter((o) => o.id !== e.detail.itemId)
    }
  }
</script>

<InputFieldset legend="Angebote">
  <div class="button-group | rounded">
    <button class="btn btn-add | rounded" on:click={() => addOffer()}
      >Angebot</button
    >
  </div>
  <InputNumber label="Hauptrabatt" unit="%" bind:value={$baseDiscount} />
  {#if $mailOffers.length}
    {#each $mailOffers as item}
      <InputMultiOffer {item} on:delete={(e) => deleteOffer(e)} />
    {/each}
  {/if}
</InputFieldset>

<style>
  .btn {
    padding: 0 0.9em;
  }

  .btn-add {
    background-color: hsl(0, 0%, 91%);
    color: #000;
    font-size: 70%;
  }

  .button-group {
    --border: 1px solid #ccc;

    position: absolute;
    top: 0;
    right: 1em;
    display: flex;
    border: var(--border);
  }
</style>
