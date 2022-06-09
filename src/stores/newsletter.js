import { writable } from "svelte/store"
import { todaysDate } from "../helpers/utils"
import { BASE_URL } from "./editor"

export const nameCompany = writable("Manuka")

export const mailTitle = writable(`Ihr Newsletter vom ${todaysDate()}`)
// export const landingpage = writable(BASE_URL + "/landingpage")
export const landingpage = writable("https://www.manuka-honig.de/angebote")
export const heroImgSrc = writable(
  "https://www.manuka-honig.de/media/image/48/9e/2f/newsletter-manuka-health-hautpflege-header.jpg"
)

export const heroImgAlt = writable("Ohne Honich? Ohne mich!")

export const introHeadline = writable("Herzlich Lorem bei Ipsum!")
export const introParagraphs = writable([
  {
    text: "Warum verlebt Sie daß ziemlich bewegen, was Thomas in fest Wesen. Nie Sie Bekanntschaft seine zu Internet eigentlich ihn, die will geringste Hemd eingeliefert. Oliver Bestechung alles zu Decke. Mit zwar den sich zu Chancen, der war über Stock das an im, sich möglichst werden bloß würden Spaß.",
    align: "left",
  },
  {
    text: "Das sieht beisammen sie benommen waren, stand Nase dem Vorgang gewonnen. Das auf mit setzte dieser Morgens, was diesmal immer zurück Ende. Ich eingeleitet er jenes dies erreichte wohin vernehmen er knapp, läutete über bereiteten Unterstützung seines.",
    align: "center",
  },
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
    productDesc: {
      text: "Der <b>Lippenbalsam</b> ist der perfekte Begleiter bei trockenen und spröden Lippen. Die Kombination aus dem hochwertigen <b>MGO 250+ Manuka Honig</b> und den wertvollen Inhaltsstoffen wie Jojobaöl, Weizenkeimöl, Kakaobutter und Bienenwachs bringen deine Lippen wieder zum Strahlen und machen sie wieder geschmeidig weich.",
      align: "center",
    },
    priceFull: 8.9,
    hasIndividualDiscount: true,
    individualDiscount: 20,
    amount: 4.5,
    amountUnit: "g",
    ctaText: "ZUM PRODUKT",
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
    body: {
      text: "Der Ihnen sein es der solche. Ich verschiedenen heute niedrigem Börse des, das der Dienste Jahre dafür ein, das geringste für aber begleitet. Parallel irgendeine nach stehengeblieben gestiftet, und Weilchen weiter seine Händen Kopf, ob leicht haben nun Jungen, wohl Prozesse zurückgeben überfallen dem sich Privatisierung, denkend seine zu einigen.",
      align: "left",
    },
    id: "lkwjt934ni943nn4-3345634",
  },
  {
    type: "contentTextBlock",
    headline: "",
    body: {
      text: "Die Blick sie sein Kinde Sache die, dessen hätte und unternehmerisch dem, ohne Sie Börsenkurse wiederum die war. Er nun höchst ist eine seinem, es mit Gewerkschaften die Franz aufatmend, wenn ins halb Zeit gehen, ohne einmal mir den saß.",
      align: "right",
    },
    id: "lkwjt934ndfughdfuihg5634",
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
    productImgAlt: "",
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
    productImgAlt: "",
    priceFull: 123.45,
    hasIndividualDiscount: true,
    individualDiscount: 20,
    amount: 65,
    amountUnit: "ml",
    id: "dosdfigh-sdhgf-845sdgsd7bsd",
  },
])
