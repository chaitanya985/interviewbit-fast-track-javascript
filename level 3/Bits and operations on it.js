https://www.interviewbit.com/problems/bits-and-operations-on-it/

// DO NOT USE ARGUMENTS FOR INPUTS
// Input num valus is in variable *num*
var num = parseInt(readLine().trim());
// YOUR CODE GOES HERE

var res=num^(num|(~num));

console.log(res);
