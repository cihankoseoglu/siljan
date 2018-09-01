<template>
    <div class="index-hero">
        <div class="index-brand">
            <img src="../../assets/siljanbrand.svg" alt="Siljan Brand Image">
            <div class="index-brand-text">
                <p class="brand-header">A simple and customizable life planner</p>
                <p class="brand-subheader">Zero-distraction from main todos, complimented with customized lists.</p>
            </div>

        </div>
        <SignupForm></SignupForm>
    </div>
</template>

<script>
import SignupForm from './SignupForm.vue';
import LoginForm from './LoginForm.vue';

    export default {
        name: 'hero',
        components: {
            SignupForm,
            LoginForm,
        },
    };
</script>

<style scoped>
.index-hero {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
}

.index-hero .index-brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    border-right: 2px solid var(--blue);
    margin-right: 40px;
    padding-right: 40px;
}

.index-hero .index-brand img {
    width: 240px;
    height: 185px;
}

.index-hero .index-brand .index-brand-text {
    margin-top:10px;
}

.index-hero .index-brand .index-brand-text .brand-header {
    font-size: 28px;
    color: var(--black);
    font-family: var(--font-family-nunito);
    margin-bottom: 10px;
}

.index-hero .index-brand .index-brand-text .brand-subheader {
    font-size: 16px;
    color: var(--gray);
    font-family: var(--font-family-open-sans);

}


</style>

