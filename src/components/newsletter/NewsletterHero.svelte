<script>
  import { landingpage, heroImgSrc, heroImgAlt } from "../../stores/newsletter"
  import { isImage } from "../../helpers/utils"

  // const params =
  //   "?name=Werner&id=123456&product=manuka-south-manuka-honig-mgo-356-umf-12-im-glas-mit-holzdeckel-250g-c"
</script>

{#if isImage($heroImgSrc)}
  <tr>
    <td>
      <a
        href={$landingpage}
        target="_blank"
        style="width: 580px; display: block"
      >
        <img
          src={$heroImgSrc}
          alt={$heroImgAlt}
          width="580"
          height="auto"
          border="0"
          style="margin: 24px 0px 48px 0px"
        /></a
      >
    </td>
  </tr>
{/if}
