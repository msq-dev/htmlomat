<script>
  export let item
</script>

{#if item.content}
  <tr>
    {@html item.content}
  </tr>
{/if}
