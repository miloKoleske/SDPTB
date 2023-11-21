/* 
!   Challenge:
    Create 6 different variables. Each one will hold different data types.
        - variable will be detail:
            - First Name - holds a string
            - Last Name - holds a string
            - Birth Year - holds an integer
            - Needs Coffee - holds a boolean
            - The Current Year - holds an integer
            - Age - holds an integer.
                - This should reflect the difference between the current year and birth year. Not a literal.

        These values can be fictional.

            - Console Log Age.
*/

/* 
! Challenge 1: My Process:
(1) Making a datatype of object, because objects can store multiple values, all separated by a line and ','.
(2) Will assign all variables to a character. 
*/

let jotaroKujo = {
    firstName:'Jotaro',
    lastName:'Kujo',
    birthYear:1970,
    needsCoffee: true, // No one has ever needed a nap MORE
    theCurrentYear:2023,
    age: (2023 - 1970),
}
    
console.log(jotaroKujo);
console.log(jotaroKujo.age);
