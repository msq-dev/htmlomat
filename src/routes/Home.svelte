<script>
  import { scale } from "svelte/transition"
  import { link } from "svelte-spa-router"
  import { v4 as uuidv4 } from "uuid"
  import {
    mailTitle,
    offerPage,
    heroImgSrc,
    heroImgAlt,
    introHeadline,
    introParagraphs,
    contentMain,
    baseDiscount,
    mailOffers,
  } from "../stores/newsletter"
  import CollapsibleFieldset from "../components/CollapsibleFieldset.svelte"
  import BaseInputField from "../components/BaseInputField.svelte"
  import InputSingleOffer from "../components/InputSingleOffer.svelte"
  import InputContentImage from "../components/InputContentImage.svelte"
  import InputMultiOffer from "../components/InputMultiOffer.svelte"
  import InputContentTextBlock from "../components/InputContentTextBlock.svelte"

  let showHeroImg = false

  function handleHeroPreview() {
    showHeroImg = true
  }

  function cancelHeroPreview() {
    showHeroImg = false
  }

  $: singleOffer = {
    type: "singleOffer",
    productName: "PRODUKT",
    productLink: "",
    productImgSrc: "",
    productImgAlt: "",
    productDesc: "",
    priceFull: 0,
    hasIndividualDiscount: false,
    individualDiscount: 0,
    amount: 0,
    amountUnit: "",
    ctaButtonText: "HIER BESTELLEN",
  }

  $: contentImage = {
    type: "contentImage",
    imageUrl: "",
    imageAltText: "",
    imageLinkTo: "",
  }

  $: contentTextBlock = {
    type: "contentTextBlock",
    headline: "",
    text: "",
  }

  const contentComponents = {
    singleOffer: InputSingleOffer,
    contentImage: InputContentImage,
    contentTextBlock: InputContentTextBlock,
  }

  function addIntroParagraph() {
    $introParagraphs = [...$introParagraphs, ""]
  }

  function addContentItem(type) {
    const itemId = uuidv4()
    if (type === "singleOffer") {
      $contentMain = [...$contentMain, { ...singleOffer, id: itemId }]
      return
    }
    if (type === "contentImage") {
      $contentMain = [...$contentMain, { ...contentImage, id: itemId }]
      return
    }
    if (type === "contentTextBlock") {
      $contentMain = [...$contentMain, { ...contentTextBlock, id: itemId }]
      return
    }
  }

  function deleteContentItem(e) {
    if (window.confirm("Wirklich löschen?")) {
      $contentMain = $contentMain.filter((o) => o.id !== e.detail.itemId)
    }
  }

  function addOffer() {
    singleOffer = { ...singleOffer, id: uuidv4() }
    $mailOffers = [...$mailOffers, singleOffer]
  }

  function deleteOffer(e) {
    if (window.confirm("Wirklich löschen?")) {
      $mailOffers = $mailOffers.filter((o) => o.id !== e.detail.itemId)
    }
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="./global.css" />
</svelte:head>

<main>
  {#if showHeroImg}
    <div
      class="hero-preview | shadow"
      style:background-image="url({$heroImgSrc})"
      transition:scale
    />
  {/if}

  <div class="nav-buttons | shadow">
    <a href="/preview" class="btn btn-preview | rounded" use:link>Preview</a>
  </div>

  <CollapsibleFieldset legend="Header">
    <BaseInputField label="Mail Title" bind:value={$mailTitle} />
    <BaseInputField type="url" label="Offer Page" bind:value={$offerPage} />
    <BaseInputField
      type="heroImgUrl"
      label="Hero Image"
      on:hoverStart={() => handleHeroPreview()}
      on:hoverEnd={() => cancelHeroPreview()}
      bind:value={$heroImgSrc}
    />
    <BaseInputField label="Hero Image Alt Text" bind:value={$heroImgAlt} />
  </CollapsibleFieldset>

  <CollapsibleFieldset legend="Intro">
    <div class="button-group">
      <button class="btn btn-add | rounded" on:click={() => addIntroParagraph()}
        >+ Absatz</button
      >
    </div>
    <BaseInputField label="Intro Headline" bind:value={$introHeadline} />
    {#each $introParagraphs as p}
      <textarea
        rows="3"
        bind:value={p}
        on:focus={(e) => e.target.select()}
        on:blur={(e) => {
          if (!e.target.value) {
            e.target.remove()
          }
        }}
      />
    {/each}
  </CollapsibleFieldset>

  <CollapsibleFieldset legend="Main Content">
    <div class="button-group">
      <button
        class="btn btn-add | rounded"
        on:click={() => addContentItem("singleOffer")}>+ Angebot einzeln</button
      >
      <button
        class="btn btn-add | rounded"
        on:click={() => addContentItem("contentImage")}>+ Bild</button
      >
      <button
        class="btn btn-add | rounded"
        on:click={() => addContentItem("contentTextBlock")}>+ Textblock</button
      >
    </div>
    {#if $contentMain.length}
      <div class="mt-2">
        {#each $contentMain as item}
          <svelte:component
            this={contentComponents[item.type]}
            {item}
            on:delete={(e) => deleteContentItem(e)}
          />
        {/each}
      </div>
    {/if}
  </CollapsibleFieldset>

  <CollapsibleFieldset legend="Offer Section">
    <div class="button-group">
      <button class="btn btn-add | rounded" on:click={() => addOffer()}
        >+ Angebot</button
      >
    </div>
    <BaseInputField
      type="number"
      label="Hauptrabatt"
      unit="%"
      bind:value={$baseDiscount}
    />

    {#if $mailOffers.length}
      {#each $mailOffers as offer}
        <InputMultiOffer {offer} on:delete={(e) => deleteOffer(e)} />
      {/each}
    {/if}
  </CollapsibleFieldset>
</main>

<style>
  main {
    width: min(100% - 2rem, 65ch);
    margin: 0 auto 50vh;
    padding-top: 10vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  .btn {
    padding: 0 0.75em;
  }

  a.btn {
    text-decoration: none;
    color: #fff;
  }

  .btn-preview {
    font-size: 80%;
    background-color: steelblue;
    width: fit-content;
    padding: 0.35em 0.75em;
    float: right;
  }

  .btn-add {
    background-color: hsl(0, 0%, 91%);
    color: #000;
    font-size: 70%;
  }

  .button-group {
    position: absolute;
    top: 0;
    right: 1em;
    display: flex;
    gap: 0.5em;
  }

  .nav-buttons {
    position: fixed;
    inset: 0 auto auto 0;
    z-index: 50;
    width: 100%;
    padding: 1rem;
    background-color: #fff;
  }

  .hero-preview {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    width: 290px;
    height: 328px;
    background-size: cover;
  }
</style>
