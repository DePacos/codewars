// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.



function isPangram(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newAlphabet = alphabet.filter((e) => checkElem(e))

  function checkElem(e){
    for(let i = 0; i < string.length; i++){
      if(e == string[i].toLowerCase()){
        return e
      }
    }
  }
  if(newAlphabet.length == 26){
    return true
  }else{
    return false
  }
}