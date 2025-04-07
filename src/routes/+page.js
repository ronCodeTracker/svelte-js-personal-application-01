

/*
   Name: Ronald Kiefer
   Date: 4/5/25
        Saturday 1:00 AM
   Description: This is the page.js file for the 
   SvelteKit application. It contains the load 
   function that fetches data.

*/

//import people from '$lib/data/people.json';
//const people = require('$lib/data/people.json');



//const peopleString = JSON.stringify(people);
//console.log(peopleString);



export const load = async () => {

   
    return {


        product: 'iPhone 14',
        price: 999,
        description: 'Latest iPhone model with A16 chip and improved camera',
        image: 'https://example.com/iphone14.jpg'



    }
    
   


}


