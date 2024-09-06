// Write a program that checks if a given number is prime. A prime number is a 
// natural number greater than 1 that has no positive divisors other than 1 and itself. 

let num = prompt("type a number");

if (num <=1){
    console.log("not a prime number");
} else if(num === 2 || num === 3 || num === 5 ){
    console.log("Is a prime number");
} else if(num % 2 == 0){
    console.log("It is not a prime number");
} else if(num % 3 == 0){
    console.log("It is not a prime number")
} else if(num % 5 == 0){
    console.log("it is not a prime number")
} else if(num % 7 == 0){
    console.log("It is not a prime number")
} else{
    console.log("It is a prime number")
}


// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 
// 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97