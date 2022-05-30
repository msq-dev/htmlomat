<script>
  import {
    clrText,
    clrAccent,
    clrLight,
    clrDiscount,
    fsText,
    lhText,
  } from "../stores/styling"
  import { prettyPrice, prettyValue } from "../utils/utils"

  export let item = {}

  $: nameNoHtml = item.productName
  $: priceDiscount = item.priceFull * (1 - item.individualDiscount / 100)
  $: pricePerHundred = (priceDiscount / item.amount) * 100
</script>

<tr>
  <td
    style="font-size: 20pt; font-weight: bold; letter-spacing: 0.0em; line-height: 30px; font-family: Arial; color: {$clrText}; text-align: center; padding-top: 40px;"
  >
    {@html item.productName}</td
  >
</tr>

<tr>
  <td height="394">
    <a href={item.productLink}
      ><img
        src={item.productImgSrc}
        title={nameNoHtml}
        alt={item.productImgAlt}
      /></a
    >
  </td>
</tr>

<tr>
  <td
    style="padding: 20px 40px 0 40px; font-size: {$fsText}px; line-height: {$lhText}px; font-family: Arial; color: {$clrText}; text-align: center;"
  >
    <p>
      {item.productDesc}
    </p>
  </td>
</tr>

<tr>
  <td>
    <p
      style="padding: 20px 60px 20px 60px; font-size: {$fsText *
        1.1}px; line-height: {$lhText *
        1.3}px; font-family: Arial; text-align: center;"
    >
      <span style="color: {$clrAccent};"
        ><strong
          >✔ Lindert spröde & trockene Lippen<br />
          ✔ Versorgt die Lippen mit viel Feuchtigkeit <br />durch hochwertige
          Öle<br />
          ✔ 100% natürlich - ohne Zusatz von Duft- und Farbstoffen<br />
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
