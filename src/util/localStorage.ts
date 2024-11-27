export const getQuickStartData = () => {
  const data = localStorage.getItem('quickStart')
  return data ? JSON.parse(data).quickStart : null
}

export const updateQuickStartData = (key: string, value: string) => {
  const data = getQuickStartData()
  if (data) {
    data[key] = value
    localStorage.setItem('quickStart', JSON.stringify({ quickStart: data }))
  }
}
