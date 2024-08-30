// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number,
// return the largest number among them.
//
//     Note: no empty arrays will be given.
//
//     Examples
//     [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
//     [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
//     [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3



function highestRank(arr){
    let counter = 0
    let result
    let sortArr = [... new Set(arr)].sort((a, b) => b - a)

    let obj = arr.reduce((acc, current) => {
        acc[current] ? acc[current] += 1 : acc[current] = 1
        return acc
    }, {})

    for(let i of sortArr){
        if(obj[i] > counter){
            counter = obj[i]
            result = i
        }
    }

    return result
}