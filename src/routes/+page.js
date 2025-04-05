

/*
   Name: Ronald Kiefer
   Date: 4/5/25
        Saturday 1:00 AM
   Description: This is the page.js file for the 
   SvelteKit application. It contains the load 
   function that fetches data.

*/


export const load = async () => {

   
    return {


        product: 'iPhone 14',
        price: 999,
        description: 'Latest iPhone model with A16 chip and improved camera',
        image: 'https://example.com/iphone14.jpg'



    }
    
   


}


