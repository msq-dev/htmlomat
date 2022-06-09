<script>
  import {
    clrText,
    clrAccent,
    clrLight,
    clrDiscount,
    fsText,
    lhText,
    switchPrices,
  } from "../../stores/styling"
  import { prettyPrice, prettyValue, noBrTags } from "../../helpers/utils"
  import { fontFamily } from "../../helpers/styles"

  export let item = {}

  $: productNameNoBr = noBrTags(item.productName)
  $: priceDiscount = item.priceFull * (1 - item.individualDiscount / 100)
  $: pricePerHundred = (priceDiscount / item.amount) * 100
</script>

{#if item.productName.toLowerCase() !== "produkt"}
  {#if item.productName}
    <tr>
      <td
        style="{fontFamily}; font-size: 24px; font-weight: bold; line-height: 32px; color: {$clrText}; text-align: center; padding: 24px 0px 12px 0px;"
      >
        {@html item.productName}</td
      >
    </tr>
  {/if}

  <tr>
    <td height="394">
      <a href={item.productLink}
        ><img
          src={item.productImgSrc}
          title={productNameNoBr}
          alt={item.productImgAlt || productNameNoBr}
        /></a
      >
    </td>
  </tr>

  {#if item.productDesc.text}
    <tr>
      <td
        style="{fontFamily}; padding: 0px 48px 0 48px; font-size: {$fsText}px; line-height: {$lhText}px; color: {$clrText}; text-align: {item
          .productDesc.align};"
      >
        <p>
          {@html item.productDesc.text}
        </p>
      </td>
    </tr>
  {/if}

  <tr>
    <td
      style="{fontFamily}; padding: 0; font-size: 17px; line-height: 24px; color: {$clrText}; text-align: center;"
    >
      <p style="text-align: center;">
        <strong>
          {#if $switchPrices}
            <span
              style="font-size: 36px; text-decoration: line-through; color: {$clrText};"
            >
              {prettyPrice(item.priceFull)}</span
            >

            &nbsp;

            <span style="font-size: 28px; color: {$clrDiscount};"
              >{prettyPrice(priceDiscount)}</span
            >
          {:else}
            <span style="font-size: 30px; color: {$clrDiscount};"
              >{prettyPrice(priceDiscount)}</span
            >
            &nbsp;
            <span
              style="font-size: 30px; text-decoration: line-through; color: {$clrText};"
            >
              {prettyPrice(item.priceFull)}</span
            >
          {/if}
        </strong><br />
        <span style="font-size: 15px; color: {$clrLight};"
          >{prettyValue(item.amount)}
          {item.amountUnit} ({prettyPrice(pricePerHundred)} * / 100 {item.amountUnit})</span
        >
      </p>
    </td>
  </tr>

  {#if item.ctaText}
    <tr>
      <td>
        <table cellspacing="0" cellpadding="0" border="0">
          <tbody
            ><tr>
              <td width="140" height="110">&nbsp;</td>
              <td width="305" valign="top" height="110">
                <a
                  href={item.productLink}
                  target="_blank"
                  style="
                    {fontFamily};
                    font-size: 26px;
                    letter-spacing: 0px;
                    width: 278px;
                    height: 30px;
                    display: block;
                    padding: 20px 0px 20px 0px;
                    margin: 24px 0px 48px 0;
                    color: #ffffff;
                    text-align: center;
                    text-decoration: none;
                    background-color: {$clrAccent};
                    border-radius: 9px;"
                >
                  <strong>{item.ctaText}</strong>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  {/if}
{/if}
