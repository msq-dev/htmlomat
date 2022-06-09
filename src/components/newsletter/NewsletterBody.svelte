<script>
  import { contentMain } from "../../stores/newsletter"
  import NewsletterHeader from "./NewsletterHeader.svelte"
  import NewsletterHero from "./NewsletterHero.svelte"
  import NewsletterIntro from "./NewsletterIntro.svelte"
  import NewsletterSingleOffer from "./NewsletterSingleOffer.svelte"
  import NewsletterContentImage from "./NewsletterContentImage.svelte"
  import NewsletterContentTextBlock from "./NewsletterContentTextBlock.svelte"
  import NewsletterContentHtml from "./NewsletterContentHtml.svelte"
  import NewsletterOfferRows from "./NewsletterOfferRows.svelte"
  import NewsletterSocial from "./NewsletterSocial.svelte"

  const newsletterComponents = {
    singleOffer: NewsletterSingleOffer,
    contentImage: NewsletterContentImage,
    contentTextBlock: NewsletterContentTextBlock,
    contentHtml: NewsletterContentHtml,
  }
</script>

<table
  cellpadding="0"
  cellspacing="0"
  border="0"
  width="580"
  bgcolor="#ffffff"
  style="margin-top: 10px; margin-bottom: 10px; border: 1px solid #d7d7d7;"
>
  <NewsletterHeader />
  <NewsletterHero />
  <NewsletterIntro />
  {#each $contentMain as item}
    <svelte:component this={newsletterComponents[item.type]} {item} />
  {/each}
  <NewsletterOfferRows />
  <NewsletterSocial />
</table>
