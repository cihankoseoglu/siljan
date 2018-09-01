<template>
    <ul class="todo-list">
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
    </ul>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'todolist',
  components: {
      TodoItem,
  }
};
</script>

<style scoped>

.todo-list {
    list-style-type: none;
}

</style>
