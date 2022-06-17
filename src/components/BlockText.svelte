<script>
  import { clrText, clrAccent, fsHeadline, lhHeadline } from "../stores/styling"
  import { fontFamily } from "../helpers/styles"

  export let text = ""
  export let fontSize = 14
  export let paddingTop = 0
  export let paddingBottom = 0
</script>

<tr>
  <td>
    <p
      style="{fontFamily}; padding: {paddingTop}px 50px {paddingBottom}px 50px; color: {$clrAccent}; font-size: {fontSize}px; line-height: 18px; text-align: center;"
    >
      {@html text}
    </p>
  </td>
</tr>
