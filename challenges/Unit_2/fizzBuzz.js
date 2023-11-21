/* 

    Write a program that uses a loop, conditionals, and console log to print all the numbers from 1 to 30 inclusive and follows the rules below: 

    1. For numbers evenly divisible by 3, print "Fizz" instead of the number.

    2. For numbers evenly divisible by 5, print "Buzz" instead of the number.

    3. For numbers that are evenly divisible by both 3 and 5, print "Fizz Buzz" instead of the number, making sure that the program still prints "Fizz" or "Buzz" for numbers divisible by only 3 or 5 and not both.

    4. For any number that is not divisible by either 3 or 5, print the number itself.
*/

// Carlos, Chabri, Milo

for (i = 1; i <=30; i++) {
    if (i % 3 == 0) {
        console.log("fizz");
    } if (i% 5 == 0) {
        console.log('buzz')
    } if (i % 3 == 0 && i % 5 == 0) {
        console.log('fizzbuzz');
    } else if (i%3 !=0 && i%5 !=0) {
        console.log(i);
    }
}

// Eric 

for( let i =1; i <=30; i++) {
    if(i % 15 === 0) {
        console.log('fizz buzz')
    } else if(i % 3 ===0) {
        console.log('fizz')
    } else if(i % 5 === 0) {
        console.log('buzz')
    } else {
        console.log(i)
    }
}







