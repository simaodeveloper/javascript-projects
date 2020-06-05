export default (numbers) => {
  if (!numbers || numbers.length <= 0) return null

  return (
    numbers.reduce((total, num) => {
      total += num
      return total
    }, 0) / numbers.length
  )
}
