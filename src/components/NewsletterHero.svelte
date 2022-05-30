<script>
  import { offerPage, heroImgSrc, heroImgAlt } from "../stores/newsletter"
</script>

<tr>
  <td>
    <a href={$offerPage} target="_blank" style="width: 580px; display: block">
      <img
        src={$heroImgSrc}
        alt={$heroImgAlt}
        width="580"
        height="auto"
        border="0"
        style="margin: 15px 0 20px 0px"
      /></a
    >
  </td>
</tr>
