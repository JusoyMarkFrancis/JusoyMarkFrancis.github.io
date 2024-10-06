<script>
    import "../app.css";
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap" rel="stylesheet">
</svelte:head>

<div class="navbar">
    <a href="/" class="mr-auto font-bold logo">Mark Francis G. Jusoy</a>
    <a href="/about">About</a>
    <a href="/portfolio">Portfolio</a>
    <a href="/contact">Contact</a>
</div>

<main class="main-content">
    <slot></slot>
</main>

<style>
    /* Global styles for body */
    :global(body) {
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #9dc5c0; /* Light background for contrast */
    }

    /* Navbar styles */
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #34495e; /* Dark background */
        padding: 1rem 2rem; /* Padding for spacing */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    }

    .navbar a {
        color: #ffffff; /* White text color */
        text-decoration: none; /* Remove underline */
        padding: 0.5rem 1rem; /* Padding around links */
        transition: background-color 0.3s, color 0.3s, transform 0.2s; /* Smooth transition */
        border-radius: 5px; /* Slight rounding of corners */
    }

    /* Specific styles for the logo text */
    .navbar .logo {
        font-size: 1.5rem; /* Adjust this value as needed */
        font-weight: bold; /* Make it bold */
    }

    .navbar a:hover {
        background-color: #1abc9c; /* Darker background on hover */
        color: #ffffff; /* Keep text white on hover */
        transform: scale(1.04); /* Slightly enlarge link on hover */
    }

    /* Main content styles */
    .main-content {
        padding: 2rem; /* Spacing around main content */
    }
</style>