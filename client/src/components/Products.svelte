<script>
    import { products } from './database.json'
</script>

<h2>Products</h2>

<div class="row">

    {#each products as {title, categories, description, specifics, img, link}, index}
    <div class="card col-sm-12 col-md-4 m-2">
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

<style>
    .card {
        background-color: rgba(255, 252, 252, 0.219);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-bottom: 1px solid rgba(255, 252, 252, 0.219);
        padding: 10px;

    }

    img {
        border-radius: 5px;
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