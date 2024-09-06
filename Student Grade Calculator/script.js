let score = prompt("type a number between 1 to 100");
let grade;
 
if(score >= 90 && score <= 100){
   grade = "A"
} else if(score >=80 && score <= 89){
   grade = "B"
} else if(score >= 60 && score <=79){
    grade = "C"
} else if(score >= 35 && score <= 59){
    grade = "E"
} else(
    grade = "F"
)
console.log("Grade ", grade)


// Create a program that determines the grade for a student 
// based on their percentage score. Use a grading scale with 
// ranges like 90-100 for A, 80-89 for B, and so on.
   