https://www.interviewbit.com/problems/arrays-in-js/

// DO NOT USE ARGUMENTS FOR INPUTS
// Vaiable size_ is the size of input array.
// Variable array_ stores all the array elements
var size_ = parseInt(readLine().trim());
var array_ = []
for(var i = 0 ; i < size_; i++ ){
    var x = parseInt(readLine().trim());
    array_.push(x);
}
// YOUR CODE GOES HERE

for (var i=0; i<size_; i++){
    
    var New=array_[i]+i;
    
    console.log(New);
}
