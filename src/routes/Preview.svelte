<script>
  import NewsletterEmail from "../components/NewsletterEmail.svelte"
  import PanelStyling from "../components/PanelStyling.svelte"
  import Notification from "../components/Notification.svelte"

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
    const colorConvertedHtml = convertColors(newsletter.innerHTML)
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

  function replacer(match) {
    const hexValue = match
      .replace(/[rgb()]/g, "")
      .split(",")
      .map((c) => componentToHex(parseInt(c)))
      .join("")

    return `#${hexValue}`
  }

  function convertColors(htmlString) {
    const rgbRegex = /(rgb\(\d+,\s?\d+,\s?\d+\))/g
    return htmlString.replace(rgbRegex, replacer)
  }

  // courtesy of https://stackoverflow.com/a/5624139
  function componentToHex(c) {
    const hex = c.toString(16)
    return hex.length === 1 ? `0${hex}` : hex
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
