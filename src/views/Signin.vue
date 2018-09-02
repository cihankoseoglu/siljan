<template>
    <div class="signin-page">
        <router-link to="/"><img src="../assets/siljanbrand.svg" alt="Siljan Brand Image"></router-link>
        <login-form></login-form>
    </div>
</template>

<script>
import LoginForm from '../components/index/LoginForm.vue';

export default {
  name: 'signin',
  components: {
    LoginForm,
  },
};
</script>

<style scoped>
.signin-page {
    margin: 0;
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
}

.signin-page img {
    margin-bottom: 60px;
    max-width: 300px;

}
</style>
