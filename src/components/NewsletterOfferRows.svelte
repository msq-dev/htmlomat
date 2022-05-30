<script>
  import { onMount } from "svelte"
  import { mailOffers } from "../stores/newsletter"
  import NewsletterMultiOffer from "./NewsletterMultiOffer.svelte"

  let chunksArray = []

  onMount(() => {
    if ($mailOffers.length) {
      for (let i = 0; i < $mailOffers.length; i += 2) {
        const chunk = $mailOffers.slice(i, i + 2)
        chunksArray = [...chunksArray, chunk]
      }
    }
  })
</script>

{#if chunksArray.length}
  {#each chunksArray as chunk}
    {#if chunk.length === 1}
      <tr
        ><td
          ><table border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td width="51">&nbsp;</td>
              <NewsletterMultiOffer offer={chunk[0]} />
              <td width="33">&nbsp;</td>
            </tr>
          </table></td
        ></tr
      >
    {:else}
      <tr
        ><td
          ><table border="0" cellpadding="0" cellspacing="0">
            <tr>
              <td width="51">&nbsp;</td>
              <NewsletterMultiOffer offer={chunk[0]} />
              <td width="33">&nbsp;</td>
              <NewsletterMultiOffer offer={chunk[1]} />
            </tr>
          </table></td
        ></tr
      >
    {/if}
  {/each}
{/if}
