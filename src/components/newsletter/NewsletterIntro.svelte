<script>
  import { introHeadline, introParagraphs } from "../../stores/newsletter"
  import {
    clrText,
    clrAccent,
    fsHeadline,
    lhHeadline,
    fsText,
    lhText,
  } from "../../stores/styling"
  import { fontFamily } from "../../helpers/styles"
</script>

{#if $introHeadline}
  <tr>
    <td>
      <h1
        style="{fontFamily}; padding: 0 30px 20px 30px; margin: 0; font-size: {$fsHeadline}px; line-height: {$lhHeadline}px; color: {$clrAccent}; text-align: center;"
      >
        {@html $introHeadline}
      </h1>
    </td>
  </tr>
  {#if $introParagraphs.length}
    {#each $introParagraphs as p, i}
      <tr>
        <td>
          <p
            style="{fontFamily}; padding: {i === 0 ? '0px' : '12px'} 24px {i ===
            $introParagraphs.length - 1
              ? '24px'
              : '0px'} 24px; margin: 0; font-size: {$fsText}px; line-height: {$lhText}px; color: {$clrText}; text-align: {p.align};"
          >
            {@html p.text}
          </p>
        </td>
      </tr>
    {/each}
  {/if}
{/if}
