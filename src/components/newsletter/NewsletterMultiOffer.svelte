<script>
  import { baseDiscount } from "../../stores/newsletter"
  import {
    clrText,
    clrAccent,
    clrLight,
    clrDiscount,
    clrButtons,
    switchPrices,
  } from "../../stores/styling"
  import { prettyValue, prettyPrice, noBrTags } from "../../helpers/utils"
  import { fontFamily } from "../../helpers/styles"
  import { isImage } from "../../helpers/utils"

  export let offer

  $: productNameNoBr = noBrTags(offer.productName)
  $: priceDiscount =
    offer?.priceFull *
    (1 -
      (offer?.hasIndividualDiscount
        ? offer?.individualDiscount
        : $baseDiscount) /
        100)
  $: pricePerHundred = (priceDiscount / offer?.amount) * 100
</script>

{#if offer && offer.productName.toLowerCase() !== "produkt"}
  <td width="222" valign="top">
    {#if isImage(offer.productImgSrc)}
      <a href={offer.productLink} target="_blank"
        ><img
          src={offer.productImgSrc}
          border="0"
          alt={offer.productImgAlt || productNameNoBr}
          style="margin: 24px 0px 0px 0px"
        /></a
      >
    {/if}
    <h3
      style="
      {fontFamily};
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: {$clrText};
      "
    >
      {@html offer.productName}
    </h3>
    <p
      style="
      {fontFamily};
      font-size: 24px;
      text-align: center;
      color: {$clrDiscount};
      "
    >
      {#if $switchPrices}
        <span
          style="
      {fontFamily};
      color: #000000;
      text-decoration: line-through;
      color: {$clrText};
      font-size: 24px
      "
        >
          <b>{prettyPrice(offer.priceFull)}</b></span
        >
        <b>{prettyPrice(priceDiscount)}</b>
      {:else}
        <b>{prettyPrice(priceDiscount)}</b>
        <span
          style="
        {fontFamily};
        color: #000000;
        text-decoration: line-through;
        color: {$clrText};
        "
        >
          {prettyPrice(offer.priceFull)}</span
        >
      {/if}

      <br />
      <span
        style="
        {fontFamily};
        font-size: 15px;
        color: {$clrLight};
        text-align: center;
      "
        >{prettyValue(offer.amount)}
        {offer.amountUnit} ({prettyPrice(pricePerHundred)} * / 100 {offer.amountUnit})
      </span>
    </p>
    <a
      href={offer.productLink}
      target="_blank"
      style="
      {fontFamily};
      text-align: center;
      text-decoration: none;
      font-size: 20px;
      width: 224px;
      height: 30px;
      display: block;
      padding: 14px 0px 10px 0px;
      margin: 24px 0px 24px 0px;
      color: #ffffff;
      background-color: {$clrButtons};
      border-radius: 9px;
    "><strong>ZUM ANGEBOT</strong></a
    >
  </td>
{/if}
