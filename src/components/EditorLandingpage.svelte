<script>
  import { previewMode, BASE_URL } from "../stores/editor"

  const user = {
    "123": {
      name: "Werner",
    },
    "456": {
      name: "Anabel",
    },
  }

  function getParams() {
    const urlSearchParams = new URLSearchParams(window.location.search)
    const params = Object.fromEntries(urlSearchParams.entries())

    return params
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="./global.css" />
</svelte:head>

<div class="page">
  <div class="background-image">
    <img
      src="https://apps.maxspuling.de/htmlomat/assets/honey-bg.jpg"
      alt=""
      srcset=""
    />
  </div>
  <div class="container">
    <h1 class="title" contenteditable={$previewMode ? "false" : "true"}>
      Hallo guten Tag {user[getParams().id] || "wie gehts?"}!
    </h1>
    <p contenteditable={$previewMode ? "false" : "true"}>
      Das sieht beisammen sie benommen waren, stand Nase dem Vorgang gewonnen.
      Das auf mit setzte dieser Morgens, was diesmal immer zurück Ende. Ich
      eingeleitet er jenes dies erreichte wohin vernehmen er knapp, läutete über
      bereiteten Unterstützung seines.
    </p>
    <div class="button-grid">
      <a href="/" class="btn" contenteditable={$previewMode ? "false" : "true"}
        >Ja, bitte</a
      >
      <a
        href="/"
        class="btn btn-transparent"
        contenteditable={$previewMode ? "false" : "true"}>Nein, danke</a
      >
    </div>
  </div>
</div>

<style>
  .page {
    display: grid;
    place-content: center;
    position: relative;
    width: 100vw;
    height: 100vh;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: gold;
  }

  .background-image {
    position: absolute;
    inset: 0;
    z-index: -10;
    background-color: #000;
  }

  .background-image > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: opacity(0.3);
  }

  .container {
    display: grid;
    grid-template-columns: 1fr min(65ch, 100% - 2rem) 1fr;
    row-gap: 2em;
  }

  .container > * {
    grid-column: 2;
  }

  .full-bleed {
    grid-column: 1 / -1;
  }

  .title {
    color: gold;
    text-align: center;
  }

  .btn {
    background: none;
    padding: 0.5em 1em;
    background-color: gold;
    color: #000;
    border-radius: 100vw;
  }

  a.btn {
    text-decoration: none;
  }

  .btn-transparent {
    color: currentColor;
    background-color: transparent;
    border: 1px solid gold;
  }

  .button-grid {
    display: flex;
    justify-content: space-around;
  }
</style>
