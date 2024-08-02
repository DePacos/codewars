// Description:
//     Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
//
// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s



function pyramid(n) {
    let result = []

    for(let i = 1; i <= n; i++){
        let arr = []
        let count = 0

        while(i !== count){
            arr.push(1)
            count += 1
        }

        result.push(arr)
    }
    return result
}