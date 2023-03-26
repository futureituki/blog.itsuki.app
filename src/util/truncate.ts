export const truncateText = (text: string) => {
  const length = text.length
  if (length <= 120) {
    return text
  } else {
    return text.substring(0, 70) + '...'
  }
}
