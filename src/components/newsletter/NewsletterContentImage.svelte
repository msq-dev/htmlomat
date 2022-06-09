<script>
  import { isImage } from "../../helpers/utils"
  export let item
</script>

{#if isImage(item.imageUrl)}
  <tr>
    <td height="394">
      <a href={item.imageLinkTo}
        ><img
          src={item.imageUrl}
          alt={item.imageAltText}
          border="0"
          width="580"
          height="auto"
          style="margin: 24px 0px 24px 0px;"
        /></a
      >
    </td>
  </tr>
{/if}
