<script>
  import { fade } from "svelte/transition"
  import {
    currentInputSection,
    previewMode,
    showResetButton,
  } from "../stores/editor"
  import {
    introParagraphs,
    contentMain,
    baseDiscount,
    mailOffers,
  } from "../stores/newsletter"
  import NavSidebar from "./NavSidebar.svelte"
  import SectionInputHeader from "./SectionInputHeader.svelte"
  import SectionInputIntro from "./SectionInputIntro.svelte"
  import SectionInputMainContent from "./SectionInputMainContent.svelte"
  import SectionInputOffers from "./SectionInputOffers.svelte"
  import BaseButton from "./BaseButton.svelte"

  const sections = {
    header: SectionInputHeader,
    intro: SectionInputIntro,
    mainContent: SectionInputMainContent,
    offers: SectionInputOffers,
  }

  function resetNewsletter() {
    $introParagraphs = []
    $contentMain = []
    $baseDiscount = 0
    $mailOffers = []
    $showResetButton = false
  }

  function enterPreviewMode() {
    $previewMode = true
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="./global.css" />
</svelte:head>

<span in:fade={{ duration: 200, delay: 300 }} out:fade={{ duration: 200 }}>
  <nav class="shadow">
    <BaseButton
      on:btnClick={() => resetNewsletter()}
      classes="btn-nav {$showResetButton ? '' : 'transparent'}"
    >
      Start (Beispiele löschen)
    </BaseButton>
    <BaseButton on:btnClick={() => enterPreviewMode()} classes="btn-nav">
      Preview
    </BaseButton>
  </nav>

  <main>
    <NavSidebar />
    <div class="current-input">
      <svelte:component this={sections[$currentInputSection]} />
    </div>
  </main>
</span>

<style>
  nav {
    position: fixed;
    inset: 0 auto auto 0;
    z-index: 50;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    background-color: #fff;
  }

  main {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1em;
  }
</style>
