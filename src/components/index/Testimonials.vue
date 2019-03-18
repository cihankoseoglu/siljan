<template>
    <div class="testimonials">
        <TestimonialCard
          username="Karen McDougal"
          testimony="Such an amazing application. Thanks to Siljan I was able to plan my life so good.">
        </TestimonialCard>
        <TestimonialCard
          username="Karen McDougal"
          testimony="Such an amazing application. Thanks to Siljan I was able to plan my life so good.">
        </TestimonialCard>
        <TestimonialCard
          username="Karen McDougal"
          testimony="Such an amazing application. Thanks to Siljan I was able to plan my life so good.">
        </TestimonialCard>
        <TestimonialCard
          username="Karen McDougal"
          testimony="Such an amazing application. Thanks to Siljan I was able to plan my life so good.">
        </TestimonialCard>

    </div>
</template>

<script>
import TestimonialCard from './TestimonialCard.vue';

export default {
  name: 'testimonials',
  components: {
    TestimonialCard,
  },
};
</script>

<style scoped>
.testimonials {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 40px 0;
}
</style>

