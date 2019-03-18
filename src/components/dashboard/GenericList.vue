<template>
    <div class="wrapper">
        <p class="list-name"> {{ listName }}</p>
        <ul class="todo-list" v-for="listItem in list" :key="listItem.id">
            <ListItem :task="listItem.item"/>
        </ul>
    </div>
</template>

<script>
import ListItem from './ListItem.vue';

export default {
  name: 'genericlist',
  components: {
    ListItem,
  },
  data() {
    return {
      list: [
        {
          id: 1,
          item: 'Take out the garbage',
        },
        {
          id: 2,
          item: 'Build a time machine',
        },
        {
          id: 3,
          item: 'Pick up daughter from skewl',
        },
        {
          id: 4,
          item: 'Kill hipsters',
        },
      ],
    };
  },
  props: ['listName'],
};
</script>

<style scoped>

.todo-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

</style>
