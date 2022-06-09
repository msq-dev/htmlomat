<script>
  import { htmlomat } from "./stores/settings"
  import { previewMode } from "./stores/editor"
  import EditorNewsletter from "./components/EditorNewsletter.svelte"
  import PreviewNewsletter from "./components/PreviewNewsletter.svelte"
  import EditorLandingpage from "./components/EditorLandingpage.svelte"
  import PreviewLandingpage from "./components/PreviewLandingpage.svelte"

  const previews = {
    newsletter: PreviewNewsletter,
    landingpage: EditorLandingpage,
    // landingpage: PreviewLandingpage,
  }

  const editors = {
    newsletter: EditorNewsletter,
    landingpage: EditorLandingpage,
  }
</script>

{#if !$htmlomat}
  <button on:click={() => ($htmlomat = "landingpage")}>Landingpage</button>
  <button on:click={() => ($htmlomat = "newsletter")}>Newsletter</button>
{/if}

{#if $previewMode}
  <svelte:component this={previews[$htmlomat]} />
{:else}
  <svelte:component this={editors[$htmlomat]} />
{/if}
