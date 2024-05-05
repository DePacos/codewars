// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
//   Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



function pigIt(str){
  let result = str.split(' ').map((e) => {
    if(/[a-zA-Z]/.test(e)){
      e = e.slice(1) + e[0] + 'ay'
    }
    return e
  })
  return result.join(' ')
}