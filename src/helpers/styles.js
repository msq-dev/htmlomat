const URL_NORMAL =
  "https://fonts.gstatic.com/s/opensans/v29/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTSGmu0SC55K5gw.woff2"

const URL_ITALIC =
  "https://fonts.gstatic.com/s/opensans/v29/memtYaGs126MiZpBA-UFUIcVXSCEkx2cmqvXlWqWt06FxZCJgvAQ.woff2"

const style = {
  normal: {
    name: "normal",
    url: URL_NORMAL,
  },
  italic: {
    name: "italic",
    url: URL_ITALIC,
  },
}

function fontFace(name, style, weight) {
  const fontFace = `
  @font-face {
    font-family: ${name};
    font-style: ${style.name};
    font-weight: ${weight};
    font-stretch: 100%;
    font-display: swap;
    src: url(${style.url}) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
  }
    `
  return fontFace
}

export const webFont = "'Open Sans'"
export const normal400 = fontFace(webFont, style["normal"], 400)
export const normal700 = fontFace(webFont, style["normal"], 700)
export const italic400 = fontFace(webFont, style["italic"], 400)
export const italic700 = fontFace(webFont, style["italic"], 700)
export const fontFamily = `font-family: Arial, sans-serif`
// export const fontFamily = `font-family: ${webFont}, Helvetica, Arial, sans-serif`
