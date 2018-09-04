<template>
    <ul class="navbar-items">
        <router-link to="signin" tag="li"><a>Sign in</a></router-link>
        <router-link to="signin" tag="li"><a>Sign up</a></router-link>
    </ul>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'indexauth',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style scoped>
.navbar-items {
    list-style-type: none;
}

.navbar-items li {
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

