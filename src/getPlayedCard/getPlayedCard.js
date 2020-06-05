const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A']
const suits = ['clubs', 'spades', 'hearts', 'diamonds']

const getRandomNumberByMax = (max) => Math.floor(Math.random() * max)

export const getCard = () => {
  return {
    value: values[getRandomNumberByMax(values.length)],
    suit: suits[getRandomNumberByMax(suits.length)]
  }
}
