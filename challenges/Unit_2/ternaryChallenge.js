/* 
    Rework the if/else challenge as a ternary.

    Spicy: try to rework the switch condition as a ternary.
*/

/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let name3 = 'Tyler Case'
let age = 15;
age = 18;
age = 25;
if (age <= 17 ) {
        console.log(`Sorry ${name3}, you're too young to do anything.` )
    } else if (age <= 18) {
        console.log(`You can vote!`);
    } else if (age <= 21) {
        console.log(`You can drink!`);
    } else
        {console.log(`You can rent a car!`)}


const age2 = 15

const age2Limit = 
    age2 <= 17 ? `Sorry ${name3}, you're too young to do anything.`
    : age2 <= 18 ? `You can vote, ${name3}!`
    : age2 <= 21 ? `You can drink!`
    : `You can rent a car!`

    console.log(age2Limit);



