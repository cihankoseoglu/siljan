<template>
  <div class="dashboard">
    <Navbar></Navbar>
    <div class="main-pane">
      <Sidebar></Sidebar>
      <div class="right-pane">
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/navbar/Navbar.vue';
import AddTodo from '../components/dashboard/AddTodo.vue';
import Sidebar from '../components/Sidebar.vue';
import TodoList from '../components/dashboard/TodoList.vue';

export default {
  name: 'dashboard',
  components: {
    Navbar,
    AddTodo,
    Sidebar,
    TodoList,
  },
  mounted() {},
};
</script>

<style scoped>
.dashboard {
  margin: 0;
  padding: 0;
}

.dashboard .main-pane {
  display: flex;
}

.dashboard .main-pane .right-pane {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: var(--blue);
  color: var(--white);
}
</style>
