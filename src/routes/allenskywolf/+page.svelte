
<script>

    import AllenSkyWolf from '$lib/assets/AllenSkyWolfHeader001.png';




    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
     }



     let selectedScripture = ''; // Variable to hold the selected value


     import scriptureData from '$lib/data/scripture.json';

        var RevMessage = scriptureData.scripture[0].RevMessage;
        var ZachMessage = scriptureData.scripture[1].ZachMessage;
        var JerMessage = scriptureData.scripture[2].JerMessage;
        var ProvMessage = scriptureData.scripture[3].ProvMessage;






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
        <li><a href="/about">About</a></li>
        <li><a href="/allenskywolf">AllenSkyWolf</a></li>
        <li><a href="/props">props</a></li>
        <li><a href="/logic">logic</a></li>
    </ul>
</nav>

<div class="bodyTwo">

    <aside>
        {#if selectedScripture === 'Rev'}
        <p class="message01">Revelation 3:11</p>
        <p class="message01">{RevMessage}</p>
    {:else if selectedScripture === 'Zack'}
        <p class="message01">Zachariah 4:6</p>
        <p class="message01">{ZachMessage}</p>
    {:else if selectedScripture === 'Jer'}
        <p class="message01">Jeremiah 18:14</p>
        <p class="message01">{JerMessage}</p>
    {:else if selectedScripture === 'Prov'}
        <p class="message01">Proverbs 3:3</p>
        <p class="message01">{ProvMessage}</p>
    {:else}
        <p class="message01">No selection made.</p>
    {/if}

  	</aside>


      <div class="bodyTwo">
        <h2 class="h2tag">Scripture Selection</h2>
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




</div>


</div>

<br><br><br><br><br><br><br><br>








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




</style>

