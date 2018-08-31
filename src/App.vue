<template>
  <div class="home">
    <Index></Index>
  </div>
</template>

<script>
// @ is an alias to /src
import Index from '@/views/Index.vue';

export default {
  name: 'app',
  components: {
    Index,
  },
};
</script>
