<script>
    import "../app.css";

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="navbar">
    <a href="/" class="mr-auto font-bold logo">Mark Francis G. Jusoy</a>
    <button class="burger" on:click={toggleMenu} aria-label="Toggle navigation" aria-expanded={isMenuOpen}>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    </button>
    <div class={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
    </div>
</div>

<main class="main-content">
    <slot></slot>
</main>

<style>
    :global(body) {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #9dc5c0; 
    }

    /* Navbar styles */
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap; 
        background-color: #34495e; 
        padding: 1rem 2rem; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
    }

    .navbar a {
        color: #ffffff; 
        text-decoration: none; 
        padding: 0.5rem 1rem; 
        transition: background-color 0.3s, color 0.3s, transform 0.2s; 
        border-radius: 5px; 
    }

    .navbar .logo {
        font-size: 1.5rem; 
        font-weight: bold; 
    }

    .navbar a:hover {
        background-color: #1abc9c; 
        color: #ffffff; 
        transform: scale(1.04); 
    }

    .burger {
        display: none; /* Hidden by default */
        flex-direction: column;
        cursor: pointer;
        background: none; /* Remove default button styling */
        border: none; /* Remove border */
    }

    .line {
        width: 25px;
        height: 3px;
        background-color: #ffffff;
        margin: 4px 0;
        transition: 0.3s;
    }

    /* Main content styles */
    .main-content {
        padding: 2rem; 
    }

    /* Responsive styles */
    @media (max-width: 768px) {
        .navbar {
            flex-direction: column; 
            align-items: flex-start; 
        }

        .navbar-links {
            display: none; /* Hide by default */
            flex-direction: column;
            width: 100%; 
        }

        .navbar-links.open {
            display: flex; /* Show when open */
        }

        .navbar a {
            width: 100%; 
            text-align: left; 
            padding: 1rem; 
        }

        .burger {
            display: flex; /* Show burger menu */
        }
    }

    @media (max-width: 480px) {
        .navbar .logo {
            font-size: 1.2rem; 
        }

        .main-content {
            padding: 1rem; 
        }
    }
</style>
