export const formatDate = (dateValue: string): string => {
  const date = new Date(dateValue)
  const dateFormat = `${date.getDay()} ${date.toLocaleString('es-ES', {
    month: 'long',
  })}, ${date.getFullYear()}`
  return dateFormat
}
