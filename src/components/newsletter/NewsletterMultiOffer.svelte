<script>
  import { baseDiscount } from "../../stores/newsletter"
  import {
    clrText,
    clrAccent,
    clrLight,
    clrDiscount,
    clrButtons,
  } from "../../stores/styling"
  import { prettyValue, prettyPrice, noBrTags } from "../../helpers/utils"

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

{#if offer}
  <td width="222" valign="top">
    <a href={offer.productLink} target="_blank"
      ><img
        src={offer.productImgSrc}
        border="0"
        alt={offer.productImgAlt || productNameNoBr}
        style="margin-top: 20px"
      /></a
    >
    <h3
      style="
      text-align: center;
      font-size: 20px;
      color: {$clrText};
    "
    >
      {@html offer.productName}
    </h3>
    <p
      style="
      color: {$clrDiscount};
      font-size: 20px;
      text-align: center;
    "
    >
      <b>{prettyPrice(priceDiscount)}</b>
      <span
        style="
        color: #000000;
        text-decoration: line-through;
        color: {$clrText};
      "
      >
        {prettyPrice(offer.priceFull)}</span
      ><br />
      <span
        style="
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
      width: 224px;
      height: 30px;
      display: block;
      margin: 20px 0 20px 0;
      padding: 16px 0 10px 0;
      color: #ffffff;
      text-align: center;
      text-decoration: none;
      background-color: {$clrButtons};
      font-size: 20px;
      border-radius: 9px;
    "><strong>ZUM ANGEBOT</strong></a
    >
  </td>
{/if}
