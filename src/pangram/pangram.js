const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

export const isPangram = (string) => {
  const phrase = string
    .replace(/\s|[^A-Za-z]/g, '')
    .replace(/[A-Z]/g, (m) => m.toLowerCase())
    .split('')
  return alphabet.every((letter) => phrase.includes(letter))
}
