// DESCRIPTION:
//   Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
//
//   Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point
// A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
//
//   Example scoring
//
// Throw       Score
// ---------   ------------------
//   5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
// 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
// 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
// Note: your solution must not modify the input array.



function score( dice ) {
  let total = 0
  let numQuantity = dice.reduce((acc, num) => {
    acc[num] ? acc[num] += 1 : acc[num] = 1
    return acc
  }, {})

  for(let k in numQuantity){
    if(numQuantity[k] >= 3){
      if(k !== '1' && k !== '5'){
        total += +k * 100
      }
    }
    if(k === '5'){
      numQuantity[k] === 1
        ? total += 50: numQuantity[k] === 2
          ? total += 100: numQuantity[k] === 3
            ? total += 500: numQuantity[k] === 4
              ? total += 550: numQuantity[k] === 5
                ? total += 600: ''
    }
    if(k === '1'){
      numQuantity[k] === 1
        ? total += 100: numQuantity[k] === 2
          ? total += 200: numQuantity[k] === 3
            ? total += 1000: numQuantity[k] === 4
              ? total += 1100: numQuantity[k] === 5
                ? total += 1200: ''
    }
  }
  return total
}