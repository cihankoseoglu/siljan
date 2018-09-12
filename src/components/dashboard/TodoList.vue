<template>
    <div class="wrapper">
        <ul class="todo-list" v-for="todo in todos" :key="todo.id">
            <TodoItem :task="todo.task" :priority="todo.priority"/>
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'todolist',
  components: {
    TodoItem,
  },
  data() {
      return {
          todos: [
              {
                  id: 1,
                  task: "Take out the garbage",
                  priority: "hi",
              },
              {
                  id: 2,
                  task: "Build a time machine",
                  priority: "lo",
              },
              {
                  id: 3,
                  task: "Pick up daughter from skewl",
                  priority: "mid",
              },
              {
                  id: 4,
                  task: "Kill hipsters",
                  priority: "mid",
              },
          ],
      }
  },
};
</script>

<style scoped>
.todo-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
</style>
