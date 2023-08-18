<script>
    let filterOptions = ["Mens", "Womens", "Accessories"];
    let selectedOption;

    function handleOptionChange(event) {
        selectedOption = event.target.value;
    }
</script>

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

<style>
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