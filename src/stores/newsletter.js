import { writable } from "svelte/store"
import { todaysDate } from "../utils/utils"

export const nameCompany = writable("Manuka")

export const mailTitle = writable(`Ihr Newsletter vom ${todaysDate()}`)
export const offerPage = writable("https://www.manuka-honig.de/angebote/")
export const heroImgSrc = writable(
  "https://www.manuka-honig.de/media/image/48/9e/2f/newsletter-manuka-health-hautpflege-header.jpg"
)

export const heroImgAlt = writable("Manuka Matata")

export const introHeadline = writable("Herzlich Lorem bei Ipsum!")
export const introParagraphs = writable([
  "Warum verlebt Sie daß ziemlich bewegen, was Thomas in fest Wesen. Nie Sie Bekanntschaft seine zu Internet eigentlich ihn, die will geringste Hemd eingeliefert. Oliver Bestechung alles zu Decke. Mit zwar den sich zu Chancen, der war über Stock das an im, sich möglichst werden bloß würden Spaß.",
])

export const contentMain = writable([
  {
    type: "singleOffer",
    productName: "Example<br>Manuka Honig Lippenbalsam<br>MGO 250+ 4,5 g",
    productLink:
      "https://www.manuka-honig.de/manuka-health-manuka-honig-lippenbalsam-mgo-250-4-5-g-c",
    productImgSrc:
      "https://www.manuka-honig.de/media/image/18/31/13/newsletter-manuka-health-hautpflege-lippenpflege.jpg",
    productImgAlt: "",
    productDesc:
      "Der Lippenbalsam ist der perfekte Begleiter bei trockenen und spröden Lippen. Die Kombination aus dem hochwertigen MGO 250+ Manuka Honig und den wertvollen Inhaltsstoffen wie Jojobaöl, Weizenkeimöl, Kakaobutter und Bienenwachs bringen deine Lippen wieder zum Strahlen und machen sie wieder geschmeidig weich.",
    priceFull: 8.9,
    hasIndividualDiscount: false,
    individualDiscount: 20,
    amount: 4.5,
    amountUnit: "g",
    ctaButtonText: "ZUM PRODUKT",
    id: "kn345n34-43653k46h",
  },
  {
    type: "contentImage",
    imageUrl:
      "https://www.manuka-honig.de/media/image/13/1e/14/newsletter-manuka-health-lippe.jpg",
    imageAltText: "",
    imageLinkTo:
      "https://www.manuka-honig.de/manuka-health-manuka-honig-lippenbalsam-mgo-250-4-5-g-c",
    id: "wjht34u58bgjr-2458jjvnd",
  },
  {
    type: "contentTextBlock",
    headline: "Den ganzen Tag lang ganz viel Honig essen",
    text: "Der Ihnen sein es der solche. Ich verschiedenen heute niedrigem Börse des, das der Dienste Jahre dafür ein, das geringste für aber begleitet. Parallel irgendeine nach stehengeblieben gestiftet, und Weilchen weiter seine Händen Kopf, ob leicht haben nun Jungen, wohl Prozesse zurückgeben überfallen dem sich Privatisierung, denkend seine zu einigen Entstehen Wächter plötzlich, daß nicht mit das zwar.",
    id: "lkwjt934ni943nn4-3345634",
  },
])

export const ctaBtnText = writable("ZUM ANGEBOT")
export const baseDiscount = writable(16)
export const mailOffers = writable([
  {
    productLink:
      "https://www.manuka-honig.de/manuka-health-manuka-honig-lippenbalsam-mgo-250-4-5-g-c",
    productImgSrc:
      "https://www.manuka-honig.de/media/image/4d/86/6a/nl-oster-rabatte-kanuka-balsam.jpg",
    productName: "Example's 3er Pack Mix Manuka Honig Lutschbonbons",
    productImgAlt: "Product Image Alt Text",
    priceFull: 47.11,
    hasIndividualDiscount: false,
    individualDiscount: 16,
    amount: 200,
    amountUnit: "g",
    id: "dofigh-rgtoeurh-8457bsd",
  },
  {
    productLink:
      "https://www.manuka-honig.de/kanuka-geschenkset-mit-kanukaoel-10ml-kanuka-balsam-13g-inkl.-broschuere-c",
    productImgSrc:
      "https://www.manuka-honig.de/media/image/5f/39/07/nl-oster-rabatte-haddrells-3er-set-bonbons.jpg",
    productName: "Example's Starterset Manuka Honig MGO 250+ (250g) + Bonbons",
    productImgAlt: "Product Image Alt Text",
    priceFull: 123.45,
    hasIndividualDiscount: false,
    individualDiscount: 16,
    amount: 65,
    amountUnit: "ml",
    id: "dosdfigh-sdhgf-845sdgsd7bsd",
  },
])
