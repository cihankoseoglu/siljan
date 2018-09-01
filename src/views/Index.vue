<template>
    <div class="home-page">
        <Navbar></Navbar>
        <Hero></Hero>
        <Separator></Separator>
        <Testimonials></Testimonials>
        <Separator></Separator>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '../components/navbar/Navbar.vue';
import Hero from '../components/index/Hero.vue';
import Separator from '../components/index/Separator.vue';
import Footer from '../components/footer/Footer.vue';

export default {
  name: 'index',
  components: {
      Navbar,
      Hero
  }
};
</script>

<style scoped>
.home-page {
    margin: 0;
    padding: 0;
}
</style>
