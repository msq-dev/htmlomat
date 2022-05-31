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
  import {
    singleOffer,
    contentImage,
    contentTextBlock,
  } from "../other/blueprints"

  let showResetButton = true
  let showHeroImg = false

  function resetNewsletter() {
    $introParagraphs = []
    $contentMain = []
    $baseDiscount = 0
    $mailOffers = []
    showResetButton = false
  }

  function handleHeroPreview() {
    showHeroImg = true
  }

  function cancelHeroPreview() {
    showHeroImg = false
  }

  const contentComponents = {
    singleOffer: InputSingleOffer,
    contentImage: InputContentImage,
    contentTextBlock: InputContentTextBlock,
  }

  function addIntroParagraph() {
    $introParagraphs = [...$introParagraphs, ""]
  }

  function handleEmptyParagraph(e) {
    if (!e.target.value) {
      $introParagraphs = $introParagraphs.filter((p) => p !== "")
    }
  }

  function addContentItem(type) {
    const itemId = uuidv4()
    if (type === "singleOffer") {
      const newSingleOffer = structuredClone(singleOffer)
      $contentMain = [
        ...$contentMain,
        { ...newSingleOffer, id: itemId, hasIndividualDiscount: true },
      ]
      return
    }
    if (type === "contentImage") {
      const newContentImage = structuredClone(contentImage)
      $contentMain = [...$contentMain, { ...newContentImage, id: itemId }]
      return
    }
    if (type === "contentTextBlock") {
      const newContentTextBlock = structuredClone(contentTextBlock)
      $contentMain = [...$contentMain, { ...newContentTextBlock, id: itemId }]
      return
    }
  }

  function deleteContentItem(e) {
    if (window.confirm("Wirklich löschen?")) {
      $contentMain = $contentMain.filter((o) => o.id !== e.detail.itemId)
    }
  }

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

<svelte:head>
  <link rel="stylesheet" href="./global.css" />
</svelte:head>

<main>
  {#if showHeroImg}
    <div
      class="hero-preview | shadow"
      style:background-image="url({$heroImgSrc})"
      in:scale={{ duration: 200 }}
      out:scale={{ duration: 300 }}
    />
  {/if}

  <div class="nav-bar | shadow">
    {#if showResetButton}
      <span
        class="btn btn-nav | rounded"
        on:click={() => resetNewsletter()}
        out:scale>Start (Beispiele löschen)</span
      >
    {/if}

    <a href="/preview" class="btn btn-nav btn-preview | rounded" use:link
      >Preview</a
    >
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
    <div class="button-group | rounded">
      <button class="btn btn-add | rounded" on:click={() => addIntroParagraph()}
        >+ Absatz</button
      >
    </div>
    <BaseInputField
      classes="bold-text"
      label="Intro Headline"
      bind:value={$introHeadline}
    />
    {#each $introParagraphs as p}
      <textarea
        rows="4"
        bind:value={p}
        on:focus={(e) => e.target.select()}
        on:blur={(e) => handleEmptyParagraph(e)}
        out:scale
      />
    {/each}
  </CollapsibleFieldset>

  <CollapsibleFieldset legend="Main Content">
    <div class="button-group | rounded">
      <button
        class="btn btn-add first-btn | rounded"
        on:click={() => addContentItem("singleOffer")}>+ Angebot einzeln</button
      >
      <button
        class="btn btn-add"
        on:click={() => addContentItem("contentImage")}>+ Bild</button
      >
      <button
        class="btn btn-add last-btn | rounded"
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
    <div class="button-group | rounded">
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
      {#each $mailOffers as item}
        <InputMultiOffer {item} on:delete={(e) => deleteOffer(e)} />
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
    padding: 0 0.9em;
  }

  a.btn {
    text-decoration: none;
    color: #fff;
  }

  .nav-bar {
    position: fixed;
    inset: 0 auto auto 0;
    z-index: 50;
    width: 100%;
    padding: 1rem;
    background-color: #fff;
  }

  .btn-nav {
    font-size: 80%;
    color: #fff;
    background-color: steelblue;
    width: fit-content;
    padding: 0.35em 0.75em;
    cursor: pointer;
  }

  .btn-preview {
    float: right;
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

  .button-group > .first-btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: var(--border);
  }

  .button-group > .last-btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: var(--border);
  }

  .hero-preview {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 100;
    width: calc(580px * 0.65);
    height: calc(657px * 0.65);
    background-size: cover;
  }
</style>
