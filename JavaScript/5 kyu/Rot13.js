// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
//   Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".



function rot13(message){
  let result = message.split('').map(l => {
    if(l >= 'A' && l <= 'Z'){
      return String.fromCharCode(((l.charCodeAt(0) - 65 + 13) % 26) + 65);
    }
    if(l >= 'a' && l <= 'z'){
      return String.fromCharCode(((l.charCodeAt(0) - 97 + 13) % 26) + 97);
    }
    return l
  })
  return result.join('')
}