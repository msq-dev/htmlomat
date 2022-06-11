<script>
  import { fade } from "svelte/transition"
  import {
    currentInputSection,
    previewMode,
    showResetButton,
  } from "../stores/editor"
  import {
    mailTitle,
    landingpage,
    heroImgSrc,
    heroImgAlt,
    introHeadline,
    introParagraphs,
    contentMain,
    baseDiscount,
    mailOffers,
  } from "../stores/newsletter"
  import NavSidebar from "./NavSidebar.svelte"
  import BaseButton from "./BaseButton.svelte"
  import SectionInputHeader from "./inputs/SectionInputHeader.svelte"
  import SectionInputIntro from "./inputs/SectionInputIntro.svelte"
  import SectionInputMainContent from "./inputs/SectionInputMainContent.svelte"
  import SectionInputOffers from "./inputs/SectionInputOffers.svelte"
  import NewsletterEmail from "./newsletter/NewsletterEmail.svelte"

  const sections = {
    header: SectionInputHeader,
    intro: SectionInputIntro,
    mainContent: SectionInputMainContent,
    offers: SectionInputOffers,
  }

  function resetNewsletter() {
    $mailTitle = ""
    $landingpage = ""
    $heroImgSrc = ""
    $heroImgAlt = ""
    $introHeadline = ""
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
  <link rel="stylesheet" href="./newsletter.css" />
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
    <div class="preview-frame">
      <NewsletterEmail />
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
    grid-template-columns: max-content 65ch 10ch;
    gap: 1em;
    width: 100%;
  }

  .preview-frame {
    transform: scale(0.4);
    transform-origin: top right;
  }
</style>
