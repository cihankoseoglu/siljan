<template>
    <div class="signup-page">
        <router-link to="/"><img src="../assets/siljanbrand.svg" alt="Siljan Brand Image"></router-link>
        <signup-form></signup-form>
    </div>
</template>

<script>
import SignupForm from '../components/index/SignupForm.vue';

export default {
  name: 'signup',
  components: {
    SignupForm,
  },
};
</script>

<style scoped>
.signup-page {
    margin: 0;
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--white);
}

.signup-page img {
    margin-bottom: 60px;
    max-width: 300px;

}
</style>
