<script>
  import {
    clrText,
    clrAccent,
    fsHeadline,
    lhHeadline,
    fsText,
    lhText,
  } from "../../stores/styling"
  import { fontFamily } from "../../helpers/styles"

  export let item
</script>

{#if item.headline}
  <tr>
    <td>
      <h3
        style="{fontFamily}; padding: 0px 50px 0px 50px; color: {$clrAccent}; font-size: {$fsHeadline}px; line-height: {$lhHeadline}px; text-align: center;"
      >
        {@html item.headline}
      </h3>
    </td>
  </tr>
{/if}

{#if item.body.text}
  <tr>
    <td>
      <p
        style="{fontFamily}; font-size: {$fsText}px; line-height: {$lhText}px; color: {$clrText}; text-align: {item
          .body.align};padding: 0px 48px 12px 48px; margin: 0px 0px 0px 0px;"
      >
        {@html item.body.text}
      </p></td
    >
  </tr>
{/if}
