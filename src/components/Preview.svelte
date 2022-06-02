<script>
  import { fade } from "svelte/transition"
  import { previewMode } from "../stores/editor"
  import NewsletterEmail from "./newsletter/NewsletterEmail.svelte"
  import PanelStyling from "./PanelStyling.svelte"
  import Notification from "./Notification.svelte"
  import { rgbToHex } from "../helpers/utils"

  let newsletter
  let showNotification = false
  let success = null
  let errorMessage = ""

  const htmlDocStart = `<!DOCTYPE html><html lang="de"><head><meta charset="utf-8" /></head><body style="margin: auto">`
  const htmlDocEnd = `</body></html>`

  function handleNotification() {
    showNotification = true
    setTimeout(() => {
      showNotification = false
      success = null
      errorMessage = ""
    }, 1000)
  }

  function getHtml() {
    const colorConvertedHtml = rgbToHex(newsletter.innerHTML)
    const newsletterHtml = htmlDocStart + colorConvertedHtml + htmlDocEnd
    navigator.clipboard.writeText(newsletterHtml).then(() => {
      success = true
      handleNotification()
    }),
      (err) => {
        success = false
        errorMessage = err
        handleNotification()
      }
  }
</script>

{#if showNotification}
  <Notification {success} {errorMessage} />
{/if}

<span in:fade={{ duration: 200, delay: 300 }} out:fade={{ duration: 200 }}>
  <PanelStyling />

  <div class="controls">
    <button
      class="get-html"
      style="background-color: tomato;"
      on:click={() => ($previewMode = false)}>zurück</button
    >
    <button class="get-html" on:click={() => getHtml()}>HTML</button>
  </div>
  <div bind:this={newsletter}><NewsletterEmail /></div>
</span>

<style>
  .controls {
    position: fixed;
    top: 1em;
    right: 1em;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .get-html {
    color: #fff;
    border: none;
    background: none;
    background-color: #4597ff;
    padding: 0.35em 0.75em;
    border-radius: 0.5em;
    letter-spacing: 0.1em;
    font-size: 1.1rem;
    box-shadow: 0 0 var(--shadow-size, 1rem)
      var(--shadow-clr, rgb(0 0 0 / 0.25));
  }
</style>
