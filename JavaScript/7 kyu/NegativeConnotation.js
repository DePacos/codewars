// You will be given a string with sets of characters, (i.e. words), seperated by between one and four spaces (inclusive).
//
//   Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z").
//
//   Return True/true if there are more (or equal) positive words than negative words, False/false otherwise.
//
// "A big brown fox caught a bad rabbit" => True/true
// "Xylophones can obtain Xenon." => False/false



function connotation(str) {
  let trueQuantity = 0
  let falseQuantity = 0
  const words = str.toLowerCase().split(' ').filter(w => w !== '' ? w : null)
  const middleCharCode = Math.floor(('a'.charCodeAt(0) + 'z'.charCodeAt(0)) / 2);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.charCodeAt(0) <= middleCharCode) {
      trueQuantity += 1;
    } else {
      falseQuantity += 1;
    }
  }

  return trueQuantity >= falseQuantity;
}