const code = '01234567890qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM'

export default function randomCode () {
  let length = code.length - 1
  let arr = [0, 0, 0, 0].map(item => code[Math.floor(Math.random() * length)]).join('')
  return arr
}
