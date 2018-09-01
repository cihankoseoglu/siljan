<template>
    <div class="testimonial">
        <p class="username">{{ username }}</p>
        <p class="testimony"> {{ testimony }}</p>
    </div>
</template>

<script>
    export default {
        name: 'testimonialcard',
        props: ['username', 'testimony'],
    };
</script>

<style scoped>

.testimonial {
    display: flex;
    flex-direction: column;
    background-color: var(--white);
    border: 2px solid var(--blue);
    flex-basis: 400px;
    padding: 20px;
    margin-bottom: 20px;
}

.testimonial .username {
    font-family: var(--font-family-nunito);
    font-size: 20px;
    margin-bottom: 20px;
    padding: 0 20px;
    color: var(--blue);
}

.testimonial .testimony {
    font-family: var(--font-family-open-sans);
    font-size: 16px;
    margin-bottom: 20px;
    padding: 0 20px;
    color: var(--blue);
}
</style>

