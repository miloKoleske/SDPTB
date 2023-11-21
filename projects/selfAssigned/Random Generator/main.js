/* 
    Design a webpage that randomly generates a name
*/

/* 
    Design a webpage that randomly generates a link to a wiki page
*/

// Use Fetch API

 async function fetchData(url) {
     try {
         const response = await fetch(url);
         if (!response.ok) {
             throw new Error(`No network response :'(`);
         }
     return response.json();
     } catch (error) {
         console.log(`Unable to fetch`);
     }
 }

 function fetchNames(fantasy) {
     return fetchData(names.json);
}

// // if (typeof fetchData != "undefined") {
// //     console.log("success")
// // }

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function generateName(surname) {
  firstNames = fetchNames(pickRandom);
}

return `${firstName}`;