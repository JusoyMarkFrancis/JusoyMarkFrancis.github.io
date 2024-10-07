<script>
    let images = [
        { src: 'Images/system1a.PNG', alt: 'Unfold' },
        { src: 'Images/system1b.PNG', alt: 'Unfold' },
        { src: 'Images/system1c.PNG', alt: 'Unfold' },
        { src: 'Images/system1d.PNG', alt: 'Unfold' },
    ];

    let additionalImages = [
        { src: 'Images/system2a.PNG', alt: 'E-Commerce' },
        { src: 'Images/system2b.PNG', alt: 'E-Commerce' },
        { src: 'Images/system2c.PNG', alt: 'E-Commerce' },
        { src: 'Images/system2d.PNG', alt: 'E-Commerce' },
    ];
</script>

<style>
    .portfolio {
        display: flex;
        flex-wrap: wrap;
        gap: 16px; /* Adjust the gap between images */
        padding: 20px; /* Optional padding around the portfolio */
        background-color: #f0f0f0; /* Grey background */
        border-radius: 8px; /* Optional: for rounded corners on the background */
    }
    .portfolio h1 {
        width: 100%; /* Makes the title span the full width */
        text-align: center; /* Center the title */
        margin-bottom: 20px; /* Space between title and images */
    }
    .portfolio img {
        width: calc(50% - 8px); /* Two images per row with some gap */
        height: auto; /* Allow height to adjust based on aspect ratio */
        max-height: 500px; /* Increased max height for bigger images */
        object-fit: contain; /* Ensures the entire image is visible */
        border-radius: 8px; /* Optional: for rounded corners */
        border: 1px solid #34495e; /* Add border around the image */
        padding: 4px; /* Optional: padding between the image and the border */
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); /* Optional: subtle shadow for depth */
    }
    .section {
        margin-top: 40px; /* Space between sections */
    }
</style>

<div class="portfolio">
    <h1 class="text-3xl font-bold mb-4 text-center" style="color: #34495e;">Unfold - Student Profiling/Portfolio</h1>
    {#each images as image}
        <img src={image.src} alt={image.alt} />
    {/each}
</div>

<div class="portfolio section">
    <h1 class="text-3xl font-bold mb-4 text-center" style="color: #34495e;">E-Commerce</h1>
    {#each additionalImages as image}
        <img src={image.src} alt={image.alt} />
    {/each}
</div>
