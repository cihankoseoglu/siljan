<template>
    <div class="navbar-search-bar">
        <form @submit.prevent="searchForItem">
            <input type="text" placeholder="Search for an item..." v-model="todoItem" name="itemSearch" autocomplete="off">
        </form>
    </div>
</template>

<script>
    export default {
        name: 'searchbar',
        data() {
            return {
                todoItem: ''
            }
        },
        methods: {
            searchForItem() {

            }
        }
    };
</script>

<style scoped>
.navbar-search-bar {
    padding: 5px;
}

.navbar-search-bar input[type="text"] {
    width: 400px;
    height: 40px;
    font-size: 24px;
    font-family: Avenir, Roboto, Helvetica, sans-serif;
    font-weight: 100;
    border: none;
}

.navbar-search-bar input::placeholder {
    opacity: 1;
    transition: opacity .2s;
    padding: 0;
    text-align: center;
    font-weight: 100;
    color: var(--light-gray);
}

.navbar-search-bar input:hover {
    border: none;
}

.navbar-search-bar input:focus {
    outline: 0;
}

.navbar-search-bar input:focus::placeholder {
    opacity: 0;
}
</style>

