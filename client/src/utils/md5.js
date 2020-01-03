const crypro = require('crypto')
const MD5Pre = 'J:DFGEFHLSDFHELNBVNSLHUEalhgaskdjfghear93q40857q34/actions'
const MD5Puffix = 'JDK:SHFJSDagh;asdfgjhewarpiutgeqap38495-127345234tlhdafjghsdjghadfhlga'

export default {
  md5 (str) {
    let o = crypro.createHash('md5')
    o.update(MD5Pre + str + MD5Puffix)
    return o.digest('hex')
  }
}
