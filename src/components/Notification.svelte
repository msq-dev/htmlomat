<script>
  import { fly } from "svelte/transition"

  export let success = true
  export let errorMessage = ""

  $: message = success
    ? "HTML erfolgreich in die Zwischenablage kopiert 🥳🥳🥳"
    : `Leider ist etwas schiefgegangen\n${errorMessage}`
</script>

<div
  class="notification {success ? 'success' : 'fail'}"
  in:fly={{ y: -200 }}
  out:fly={{ y: -100 }}
>
  {message}
</div>

<style>
  .notification {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    padding: 2em 0;
    color: #fff;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    box-shadow: 0 0 var(--shadow-size, 1rem)
      var(--shadow-clr, rgb(0 0 0 / 0.25));
  }

  .notification.success {
    background-color: rgba(0, 100, 0, 0.875);
  }

  .notification.fail {
    background-color: rgba(139, 0, 0, 0.875);
  }
</style>
