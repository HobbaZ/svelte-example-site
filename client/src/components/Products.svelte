<script>
    import { products } from './database.json'

    let filterOptions = ["Mens", "Womens", "Accessories"];
    let selectedOption;

    function handleOptionChange(event) {
        selectedOption = event.target.value;
    }

    let filteredProducts; // Computed property to hold filtered products

    $: {
        if (selectedOption !== 'All') {
            filteredProducts = products.filter(product => product.categories.includes(selectedOption));
        } else {
            filteredProducts = products
        }
    }
</script>

<h2>Products</h2>

<div class="customSelect">
    <select class="form-control" bind:value={selectedOption}>
        <!-- Add a default option with the "selected" attribute -->
        <option value="All">All</option>

        {#each filterOptions as option}
        <option value="{option}">
            {option}
        </option>
        {/each}
    </select>
</div>

<div class="text-center w-100 m-0 p-0">
    <div class="d-flex flex-row flex-wrap d-flex d-flex justify-content-center">
        {#each filteredProducts as {title, categories, description, specifics, img, link}, index}
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
        width: 90%;
        height: 90%;
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

    .customSelect select {
        border-radius: 5px;
        margin-bottom: 10px;
        font-size: 20px;
    }

    select {
        width: 50%;
        margin: auto;

    }
</style>