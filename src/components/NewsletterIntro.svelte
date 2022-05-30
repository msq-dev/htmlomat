<script>
  import { introHeadline, introParagraphs } from "../stores/newsletter"
  import {
    clrText,
    clrAccent,
    fsHeadline,
    lhHeadline,
    fsText,
    lhText,
  } from "../stores/styling"
</script>

<tr>
  <td>
    <h1
      style="padding: 0 30px 20px 30px; margin: 0; font-size: {$fsHeadline}px; line-height: {$lhHeadline}px; font-family: Arial; color: {$clrAccent}; text-align: center;"
    >
      {@html $introHeadline}
    </h1>
  </td>
</tr>
{#each $introParagraphs as p}
  {#if p}
    <tr>
      <td>
        <p
          style="padding: 0 30px 0 30px; margin: 0; font-size: {$fsText}px; line-height: {$lhText}px; font-family: Arial; color: {$clrText}; text-align: center;"
        >
          {p}
        </p>
      </td>
    </tr>
  {/if}
{/each}
