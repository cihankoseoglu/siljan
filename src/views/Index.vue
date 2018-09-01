<template>
    <div class="home-page">
        <Navbar index="true"></Navbar>
        <Hero></Hero>
        <Separator separator-text="How it works"></Separator>
        <Separator separator-text="Testimonials"></Separator>
        <Testimonials></Testimonials>
        <Separator separator-text="Let's plan your life"></Separator>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '../components/navbar/Navbar.vue';
import Hero from '../components/index/Hero.vue';
import Separator from '../components/index/Separator.vue';
import Testimonials from '../components/index/Testimonials.vue';
import Footer from '../components/footer/Footer.vue';

export default {
  name: 'index',
  components: {
      Navbar,
      Hero,
      Separator,
      Testimonials,
      Footer
  }
};
</script>

<style scoped>
.home-page {
    margin: 0;
    padding: 0;
}
</style>
