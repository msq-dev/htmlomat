<script>
  export let item
</script>

{#if item.imageUrl}
  <tr>
    <td height="394">
      <a href={item.imageLinkTo}
        ><img
          src={item.imageUrl}
          alt={item.imageAltText}
          border="0"
          width="580"
          height="auto"
          style="margin: 0 0 40px 0px;"
        /></a
      >
    </td>
  </tr>
{/if}
