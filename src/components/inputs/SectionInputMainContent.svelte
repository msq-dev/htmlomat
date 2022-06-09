<script>
  import { v4 as uuidv4 } from "uuid"
  import { contentMain } from "../../stores/newsletter"
  import InputFieldset from "./InputFieldset.svelte"
  import InputSingleOffer from "./InputSingleOffer.svelte"
  import InputContentImage from "./InputContentImage.svelte"
  import InputContentTextBlock from "./InputContentTextBlock.svelte"
  import InputContentHtml from "./InputContentHtml.svelte"
  import BaseButton from "../BaseButton.svelte"

  import {
    singleOffer,
    contentImage,
    contentTextBlock,
    contentHtml,
  } from "../../helpers/blueprints"

  const inputComponents = {
    singleOffer: InputSingleOffer,
    contentImage: InputContentImage,
    contentTextBlock: InputContentTextBlock,
    contentHtml: InputContentHtml,
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
    if (type === "contentHtml") {
      const newHtml = structuredClone(contentHtml)
      $contentMain = [...$contentMain, { ...newHtml, id: itemId }]
    }
  }

  function deleteContentItem(e) {
    if (window.confirm("Wirklich löschen?")) {
      $contentMain = $contentMain.filter((o) => o.id !== e.detail.itemId)
    }
  }
</script>

<InputFieldset legend="Main Content">
  <div class="button-group | rounded">
    <BaseButton
      on:btnClick={() => addContentItem("singleOffer")}
      classes="btn-add first-btn"
    >
      Angebot einzeln
    </BaseButton>
    <BaseButton
      on:btnClick={() => addContentItem("contentImage")}
      classes="btn-add middle-btn"
    >
      Bild
    </BaseButton>
    <BaseButton
      on:btnClick={() => addContentItem("contentTextBlock")}
      classes="btn-add middle-btn">Textblock</BaseButton
    >
    <BaseButton
      on:btnClick={() => addContentItem("contentHtml")}
      classes="btn-add last-btn">HTML</BaseButton
    >
  </div>
  {#if $contentMain.length}
    <div class="mt-2">
      {#each $contentMain as item, i (item.id)}
        <svelte:component
          this={inputComponents[item.type]}
          {item}
          on:delete={(e) => deleteContentItem(e)}
        />
      {/each}
    </div>
  {/if}
</InputFieldset>

<style>
  .button-group {
    position: absolute;
    top: 0;
    right: 1rem;
    display: flex;
    border: 1px solid #ccc;
  }
</style>
