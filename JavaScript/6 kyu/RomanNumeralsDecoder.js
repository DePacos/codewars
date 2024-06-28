// DESCRIPTION:
//   Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
//
//   Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
//
//   Example:
// "MM"      -> 2000
// "MDCLXVI" -> 1666
// "M"       -> 1000
// "CD"      ->  400
// "XC"      ->   90
// "XL"      ->   40
// "I"       ->    1
// Help:
//   Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000



function solution (roman) {

  const values = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1,
  }

  let result = 0

  for (let i = 0; i < roman.length; i++) {
    let currentVal = values[roman[i]]
    let nextVal = i + 1 < roman.length ? values[roman[i + 1]] : 0

    if (currentVal < nextVal) {
      result += (nextVal - currentVal)
      i++

    } else {
      result += currentVal;
    }
  }
  return result
}