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
{#if $introParagraphs.length}
  {#each $introParagraphs as p, index}
    <tr>
      <td>
        <p
          style="padding: {index === 0 ? 0 : 15}px 30px {index ===
          $introParagraphs.length - 1
            ? 20
            : 0}px 30px; margin: 0; font-size: {$fsText}px; line-height: {$lhText}px; font-family: Arial; color: {$clrText}; text-align: center;"
        >
          {@html p}
        </p>
      </td>
    </tr>
  {/each}
{/if}
