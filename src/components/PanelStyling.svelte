<script>
  import { onMount } from "svelte"
  import {
    colorScheme,
    clrText,
    clrAccent,
    clrDiscount,
    clrButtons,
    clrLight,
    fsHeadline,
    fsText,
    switchPrices,
  } from "../stores/styling"
  import ColorPicker from "./ColorPicker.svelte"
  import IconArrowLeft from "./icons/IconArrowLeft.svelte"
  import IconArrowRight from "./icons/IconArrowRight.svelte"

  let panelOpen = false

  function triggerPanel() {
    panelOpen = !panelOpen
  }

  onMount(() => {
    if ($colorScheme === "health") {
      $clrAccent = "#004c9a"
      $clrButtons = "#004c9a"
    }
  })
</script>

<div class="wrapper" class:panelOpen>
  <div class="styling-panel">
    <!-- <ColorPicker colorName="Text" bind:value={$clrText} /> -->
    <ColorPicker colorName="Accent" bind:value={$clrAccent} />
    <ColorPicker colorName="Discount" bind:value={$clrDiscount} />
    <ColorPicker colorName="Buttons" bind:value={$clrButtons} />
    <!-- <ColorPicker colorName="Light" bind:value={$clrLight} /> -->
    <div class="input-group">
      <label for="fontSizeHeadline">Font-size Headline</label>
      <div class="range-group">
        <input
          id="fontSizeHeadline"
          type="range"
          bind:value={$fsHeadline}
          min="30"
          max="45"
        />
        <span>{$fsHeadline}px</span>
      </div>
    </div>
    <div class="input-group">
      <label for="fontSizeText">Font-size Text</label>
      <div class="range-group">
        <input
          id="fontSizeText"
          type="range"
          bind:value={$fsText}
          min="15"
          max="25"
        />
        <span>{$fsText}px</span>
      </div>
    </div>
    <div class="input-group">
      <label for="switchPrices"
        ><input
          type="checkbox"
          id="switchPrices"
          bind:checked={$switchPrices}
        />&nbsp;Switch prices</label
      >
    </div>
  </div>
  <div class="trigger" on:click={() => triggerPanel()}>
    {#if panelOpen}
      <IconArrowLeft strokeColor="#ffffff" />
    {:else}
      <IconArrowRight strokeColor="#ffffff" />
    {/if}
  </div>
</div>

<style>
  label {
    font-size: 80%;
    display: block;
    margin-bottom: 0.2em;
  }

  .input-group {
    grid-column: 1 / -1;
  }

  .range-group {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    transform: translateX(-85%);
    transition: transform 400ms ease-in-out;
  }

  .styling-panel,
  .trigger {
    border-top: 0;
    border-left: 0;
    border-bottom-right-radius: 0.5rem;
  }

  .styling-panel {
    width: 22rem;
    box-shadow: 0 0 1rem rgb(0 0 0 / 0.25);
    padding: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background-color: rgb(240, 240, 240);
    border: 1px solid #aaa;
    display: grid;
    grid-template-columns: repeat(auto-fit, 2rem);
    grid-template-rows: repeat(auto-fit, 3rem);
    gap: 2rem;
  }

  .trigger {
    background-color: #4597ff;
    padding: 0.5rem;
    font-size: 1.5rem;
    height: fit-content;
    cursor: pointer;
  }

  .panelOpen {
    transform: translateX(0);
  }
</style>
