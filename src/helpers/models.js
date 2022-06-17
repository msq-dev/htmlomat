import { v4 as uuidv4 } from "uuid"

class ContentBlock {
  constructor() {
    this.id = uuidv4()
    this.padding = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }
    this.margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    }
  }
}

export class Product extends ContentBlock {
  constructor(isSingle) {
    super()
    this.type = "product"
    this.isSingle = isSingle || false
    this.name = "PRODUKT"
    this.href = ""
    this.imgSrc = ""
    this.imgAlt = ""
    this.desc = { text: "", align: "center" }
    this.priceFull = 0
    this.hasIndividualDiscount = false
    this.individualDiscount = 0
    this.amount = 0
    this.amountUnit = "g"
    this.ctaText = ""
  }
}

export class Image extends ContentBlock {
  constructor() {
    super()
    this.type = "image"
    this.imgSrc =
      "https://www.manuka-honig.de/media/image/67/71/9f/footer-biene-faqjpg.jpg"
    this.imgAlt = ""
    this.href = ""
  }
}

export class Text extends ContentBlock {
  constructor() {
    super()
    this.type = "text"
    this.text = "TEXT"
    this.align = "center"
    this.fontSize = 14
    this.fontWeight = "normal"
  }
}

// export const contentProduct = {
//   type: "singleOffer",
//   productName: "PRODUKT",
//   productLink: "",
//   productImgSrc: "",
//   productImgAlt: "",
//   productDesc: { text: "", align: "center" },
//   priceFull: 0,
//   hasIndividualDiscount: false,
//   individualDiscount: 0,
//   amount: 0,
//   amountUnit: "",
//   ctaText: "",
// }

// export const contentImage = {
//   type: "contentImage",
//   imageUrl: "",
//   imageAltText: "",
//   imageLinkTo: "",
// }

// export const contentText = {
//   type: "contentTextBlock",
//   headline: "",
//   body: {
//     text: "",
//     align: "center",
//   },
// }

export const contentHtml = {
  type: "contentHtml",
  content: `<td></td>`,
}
