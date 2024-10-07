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
    ]
</script>

<style>
    .portfolio {
        display: flex;
        flex-wrap: wrap;
        gap: 16px; 
        padding: 20px; 
        background-color: #f0f0f0; 
        border-radius: 8px; 
    }
    .portfolio h1 {
        width: 100%; 
        text-align: center; 
        margin-bottom: 20px; 
    }
    .portfolio img {
        width: calc(50% - 8px); 
        height: auto; 
        max-height: 500px; 
        object-fit: contain; 
        border-radius: 8px; 
        border: 1px solid #34495e; 
        padding: 4px; 
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1); 
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
