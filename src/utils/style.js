function getNumberFromPx(str) {
  return +str.replace('px', '')
}

export function getComputedSize(node) {
  const { width, height } = window.getComputedStyle(node)
  return {
    width: getNumberFromPx(width),
    height: getNumberFromPx(height),
  }
}
