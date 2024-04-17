// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
//
// The input string will only consist of lower case letters and/or spaces.



function getCount(str) {
  let ls_vowel = ['a', 'e', 'i', 'o', 'u']
  let ls = str.split('').filter((e) => {
    for (let i = 0; i < ls_vowel.length; i++) {
      if (ls_vowel[i] == e) {
        return e
      }
    }
  })
  return ls.length;
}