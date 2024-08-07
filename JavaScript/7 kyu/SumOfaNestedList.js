// Description:
//     Implement a function to calculate the sum of the numerical values in a nested list. For example :
//
//     sumNested([1, [2, [3, [4]]]]) => 10



const sumNested = arr => {
    let copyArr = [...arr]
    let arrElem = copyArr.pop()
    let num = Array.isArray(arrElem) ? sumNested(arrElem) : typeof arrElem === 'number' ? arrElem : 0

    if(copyArr.length === 0) return num

    return sumNested(copyArr) + num
};