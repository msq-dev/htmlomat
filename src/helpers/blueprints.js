export const singleOffer = {
  type: "singleOffer",
  productName: "PRODUKT",
  productLink: "",
  productImgSrc: "",
  productImgAlt: "",
  productDesc: { text: "", align: "center" },
  priceFull: 0,
  hasIndividualDiscount: false,
  individualDiscount: 0,
  amount: 0,
  amountUnit: "",
  ctaText: "",
}

export const contentImage = {
  type: "contentImage",
  imageUrl: "",
  imageAltText: "",
  imageLinkTo: "",
}

export const contentTextBlock = {
  type: "contentTextBlock",
  headline: "",
  body: {
    text: "",
    align: "center",
  },
}

export const contentHtml = {
  type: "contentHtml",
  content: `<td></td>`,
}
