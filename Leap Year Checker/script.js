// Create a program that determines whether a given year is a leap year.
// Remember that a leap year is divisible by 4, but not by 100, unless 
// it's also divisible by 400.

let year = prompt("Type a year")

  if (year % 400 === 0){
     console.log("It is a leap year")
  } else if (year % 100 == 0){
     console.log("It is not a leap year")
  } else if (year % 4 === 0){
     console.log("It is a leap year")
  } else{
     console.log("It is not a leap year")
  }

// If a year is divisible by 4 it considers as a leap year 
// but not the century year unless it is divisible by 400.



