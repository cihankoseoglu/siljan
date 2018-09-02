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
        props: ['index'],
    };
</script>

<style>

.navbar {
    display: flex;
    flex-wrap: wrap;
    position: sticky;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0;
    background-color: var(--white);
    color: var(--blue);
}
</style>

