<script>
    import { products } from './database.json'
    import { onMount } from 'svelte';
    import ProductFilter from './ProductFilter.svelte';

    let selectedOption = 'All'; // default option
    let filteredProducts; // Computed property to hold filtered products

    onMount(() => {
        // Fetch or initialize your products
    });

    $: {
        if (selectedOption !== 'All') {
            filteredProducts = products.filter(product => product.categories.includes(selectedOption));
        }
    }
</script>

<h2>Products</h2>

<ProductFilter bind:selectedOption />

<div class="text-center w-100 m-0 p-0">
    <div class="d-flex flex-row flex-wrap d-flex d-flex justify-content-center">
        {#each products as {title, categories, description, specifics, img, link}, index}
        <div class="card col-sm-12 col-md-3 p-0 m-1">
            <img class="card-img-top" src="{img}" alt="{title}" />
            <div class="card-body">
                <h3 class="card-title">{title}</h3>
                <p class="card-text">{description}</p>
                <!--<h5>Details</h5>
            {#if specifics}
            <ul>
                {#each specifics as detail}
                <li><span class="bold">-</span> {detail}</li>
                {/each}
            </ul>
            {/if}-->
                <a href="{link}" type="button" class="btn w-100">Purchase</a>
            </div>
        </div>
        {/each}
    </div>
</div>

<style>
    .card {
        background-color: rgba(255, 255, 255, 0.5);

        padding: 10px;
    }

    img {
        border-radius: 5px;
        background: none;
    }

    h2,
    h3 {
        text-align: center;
        font-weight: bolder;
    }

    .card-img-top {
        width: 75%;
        height: 75%;
        object-fit: contain;
        margin: auto;
    }
</style>