




<script>

    import RonsWeb from '$lib/assets/RonsWeb.gif';
    import RonsWeb2 from '$lib/assets/skate02.gif';
    
    
    //import people from '$lib/data/people.json';
   

    //console.log('people', people);


    //let isMenuOpen = true;

   // function toggleMenu() {
   //     isMenuOpen = !isMenuOpen;
   // }

//   from old private app


//    name: Ronald Kiefer
//    date: July 22, 2021
//    ר ו נ  א ל ד 
//    description:  updated javascript personal website



let selectedScripture = ''; // Variable to hold the selected value

//    name: Ronald Kiefer
//    date: July 22, 2021
//    update: April 7, 2025
//    ר ו נ  א ל ד 
//    description:  updated javascript personal website

import scriptureData from '$lib/data/scripture.json';
//var scriptures = JSON.parse(scripturejson);
console.log('scriptures', scriptureData);

//let jsonObject = JSON.parse(scriptureData);
var RevMessage = scriptureData.scripture[0].RevMessage;
var ZachMessage = scriptureData.scripture[1].ZachMessage;
var JerMessage = scriptureData.scripture[2].JerMessage;
var ProvMessage = scriptureData.scripture[3].ProvMessage;



let isOn = false;

  function toggle() {
    isOn = !isOn;
  }


  export let data;
  console.log('data', data);
  


    let showMenu = false;

  function toggleNavbar() {
    showMenu = !showMenu;
  }




</script>

<div class="bodyCentral">

<div
 class="heading" 
 style="background-image: url({RonsWeb});"
  ></div>

<div>
  <div class="bg-gray-800">
    <nav
      class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between">
        <a
          class="text-xl font-bold text-gray-100 md:text-2xl hover:text-blue-400"
          href="/home"
          >Logo
        </a>
        <!-- Mobile menu button -->
        <div on:click={toggleNavbar} class="flex md:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
      <div
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0 {showMenu
          ? 'flex'
          : 'hidden'}"
      >
        <a class="text-gray-100 hover:text-blue-400" href="/home">Home</a>
        <a class="text-gray-100 hover:text-blue-400" href="/blog">Blogs</a>
        <a class="text-gray-100 hover:text-blue-400" href="/contact"
          >Contact US</a
        >
        <a class="text-gray-100 hover:text-blue-400" href="/about">About Us</a>
        <div class="space-y-2">
          <a
            href="/login"
            class="py-3 px-4 text-center border text-gray-800 bg-white hover:text-indigo-600 rounded-md block lg:inline lg:border-0"
          >
            Login
          </a>
          <a
            href="/signup"
            class="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow block lg:inline"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  </div>
</div>



