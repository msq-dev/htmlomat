<script>
  import {
    clrText,
    clrAccent,
    clrLight,
    clrDiscount,
    fsText,
    lhText,
  } from "../../stores/styling"
  import { prettyPrice, prettyValue, noBrTags } from "../../helpers/utils"

  export let item = {}

  $: productNameNoBr = noBrTags(item.productName)
  $: priceDiscount = item.priceFull * (1 - item.individualDiscount / 100)
  $: pricePerHundred = (priceDiscount / item.amount) * 100
</script>

{#if item.productName}
  <tr>
    <td
      style="font-size: 20pt; font-weight: bold; letter-spacing: 0.0em; line-height: 40px; font-family: Arial; color: {$clrText}; text-align: center; padding-top: 40px;"
    >
      {@html item.productName}</td
    >
  </tr>

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

  {#if item.productDesc}
    <tr>
      <td
        style="padding: 0 40px 0 40px; font-size: {$fsText}px; line-height: {$lhText}px; font-family: Arial; color: {$clrText}; text-align: {item
          .productDesc.align};"
      >
        <p>
          {@html item.productDesc.text}
        </p>
      </td>
    </tr>
  {/if}

  <tr>
    <td>
      <p
        style="padding: 0 60px 0 60px; font-size: {$fsText *
          1.1}px; line-height: {$lhText *
          1.3}px; font-family: Arial; text-align: center;"
      >
        <span style="color: {$clrAccent};"
          ><strong
            >✔ Lindert spröde & trockene Lippen<br />
            ✔ Versorgt die Lippen mit viel Feuchtigkeit <br />durch hochwertige
            Öle<br />
            ✔ 100% natürlich &ndash; ohne Zusatz von Duft- und Farbstoffen<br />
            ✔ Frei von Parabenen, Mineralölen oder Silikonen</strong
          ></span
        ><br />
      </p>
    </td>
  </tr>

  <tr>
    <td
      style="padding: 0; font-size: 17px; line-height: 28px; font-family: Arial; color: {$clrText}; text-align: center;"
    >
      <p style="color: {$clrDiscount}; font-size: 30px; text-align: center;">
        <strong
          >{prettyPrice(priceDiscount)}
          <span style="text-decoration: line-through; color: {$clrText};">
            {prettyPrice(item.priceFull)}</span
          ></strong
        ><br />
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
                  style="width: 278px; height: 30px; display: block; margin: 20px 0 70px 0; padding: 20px; color: #ffffff; text-align: center; text-decoration: none; background-color: {$clrAccent}; font-size: 25px; border-radius: 9px;"
                  ><strong>{item.ctaText}</strong></a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  {/if}
{/if}
