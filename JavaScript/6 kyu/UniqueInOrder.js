// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
//   For example:
//
//   uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]



let uniqueInOrder=function(iterable){
  if(Array.isArray(iterable)){
    return iterable.filter((e, i, a) => e !== a[i + 1] ? e : null)
  }
  return iterable.split('').filter((e, i, a) => e !== a[i + 1] ? e : null)
}