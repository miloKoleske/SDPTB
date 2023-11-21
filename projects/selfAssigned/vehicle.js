// ! Loops
// ? For loops
/* 
Construct for loops that accomplish the following tasks:

Print the numbers 0 - 20, one number per line.

Print only the ODD values from 3 - 29, one number per line.

Print the EVEN numbers 12 down to -14 in descending order, one number per line.

Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.
*/

for (x = 1; x <= 20; x++) {
    console.log(x)
}

for (x = 3; x <= 29; x++) {
    if (x % 2 != 0)
    {console.log(x)}
}

for (x=12; x >= -14; x--) {
    if ((x%2) == 0) {
        console.log(x)
    }
}

for (x=50; x >= 20; x--) {
    if ((x % 3) == 0) {
        console.log(x)
    }
}

/* 
    Initialize two variables to hold the string 'LaunchCode' and the array [1, 5, 'LC101', 'blue', 42], then construct for loops to accomplish the following tasks:

Print each element of the array to a new line.

Print each character of the string---in reverse order---to a new line.
*/

let launch = 'LaunchCode';
let array = [1,5,'LC101', 'blue', 42]


for (i = 0; i <5; i++)
    {let i = array.length
}
console.log(array)


/*
Part 1 
    - Create a class that is meant to create a vehicle.
        - Should have these keys:
            - make, model, no_wheels, color
        - Should have two methods
            - The first method will print (console log):
                "The [color] [make] [model] turns on its engine"
            - The second method will print (console log):
                "The [color] [make] [model] turns off its engine"
    - Create a vehicle using the class and "turn on" and "turn off" the vehicle.
    - Print (console log) the complete object created.
*/

class Vehicle {
    constructor(make, model, no_wheels, color) {
    this.make = make;
    this.model = model;
    this.no_wheels = no_wheels;
    this.color = color;
    }

     engineOn() {
        console.log(`The ${this.color} ${this.make} ${this.model} turns on its engine.`)
    }

    engineOff(){
        console.log(`The ${this.color} ${this.make} ${this.model} turns off its engine.`)
    }
}

let truck = new Vehicle('toyota', 'rav 4', 4, 'silver')
truck.engineOn();
truck.engineOff();