<!--
<nav>
    <div class="menu-container">
        <button on:click={toggleMenu}>click</button>-->
        <!-- <a href="/" class="logo">home</a> -->
        <!--<button class="hamburger" on:click={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
    {#if isMenuOpen}
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/">outofservice</a></li>
        <li><a href="/allenskywolf">AllenSkyWolf</a></li>
        <li><a href="/">outofservice</a></li>
        <li><a href="/">outofservice</a></li>
    </ul>
    {/if}
</nav>    -->




<!--
<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation

</p>

-->

<!--
   from old private app

-->

<div class="bodyTwo">
    <aside>
        {#if selectedScripture === 'Rev'}
        <p>Revelation 3:11</p>
        <p>{RevMessage}</p>
    {:else if selectedScripture === 'Zack'}
        <p>Zachariah 4:6</p>
        <p>{ZachMessage}</p>
    {:else if selectedScripture === 'Jer'}
        <p>Jeremiah 18:14</p>
        <p>{JerMessage}</p>
    {:else if selectedScripture === 'Prov'}
        <p>Proverbs 3:3</p>
        <p>{ProvMessage}</p>
    {:else}
        <p>No selection made.</p>
    {/if}

  	</aside>
    <div class="bodyTwo">
       <h1>Scripture Selection</h1>
    <form>
        <fieldset>
            <legend>Which scripture do you want shown?</legend>
            <input type="radio" name="script" id="r" value="Rev" bind:group={selectedScripture}/>
            <label for="r" class="fset001">Revelation 3:11</label>
            <input type="radio" name="script" id="z" value="Zack" bind:group={selectedScripture}/>
            <label for="z" class="fset001">Zachariah 4:6</label>
            <input type="radio" name="script" id="j" value="Jer" bind:group={selectedScripture}/>
            <label for="j" class="fset001">Jeremiah 18:14</label>
            <input type="radio" name="script" id="p" value="Prov" bind:group={selectedScripture}/>
            <label for="p" class="fset001">Proverbs 3:3</label>


        </fieldset>
    </form>
</div>
	<article><h3>article</h3>
    {#if isOn}
    Team USA defeats 'punch in the mouth' we needed - Durant
   
    {/if}


    
    </article>
	
	
	
</div>


<div id="divButton">
<input type="button" id="buttonArticle" value={isOn ? 'hide' : 'show'} on:click={toggle} class={isOn ? 'on' : 'off'} />

</div>


<!--     -->
<div class="pictureContainer">
<div 
class="footer01"
style="background-image: url({RonsWeb2});"
>
</div>
</div>
<div class="leftySkateBoard">Photo by Budgeron Bach from Pexels</div>
<div class="lastblock">

</div>
<div class="lastblock2">
    By Ronald Kiefer on April 4, 2025
</div>
</div>
<!--i try to be respectable ha ha-->



<style>
/*
nav {
        background-color: #476C9B;
        padding: 10px 20px;
    }
*/

/*
    .menu-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
*/
/*
    .logo {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
    }

    .hamburger {
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }


	.hamburger span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: #fff;
        border-radius: 2px;
        transition: transform 0.3s ease;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: none;
        flex-direction: column;
    }

    ul.open {
        display: flex;
    }

    ul li {
        margin: 10px 0;
    }

	ul li a {
        color: #fff;
        text-decoration: none;
        padding: 10px 20px;
        border-radius: 4px;
        transition: background-color 0.3s;
    }

    ul li a:hover {
        background-color: #0000CC;
    }
*/
    .heading {    
        height: 170px; /* Adjust as needed */
        width: 100%; /* Full width */
        background-color: #0000CC;
        
        background-size:contain;
        background-position: center;
        background-repeat: no-repeat;
        
         /*margin: 0px;*/
        margin-right: 20px;
        margin-bottom: 10px;
        


     }




    /* Responsive styles */
    @media (min-width: 768px) {
        .hamburger {
            display: none;
        }

        ul {
            display: flex;
            flex-direction: row;
        }
		ul li {
            margin: 0 10px;
        }
    }


    .footer01 {
        background-color: #0000CC;
        height: 100%;
        background-size: contain;
        background-position: right;
        background-repeat: no-repeat;
        width: 100%;
        float: right;
    }

    .pictureContainer {
        height: 200px; /* Full viewport height */
        width: 25%; /* Full width */
        background-color: red;
        float: right;
        padding: 20px;
        margin-top: 70px;
        margin-bottom: 70px;

    }

    aside{
    
    background-color: deepskyblue;
    
    padding: 50px 20px;
    height: 80px;
    margin-top: 30px;
}


#buttonArticle {

    background-color: rgb(146, 138, 199);

    border-radius: 10px;
    position: relative;
    float: right;
    top: -10px;
    right: 100px;
    
}


article {
 background-color:rgb(146, 138, 199);
 color: white;
 font-size: 20px;
 /*padding: 50px 20px;
 padding-top: 10px;*/
 margin-top: 50px;
 margin-bottom: 20px;
 height: 190px;
 padding:20px;

}





article h3{

/*margin-left: 20px;*/
padding-top: 0px;
color: black;
font-size: 16px;
padding-bottom: 20px;
}

.leftySkateBoard {
    font-size: 24px;
    color: lightgray;
    background-color: #0000CC;
    width: 50%;
    height: 100px;
    padding-top: 30px;
    padding-left: 20px;
    padding-bottom: 20px;
    margin-top: -17px;
    padding-right: 20px;
}

.lastblock {
    background-color: #6da6f1;
    height: 50px;
    width: 50%;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
    margin-top: -17px;
    padding-right: 20px;
}

.lastblock2 {
    background-color: #476C9B;
    height: 25px;
    width: 100%;
    padding-top: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
    margin-top: 130px;
    padding-right: 20px;
    color: white;
    font-size: 22px;

}

.bodyCentral {
    background-color: lightgray;
}

</style>
	
	
	
	