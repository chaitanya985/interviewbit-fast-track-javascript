https://www.interviewbit.com/problems/js-objects/

// DO NOT USE ARGUMENTS FOR INPUTS
// Object created as per following code, You have to just print the subject name having highest marks.
/*
var Stud = new Object();
Stud.Maths = parseInt(readLine().trim());
Stud.Physics = parseInt(readLine().trim());
Stud.Chemistry = parseInt(readLine().trim());
*/
// YOUR CODE GOES HERE

var subject="";

if (Stud.Maths > Stud.Physics && Stud.Maths > Stud.Chemistry){
    
    subject="Maths";
    
}else if (Stud.Physics > Stud.Maths && Stud.Physics > Stud.Chemistry){
    
    subject="Physics";
}
else{
    subject="Chemistry";
}

console.log(subject);
