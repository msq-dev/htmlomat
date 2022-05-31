<script>
  import { clrText, clrAccent, fsHeadline, lhHeadline } from "../stores/styling"
  export let item
</script>

{#if item.text}
  {#if item.headline}
    <tr>
      <td
        style="padding: 0px 10px 0 10px; font-size: {$fsHeadline}px; line-height: {$lhHeadline}px; font-family: Arial; color: {$clrAccent}; text-align: center;"
      >
        <h1
          style="padding: 10px 50px 10px 50px; font-family: Arial; color: {$clrAccent}; font-size: {$fsHeadline}px; line-height: {$lhHeadline}px; text-align: center;"
        >
          {@html item.headline}
        </h1>
      </td>
    </tr>
  {/if}
  <tr>
    <td
      style="padding: 0; font-size: 17px; line-height: 28px; font-family: Arial; color: {$clrText}; text-align: center;"
    >
      <p style="padding: 0 40px 10px 40px; margin-top: -10px; ">
        {@html item.text}
      </p></td
    >
  </tr>
{/if}
