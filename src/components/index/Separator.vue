<template>
    <div class="separator-main">
        <p>{{ separatorText }}</p>
    </div>
</template>

<script>
    export default {
        name: 'separator',
        props: ['separatorText'],
    };
</script>

<style scoped>
.separator-main {
    display: flex;
    justify-content: center;
    background-color: var(--blue);
}

.separator-main p {
    margin: 30px 0;
    color: var(--white);
    font-size: 40px;
    font-family: var(--font-family-open-sans);
}

</style>

