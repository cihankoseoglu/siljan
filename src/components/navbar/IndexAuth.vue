<template>
    <ul class="navbar-items">
        <li class="navbar-item"><a href="#howitworks">How it works?</a></li>
        <li class="navbar-item"><a href="#login">Sign in</a></li>
        <li class="navbar-item"><a href="#signup">Sign up</a></li>
    </ul>
</template>

<script>
    export default {
        name: 'indexauth',
        data() {
            return {
            }
        },
        methods: {
        }
    };
</script>

<style scoped>
.navbar-items {
    list-style-type: none;
}

.navbar-items .navbar-item {
    display: inline-block;
    padding: 0 10px;
}

a {
    color: var(--black);
    font-size: 18px;
    text-decoration: none;
}

a:visited {
    color: var(--black);
}
</style>

