<script>
  import { previewMode } from "./stores/editor"
  import Editor from "./components/Editor.svelte"
  import Preview from "./components/Preview.svelte"
</script>

{#if $previewMode}
  <Preview />
{:else}
  <Editor />
{/if}
