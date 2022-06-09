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

  function downloadHtml() {
    const date = new Date()
    const year = String(date.getFullYear()).slice(-2)
    let month = String(date.getMonth() + 1)
    let day = String(date.getDate())

    if (month.length < 2) month = "0" + month
    if (day.length < 2) day = "0" + day

    const datePrefix = [year, month, day].join("")

    const colorConvertedHtml = rgbToHex(newsletter.innerHTML)
    const newsletterHtml = htmlDocStart + colorConvertedHtml + htmlDocEnd
    const blob = new Blob([newsletterHtml], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.download = `${datePrefix}_newsletter.html`
    link.href = url
    link.click()
    URL.revokeObjectURL(url)
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
    <button class="get-html" on:click={() => getHtml()}>copy</button>
    <button
      class="get-html"
      style="background-color: forestgreen;"
      on:click={() => downloadHtml()}>download</button
    >
  </div>
  <div bind:this={newsletter}><NewsletterEmail /></div>
</span>

<style>
  .controls {
    position: fixed;
    top: 1em;
    right: 1em;
    display: flex;
    /* flex-direction: column; */
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
    font-size: 1rem;
    box-shadow: 0 0 var(--shadow-size, 1rem)
      var(--shadow-clr, rgb(0 0 0 / 0.25));
  }
</style>
