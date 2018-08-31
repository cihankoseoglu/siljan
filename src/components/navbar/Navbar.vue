<template>
    <div class="navbar">
        <Brand></Brand>
        <SearchBar v-if="!index"></SearchBar>
        <Profile v-if="!index"></Profile>
        <IndexAuth v-if="index"></IndexAuth>

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
        },
        props: {
            index: false,
        }
    };
</script>

<style>

.navbar {
    display: flex;
    flex-wrap: wrap;
    position: sticky;
    align-items: center;
    justify-content: space-around;
    margin: 0 20px;
    padding: 10px 20px 10px 20px;
    border-bottom: 2px solid var(--blue);
}


</style>

