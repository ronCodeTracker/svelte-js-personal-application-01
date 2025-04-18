
<script>
   /*

       Name: Ronald Kiefer
       Date: 2025-04-17 Thursday
       Description:  Business and Personal Web Application

   */





    import AllenSkyWolf from '$lib/assets/AllenSkyWolfHeader001.png';
    import RonsWeb2 from '$lib/assets/skate02.gif';



    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
     }



     let selectedScripture = ''; // Variable to hold the selected value


     import scriptureData from '$lib/data/allenskywolf.json';

        var RevMessage = scriptureData.messagedata[0].message01;
        var ZachMessage = scriptureData.messagedata[1].message02;
        var JerMessage = scriptureData.messagedata[2].message03;
        var ProvMessage = scriptureData.messagedata[3].message04;



        let isOn = false;

        function toggle() {
        isOn = !isOn;
        }




</script>




<div class=bodyCentral>
<div class="heading" 
style="background-image: url({AllenSkyWolf});">




</div>


<nav>
    <div class="menu-container">
        <a href="/" class="logo">home</a>
        <button class="hamburger" on:click={toggleMenu} aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
    <ul class:open={isMenuOpen}>
        <li><a href="/">Home</a></li>
        <li><a href="/">outofsevice</a></li>
        <li><a href="/allenskywolf">AllenSkyWolf</a></li>
        <li><a href="/">outofservice</a></li>
        <li><a href="/">outofservice</a></li>
    </ul>
</nav>

<div class="bodyTwo">

    <aside>
        {#if selectedScripture === 'Phone'}
        <p class="message01"></p>
        <p class="message01">{RevMessage}</p>
    {:else if selectedScripture === 'Web'}
        <p class="message01"></p>
        <p class="message01">{ZachMessage}</p>
    {:else if selectedScripture === 'How'}
        <p class="message01"></p>
        <p class="message01">{JerMessage}</p>
    {:else if selectedScripture === 'Cont'}
        <p class="message01"></p>
        <p class="message01">{ProvMessage}</p>
    {:else}
        <p class="message01">No selection made.</p>
    {/if}

  	</aside>


      <div class="bodyTwo">
        <h2 class="h2tag">Selection</h2>
     <form>
         <fieldset>
             <legend>Which do you want shown?</legend>
             <input type="radio" name="script" id="r" value="Phone" bind:group={selectedScripture}/>
             <label for="r" class="fset001">Phone Number</label>
             <input type="radio" name="script" id="z" value="Web" bind:group={selectedScripture}/>
             <label for="z" class="fset001">Web App</label>
             <input type="radio" name="script" id="j" value="How" bind:group={selectedScripture}/>
             <label for="j" class="fset001">How</label>
             <input type="radio" name="script" id="p" value="Cont" bind:group={selectedScripture}/>
             <label for="p" class="fset001">Continue</label>
 
 
         </fieldset>
     </form>
 </div>

 <article><h3>article</h3>
    <div class="largeFont01">
        {#if isOn}
          Call Me!
        {/if}
        <br>
    </div>
    <div class="largeFont02">
        <br>
        {#if isOn}
        Get started on your custom app today, so you will have it tomorrow. 
        {/if}
        <br>
    
</article>



<div id="divButton">
    <input type="button" id="buttonArticle" value={isOn ? 'hide' : 'show'} on:click={toggle} class={isOn ? 'on' : 'off'} />
    
</div>
    

</div>

<div class="blackdiv">


    
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
    Updated by Ronald Kiefer on April 10, 2025
</div>



</div>



 </div>


<style>

.heading {    
        height: 250px; /* Adjust as needed */
        width: 100%; /* Full width */
        background-color: #000000;
        
        background-size:contain;
        background-position: center;
        background-repeat: no-repeat;
        
         /*margin: 0px;*/
        margin-right: 20px;
        margin-bottom: 10px;
        


     }



     nav {
        background-color: #476C9B;
        padding: 10px 20px;
    }

    .menu-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

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


    aside{
    
    background-color: deepskyblue;
    
    padding: 20px 20px;
    padding-bottom: 120px;
    padding-top: 30px;
    height: 80px;
    margin-top: 30px;
    width: 90%;
    margin: auto;
    margin-top: 30px;
   

}

/* background of body    */
.bodyCentral {
    background-color: #000000;
    
}



.bodyTwo {
    background-color: lightblue;
    padding-top: 30px;
    padding-bottom: 100px;
}

form {
    font-size: 20px;
    padding-left: 20px; 
}

.message01 {
    font-size: 24px;
}


.h2tag {
    padding-left: 20px;
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

height: 190px;
padding:20px;
width: 85%;
margin: auto;
margin-top: 0px;
margin-bottom: 30px;


}





article h3{

/*margin-left: 20px;*/
padding-top: 0px;
color: black;
font-size: 16px;
padding-bottom: 20px;
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
        background-color: #f9cdc4;
        float: right;
        padding: 20px;
        margin-top: 70px;
        margin-bottom: 70px;

    }


.blackdiv {
    background-color: #000000;
    padding: 5%;
    height: 350px;
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

.largeFont01 {
    font-size: 28px;
    margin-left: 10px;
}

.largeFont02 {
    margin-left: 10px;
    font-size: 24px;
}

</style>

