// everything except body (nav, display, footer) need to have prevent default action to display in flex

// API includes updating products to carts, getting a user's cart, etc.

// ! Global Variables
let apiURL = 'https://fakestoreapi.com/products/'
let storedItem = [];


// ! DOM Elements - creating variables
const category = document.querySelectorAll('button')
//console.log(category);
const electronics = document.getElementById('electronics');
const mensClothing = document.getElementById('mensClothing');
const womensClothing = document.getElementById('womensClothing');
const jewelry = document.getElementById('jewelry');



// ! Functions
const fakeStore = async(endpoint) => {
    const response = await fetch(apiURL + endpoint ); //response will manipulate with endpoint base URL
    const data = await response.json(); // take response from fetch, turn it into json 
    //console.log(data)
    // declaring function - framing is just making it (not invoking)
    displayCards();
    //console.log('test', displayCards)
    }

/* 
Async 
-run rest of code w/out interacting with this one
- only run when button is clicked, consider it like an event based thing
*/

// incorporate parameter endpoint??
//  provide argument that will be the endpoint of the url fetch



// TODO: Add comments that detail the three main steps of creating elements.
// TODO: Display Single Card
// * Create Elements of card
let categoryButton = document.createElement('h3');
let description = document.createElement('p');
let id = document.createElement('h5');
let image = document.createElement('image');
let price = document.createElement('p');
let rating = document.createElement('p');
let title = document.createElement('h1');
let btn = document.createElement('a');
// ! item button = a


//  * Set attributes -- describing all parts in html
card.className = 'card';
card.style.width = '18rem';
img.src = item.img;
img.className = 'card-img-top';
title.className = 'card-title';
title.textContent = item.title;
description.className = 'card-text';
description.textContent = item.description;
cardPrice.className = 'card-price';
cardPrice.textContent = item.price;
cardRating.className = 'card-rating'
cardRating.textContent = item.rating;
btn.className = 'btn btn-primary';
btn.textContent = 'Add to Cart'



/* `<div class="card-body">
<h5 class="card-title">Card title</h5>
<p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
<a href="#" class="btn btn-primary">Text</a>` */

btn.className = 'btn btn-outline-success me-2';




card.className = 'card'; // setting attributes of element, filling element with actual data for the first time, consider it like adding attributes to it
card.style.width = '18rem'; // both card. are utilizing the elements previously created (in create elements section)
img.src = recipe.img; // depends on actual url of recipe (basically still empty)
img.className = 'card-img-top';
img.alt = recipe.title; 
body.className = 'card-body';
title.className = 'card-title';
title.textContent = recipe.title; // changing text to recipe's title
btn.className = 'btn btn-primary';
btn.textContent = 'Add'; // printing out space for button w/ text reading 'Add' 




/* const displayCards = () => {
let category = document.createElement('h3');
let description = document.createElement('p');
let id = document.createElement('h5');
let image = document.createElement('image');
let price = document.createElement('p');
let rating = document.createElement('p');
let title = document.createElement('h1');
} */

// TODO: Create Accordion



// TODO: Display Cart










// ! Event Listeners
// searchDisplay.addEventListener('submit', e=> {
//     e.preventDefault();


// fetch(apiURL)
//             .then(res=>res.json())
//             .then(data => {
//                 let title = data[0].title
//                 // [0] here is limiting us to only the first index
//                 console.log(data[0])


//                 let obj = {
//                     category: data.category,
//                     description: data.description,
//                     id: data.id,
//                     image: data.image,
//                     price: data.price,
//                     rating: data.rating,
//                     title: data.title
//                 }

//                 console.log(obj);
//                 // console.log(data[0].category);
//                 // console.log(data[0].description);
//                 // console.log(data[0].image);
//                 // console.log(data[0].price);
//                 // console.log(data[0].title);
//             })
//             //.then(loadFakeStore())
            
      
//             .catch(error => console.error);
//         //})
// // Invoke fakeStore

electronics.addEventListener('click', e => {
    fakeStore('category/electronics?sort=asc')

}) //define event (on click),
//grab nav button by id, referencing variable at 105, calls endpoint to concatenate on baseURL

womensClothing.addEventListener('click', e => {
    fakeStore(`category/women's%20clothing?sort=asc`)

})
mensClothing.addEventListener('click', e => {
    fakeStore(`category/men's%20clothing?sort=asc`)

})
jewelry.addEventListener('click', e => {
    fakeStore('category/jewelery?sort=asc')

})

window.onload = (e => {
    // when window load, run code
    fakeStore(""); // just baseURL, + nothing
})






            // item === object.title


// when fakestore loads, fire off display card, which will put data into screen, making dynamically in JS, make elements in JS exactly as they are in bootstrap 