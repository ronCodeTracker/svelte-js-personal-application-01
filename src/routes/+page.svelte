



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
        <li><a href="/about">about</a></li>
        <li><a href="/aboutPageTwo">about page two</a></li>
        <li><a href="/props">props</a></li>
        <li><a href="/logic">logic</a></li>
    </ul>
</nav>




<h1>Welcome to SvelteKit</h1>
<p>
	Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation
</p>

<script>
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>



<style>

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

</style>
	
	
	
	