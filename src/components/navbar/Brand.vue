<template>
    <div class="navbar-brand">
        <router-link to="/">
            <img src="../../assets/Logo.png" alt="Siljan Logo">
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'brand',
};
</script>

<style scoped>
.navbar-brand {
    padding: 5px;
}

.navbar-brand img {
    width: 110px;
    height: 30px;
}
</style>

