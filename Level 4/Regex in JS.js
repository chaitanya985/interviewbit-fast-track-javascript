https://www.interviewbit.com/problems/regex-in-js/

// DO NOT USE ARGUMENTS FOR INPUTS
// Input num value is in variable *num*
var Str = readLine().trim();
var patt = readLine().trim();
// YOUR CODE GOES HERE

const isPresent = Str.toLowerCase().includes(patt.toLowerCase());

console.log(isPresent);
