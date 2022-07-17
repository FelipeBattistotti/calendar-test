const af = require("../locales/af")
const enAu = require("../locales/enAu")
const fr = require("../locales/fr")
const ptBr = require("../locales/ptBr")

/**
 * 
 * @param localeName string
 * @returns locale object
 */
const returnsLocale = (localeName = '') => {
  let locale = null

  switch (localeName) {
    case "af":
      locale = af
      break
    case "en-au":
      locale = enAu
      break
    case "fr":
      locale = fr
      break
    case "pt-br":
      locale = ptBr
      break
    default:
      locale = ptBr
  }

  return locale
}

module.exports = { returnsLocale }