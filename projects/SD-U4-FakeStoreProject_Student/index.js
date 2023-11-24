// everything except body (nav, display, footer) need to have prevent default action to display in flex

// API includes updating products to carts, getting a user's cart, etc.

// ! Global Variables
// ! API url needs value
const apiURL = '...'; 
let userCart = [];

// ! DOM Elements
const category = document.querySelector('btn btn-outline-success me-2')
console.log(category);

// ! Functions
// TODO: Display Single Card

let card = document.createElement('display');
let

// TODO: Display Cart










// ! Event Listeners


fetch(baseURL)
            .then(res=>res.json())
            .then(json=>console.log(json))