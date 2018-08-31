<template>
    <div class="navbar">
        <p>Hello I am a navbar</p>
    </div>
</template>

<script>
import Brand from './Brand.vue';
import SearchBar from './SearchBar.vue';
import Profile from './Profile.vue';
import IndexAuth from './IndexAuth.vue';

    export default {
        name: 'navbar',
        components: {
            Brand,
            SearchBar,
            Profile,
            IndexAuth,
        }
    };
</script>

<style>


</style>

