const hasAtLeast = (password, length) => password.length >= length

const isTooSimilar = (password, username) =>
  !new RegExp(username).test(password)

const hasNotSpaces = (password) => /[^\s]/g.test(password)

export const isValidPassword = (password, username) => {
  return (
    hasAtLeast(password, 8) &&
    hasNotSpaces(password) &&
    isTooSimilar(password, username)
  )
}
