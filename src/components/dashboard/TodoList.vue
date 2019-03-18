<template>
    <div class="wrapper">
        <ul class="todo-list" v-for="todo in todos" :key="todo.title">
            <TodoItem :task="todo.title"/>
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import TodosService from '../../services/TodosService'

export default {
  name: 'todolist',
  components: {
    TodoItem,
  },
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    this.fetchTodos()
  },
  methods: {
    async fetchTodos() {
      const response = await TodosService.fetchTodos()
      this.todos = response.data
    }
  }
};
</script>

<style scoped>
.todo-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
}
</style>
