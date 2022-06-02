export function noBrTags(text) {
  const brRegex = /<br\s?\/?>/g
  return text.replace(brRegex, " ")
}

export function prettyValue(value) {
  return new Intl.NumberFormat("de-DE", { maximumFractionDigits: 1 }).format(
    value
  )
}

export function prettyPrice(price) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(price)
}

export function todaysDate() {
  const date = new Date()
  const dateOptions = {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric",
  }
  return date.toLocaleDateString("de-DE", dateOptions)
}

export function rgbToHex(htmlString) {
  const rgbRegex = /(rgb\(\d+,\s?\d+,\s?\d+\))/g
  return htmlString.replace(rgbRegex, replacer)

  function replacer(match) {
    const hexValue = match
      .replace(/[rgb()]/g, "")
      .split(",")
      .map((c) => componentToHex(parseInt(c)))
      .join("")

    return `#${hexValue}`
  }

  // courtesy of https://stackoverflow.com/a/5624139
  function componentToHex(c) {
    const hex = c.toString(16)
    return hex.length === 1 ? `0${hex}` : hex
  }
}
