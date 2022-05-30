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
