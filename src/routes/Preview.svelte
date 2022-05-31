<script>
  import NewsletterEmail from "../components/NewsletterEmail.svelte"
  import PanelStyling from "../components/PanelStyling.svelte"
  import Notification from "../components/Notification.svelte"
  import { rgbToHex } from "../other/utils"

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

<PanelStyling />
<button class="get-html" on:click={() => getHtml()}>HTML</button>
<div bind:this={newsletter}><NewsletterEmail /></div>

<style>
  .get-html {
    position: fixed;
    top: 1em;
    right: 1em;
    border: none;
    background: none;
    color: #fff;
    background-color: rgb(57, 180, 0);
    padding: 0.35em 0.75em;
    border-radius: 0.5em;
    letter-spacing: 0.1em;
    font-size: 1.1rem;
    box-shadow: 0 0 var(--shadow-size, 1rem)
      var(--shadow-clr, rgb(0 0 0 / 0.25));
  }
</style>
