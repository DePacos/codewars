// DESCRIPTION:
//   Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.
//
//   Assume: 0 <= n < 2147483647
//
// Examples
// 1  ->           "1"
// 10  ->          "10"
// 100  ->         "100"
// 1000  ->       "1,000"
// 10000  ->      "10,000"
// 100000  ->     "100,000"
// 1000000  ->   "1,000,000"
// 35235235  ->  "35,235,235"



function groupByCommas(n) {
  let result = []
  let arr = n.toString().split('')

  if(n > 999){
    for(let i = 0; i < Math.ceil(n.toString().split('').length / 3) ; i++){
      result.push(arr.splice(-3).join(''))
    }
    return result.reverse().join(',')
  }
  return n.toString()
}